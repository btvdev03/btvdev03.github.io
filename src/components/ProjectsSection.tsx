import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FolderGit2,
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Star,
  Sparkles,
  Layers,
  Clock,
  Code2,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { engineeringProjects } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null)

  const categories = ['All', 'Developer Tools', 'Web Extension', 'Automation & AI', 'Productivity']

  const filteredProjects =
    selectedCategory === 'All'
      ? engineeringProjects
      : engineeringProjects.filter((p) => p.category === selectedCategory)

  const handleCopySnippet = (id: string, snippet: string) => {
    navigator.clipboard.writeText(snippet)
    setCopiedSnippetId(id)
    triggerConfetti()
    setTimeout(() => {
      setCopiedSnippetId(null)
    }, 2000)
  }

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Open Source & Developer Tools</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dự án Kỹ thuật & Công cụ Mã nguồn mở
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Các công cụ độc lập và tiện ích được tôi xây dựng từ nhu cầu lập trình thực tế:
            từ CLI bóc phốt commit, tiện ích dịch thuật MV3 không độ trễ, cho đến hệ sinh thái tổng hợp ý tưởng nghiên cứu tự động.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-950/40'
                  : 'bg-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat === 'All' ? 'Tất cả dự án' : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isSnippetCopied = copiedSnippetId === project.id

            return (
              <div key={project.id} id={`project-${project.name}`}>
                <SpotlightCard
                  spotlightColor="rgba(16, 185, 129, 0.12)"
                  borderColor="rgba(16, 185, 129, 0.35)"
                  className="p-6 sm:p-7 h-full flex flex-col justify-between"
                >
                  <div>
                    {/* Top Meta: Badge & Category */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                          {project.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {project.category}
                        </span>
                      </div>
                      {project.starredCount && (
                        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {project.starredCount}
                        </span>
                      )}
                    </div>

                    {/* Name & Tagline */}
                    <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span>{project.name}</span>
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-emerald-300/90 mt-1">
                      {project.tagline}
                    </p>

                    {/* Full Description */}
                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="mt-4 space-y-1.5 border-t border-white/5 pt-3">
                      {project.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Terminal command snippet */}
                    {project.terminalSnippet && (
                      <div className="mt-4 rounded-xl bg-black/60 border border-white/10 p-2.5 flex items-center justify-between font-mono text-xs text-slate-300 group">
                        <div className="flex items-center gap-2 overflow-x-auto">
                          <span className="text-emerald-400 select-none">$</span>
                          <span className="truncate">{project.terminalSnippet}</span>
                        </div>
                        <button
                          onClick={() => handleCopySnippet(project.id, project.terminalSnippet!)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 shrink-0 ml-2 transition-colors"
                          title="Sao chép lệnh"
                        >
                          {isSnippetCopied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Bottom Footer: Tech Stack & Links */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-xl border border-white/10 hover:border-emerald-500/40 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Xem Repository</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-300 hover:text-emerald-200 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/30 transition-colors"
                        >
                          <span>Mở Trực tiếp</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
