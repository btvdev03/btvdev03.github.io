import React from 'react'
import {
  Network,
  Code2,
  BrainCircuit,
  Boxes,
  Cpu,
  CheckCircle2,
  Terminal,
} from 'lucide-react'
import { skillGroups } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network':
        return <Network className="w-5 h-5 text-emerald-400" />
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-amber-400" />
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-indigo-400" />
      default:
        return <Terminal className="w-5 h-5 text-emerald-400" />
    }
  }

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Systems & Engineering Matrix</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ma trận Năng lực & Công nghệ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Sự kết hợp giữa tư duy mô hình hóa hệ thống thông tin quy mô lớn, kỹ thuật phần mềm chuẩn mực
            và năng lực nghiên cứu dữ liệu, AI/NLP tiên tiến.
          </p>
        </div>

        {/* 4 Category Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <SpotlightCard
              key={group.category}
              spotlightColor="rgba(6, 182, 212, 0.12)"
              borderColor="rgba(6, 182, 212, 0.3)"
              className="p-0 bg-[#080c16]/90 border-cyan-500/25 flex flex-col justify-between overflow-hidden shadow-xl"
            >
              {/* Retro Window Header */}
              <div className="retro-window-header">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>[SKILL_DOMAIN // {group.category.toUpperCase()}]</span>
                </div>
                <div className="text-slate-400 text-[10px]">
                  <span>[ _ ] [ □ ] [ ✕ ]</span>
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {getIcon(group.icon)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-mono">
                      {group.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">{group.description}</p>
                  </div>
                </div>

                {/* Highlighted Banner Technologies */}
                <div className="flex flex-wrap gap-1.5 py-2.5 border-y border-white/5">
                  {group.highlightedTechnologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Detailed Skills List */}
                <div className="space-y-2">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between text-xs p-2 rounded-lg bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="font-medium text-slate-200">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {skill.tags?.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="hidden sm:inline-block text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                        {skill.level && (
                          <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/30">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
