import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const USERNAME = 'btvdev03';
const PROFILE_DATA_PATH = path.join(ROOT, 'profile-data.js');
const SYNC_JSON_PATH = path.join(ROOT, 'public', 'github-sync.json');
const PROFILE_REPO_SYNC_SCRIPT = path.resolve(ROOT, `../${USERNAME}/scripts/sync-readme.mjs`);

function githubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': `${USERNAME}-portfolio-sync`,
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: githubHeaders() });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return res.json();
}

function loadProfileData() {
  const source = fs.readFileSync(PROFILE_DATA_PATH, 'utf8');
  const sandbox = { window: {}, module: { exports: {} } };
  vm.runInNewContext(source, sandbox, { timeout: 1000 });
  return sandbox.window.PROFILE_DATA || sandbox.module.exports;
}

function buildLinkedInMarkdown(data, user, repos) {
  const p = data.profile || {};
  const workItems = (data.timeline || []).filter((t) => t.type === 'work');
  const msc = (data.timeline || []).find((t) => t.id === 'tdmu-msc');
  const totalStars = repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);

  return `# LinkedIn Profile Copy-Paste Sync (${USERNAME})

> Paste into LinkedIn (https://www.linkedin.com/in/${USERNAME}) to match \`btvdev03.github.io\` & GitHub (\`${repos.length} repos · ★ ${totalStars}\`).

## Headline
\`\`\`
Software Engineer & M.Sc. Information Systems | IT Lead | Full-Stack Web, Workflow Automation & Desktop Tools
\`\`\`

## About
\`\`\`
Software Engineer and M.Sc. candidate in Information Systems at Thu Dau Mot University (TDMU), currently working as IT Lead at Hoang Giang Solar and Technical Solutions Member at TDMU Digital Transformation Center.

I build practical software systems, workflow automations, browser/CLI developer tools, and interactive web applications (TypeScript, React, Three.js, Python, FastAPI).

• Portfolio: https://${USERNAME}.github.io
• GitHub: https://github.com/${USERNAME}
• Contact: ${p.email || 'btv.dev03@gmail.com'}
\`\`\`

## Contact Info -> Websites
- Portfolio: \`https://${USERNAME}.github.io\`
- GitHub: \`https://github.com/${USERNAME}\`

## Experience
${workItems.map((w) => `- **${w.title}** — ${w.organization} (${w.period})${w.website ? ` | ${w.website}` : ''}`).join('\n')}

## Education
${msc ? `- **${msc.title}** — ${msc.organization} (${msc.period})` : '- Thu Dau Mot University (TDMU)'}

## Featured & Projects
${(data.projects || []).map((proj) => `- **${proj.name}**: ${proj.githubUrl || proj.demoUrl || ''}`).join('\n')}
`;
}

async function main() {
  const data = loadProfileData();
  const [user, repos] = await Promise.all([
    fetchJson(`https://api.github.com/users/${USERNAME}`),
    fetchJson(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`),
  ]);

  const knownUrls = new Set(
    (data.projects || [])
      .map((p) => (p.githubUrl || '').replace(/\/+$/, '').split('/').pop()?.toLowerCase())
      .filter(Boolean)
  );
  knownUrls.add(USERNAME.toLowerCase());

  const repoSummary = {};
  const extraRepos = [];
  let totalStars = 0;

  for (const r of repos) {
    totalStars += r.stargazers_count || 0;
    const item = {
      name: r.name,
      description: r.description,
      language: r.language,
      stars: r.stargazers_count || 0,
      forks: r.forks_count || 0,
      homepage: r.homepage || null,
      htmlUrl: r.html_url,
      pushedAt: r.pushed_at,
    };
    repoSummary[r.name.toLowerCase()] = item;
    if (!r.fork && !r.archived && !knownUrls.has(r.name.toLowerCase())) {
      extraRepos.push(item);
    }
  }

  const nextPayload = {
    username: USERNAME,
    profile: {
      name: user.name,
      bio: user.bio,
      blog: user.blog,
      company: user.company,
      location: user.location,
      followers: user.followers,
      publicRepos: user.public_repos,
      totalStars,
    },
    repos: repoSummary,
    extraRepos,
  };

  const nextJson = JSON.stringify(nextPayload, null, 2) + '\n';
  const prevJson = fs.existsSync(SYNC_JSON_PATH) ? fs.readFileSync(SYNC_JSON_PATH, 'utf8') : '';
  if (nextJson !== prevJson) {
    fs.writeFileSync(SYNC_JSON_PATH, nextJson, 'utf8');
    console.log(`Updated public/github-sync.json (${repos.length} repos, ★ ${totalStars}).`);
  } else {
    console.log('public/github-sync.json already up to date.');
  }

  // In local multi-repo workspace, keep ../btvdev03/README.md & local LinkedIn cheat sheet synced too
  if (!process.env.CI && fs.existsSync(PROFILE_REPO_SYNC_SCRIPT)) {
    execFileSync(process.execPath, [PROFILE_REPO_SYNC_SCRIPT], { stdio: 'inherit' });
    const linkedinPath = path.join(ROOT, 'LINKEDIN_SYNC.md');
    fs.writeFileSync(linkedinPath, buildLinkedInMarkdown(data, user, repos), 'utf8');
    console.log(`Updated local ${path.basename(linkedinPath)} for LinkedIn copy-paste.`);
  }
}

main().catch((err) => {
  console.error('GitHub sync failed:', err.message);
  process.exit(1);
});
