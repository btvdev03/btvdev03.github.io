import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Terminal,
  ExternalLink,
  Copy,
  Check,
  Code2,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { engineeringProjects } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'
import { retroAudio } from '../lib/retroAudio'

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null)

  const categories = ['All', 'Developer Tools', 'Web Extension', 'Automation & AI', 'Productivity']

  const filteredProjects =
    selectedCategory === 'All'
      ? engineeringProjects
      : engineeringProjects.filter((p) => p.category === selectedCategory)

  const handleCopySnippet = (id: string, snippet: string) => {
    retroAudio.play('success')
    navigator.clipboard.writeText(snippet)
    setCopiedSnippetId(id)
    triggerConfetti()
    setTimeout(() => {
      setCopiedSnippetId(null)
    }, 2000)
  }

  const handleSelectCategory = (cat: string) => {
    retroAudio.play('click')
    setSelectedCategory(cat)
  }

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Open Source & Developer Tools</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dự án Kỹ thuật & Công cụ Mã nguồn mở
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Các tiện ích và CLI độc lập được thiết kế giải quyết trực tiếp nhu cầu kỹ thuật:
            từ CLI phân tích Git, extension dịch thuật MV3 không độ trễ đến pipeline khai phá dữ liệu học thuật.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              className={`min-h-[40px] px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-md shadow-emerald-950/40 glow-emerald'
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
                  spotlightColor="rgba(16, 185, 129, 0.15)"
                  borderColor="rgba(16, 185, 129, 0.35)"
                  className="p-0 bg-[#080c16]/90 border-emerald-500/30 h-full flex flex-col justify-between overflow-hidden shadow-xl"
                >
                  {/* Retro Window Header */}
                  <div className="retro-window-header">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>[TOOL // {project.name}]</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                      <span className="text-cyan-400 font-mono">{project.category}</span>
                      <span>[ _ ] [ □ ] [ ✕ ]</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Meta Tags: Badge & Metric */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {project.badge}
                        </span>
                        {project.metric && (
                          <span className="text-[11px] font-mono font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                            ⚡ {project.metric}
                          </span>
                        )}
                      </div>

                      {/* Name & Tagline */}
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-cyan-200/90 font-mono mt-1">
                        {project.tagline}
                      </p>

                      {/* Concise Description */}
                      <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-3.5 space-y-1.5 pt-3 border-t border-white/5">
                        {project.keyFeatures.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-white/10">
                      {/* Terminal Snippet Box */}
                      {project.terminalSnippet && (
                        <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-lg bg-black/60 border border-white/10 font-mono text-[11px] text-emerald-300">
                          <span className="truncate mr-2">$ {project.terminalSnippet}</span>
                          <button
                            onClick={() => handleCopySnippet(project.id, project.terminalSnippet!)}
                            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                            title="Sao chép lệnh"
                          >
                            {isSnippetCopied ? (
                              <Check className="w-3.5 h-3.5 text-amber-400" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* Tech Stack Chips & Links */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => retroAudio.play('click')}
                              className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-mono transition-all"
                            >
                              <span>Demo</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}

                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => retroAudio.play('click')}
                            className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                          </a>
                        </div>
                      </div>
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
