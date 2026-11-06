import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Server,
  Zap,
  Workflow,
} from 'lucide-react'
import { digitalTransformationCases } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { retroAudio } from '../lib/retroAudio'

export const DigitalTransformationSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(digitalTransformationCases[0].id)

  const activeCase =
    digitalTransformationCases.find((c) => c.id === activeCaseId) || digitalTransformationCases[0]

  const handleSelectCase = (id: string) => {
    retroAudio.play('click')
    setActiveCaseId(id)
  }

  return (
    <section id="transformation" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Digital Transformation & Practical Systems</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Giải pháp Chuyển đổi số & Kỹ thuật Thực tiễn
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Các kiến trúc phần mềm thực chiến giải quyết triệt để điểm nghẽn vận hành:
            xóa bỏ silo dữ liệu, tự động hóa luồng phê duyệt và giám sát trực quan thời gian thực.
          </p>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {digitalTransformationCases.map((caseItem) => {
            const isSelected = caseItem.id === activeCaseId
            return (
              <button
                key={caseItem.id}
                onClick={() => handleSelectCase(caseItem.id)}
                className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer min-h-[44px] ${
                  isSelected
                    ? 'bg-emerald-500/15 border-emerald-500/60 shadow-lg shadow-emerald-950/40 glow-emerald'
                    : 'bg-[#0d1322]/60 border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-emerald-400 text-slate-950 font-bold'
                        : 'bg-white/10 text-slate-400'
                    }`}
                  >
                    {caseItem.badge}
                  </span>
                  {caseItem.featured && (
                    <span className="text-[10px] text-amber-400 flex items-center gap-1 font-mono">
                      ★ Featured
                    </span>
                  )}
                </div>
                <h3
                  className={`text-xs sm:text-sm font-bold line-clamp-1 ${
                    isSelected ? 'text-emerald-200' : 'text-slate-200'
                  }`}
                >
                  {caseItem.title}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">{caseItem.domain}</p>
              </button>
            )
          })}
        </div>

        {/* Active Case Study Spotlight Card */}
        <motion.div
          key={activeCase.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <SpotlightCard
            spotlightColor="rgba(16, 185, 129, 0.15)"
            borderColor="rgba(16, 185, 129, 0.4)"
            className="p-0 bg-[#080c16]/90 border-emerald-500/30 overflow-hidden shadow-2xl"
          >
            {/* Retro Window Header */}
            <div className="retro-window-header">
              <div className="flex items-center gap-2 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>[CASE_STUDY // {activeCase.id.toUpperCase()}]</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                <span className="text-amber-400">STATUS: PRODUCTION</span>
                <span>[ _ ] [ □ ] [ ✕ ]</span>
              </div>
            </div>

            <div className="p-5 sm:p-7 space-y-6">
              {/* Header Title & Quantifiable Metrics Grid */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pb-5 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      {activeCase.domain}
                    </span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs text-slate-400">{activeCase.scope}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeCase.title}
                  </h3>
                </div>

                {/* Quantifiable Results Banner */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-black/60 p-3 rounded-xl border border-emerald-500/20 shrink-0">
                  {activeCase.metrics.map((m, idx) => (
                    <div key={idx} className="text-center px-1 sm:px-3">
                      <div className="text-lg sm:text-2xl font-extrabold text-emerald-300 font-mono">
                        {m.metric}
                      </div>
                      <div className="text-[10px] sm:text-xs text-slate-400 leading-tight mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Pipeline / Architecture Flow Diagram */}
              {activeCase.pipeline && (
                <div className="p-4 rounded-xl bg-black/40 border border-cyan-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 mb-3">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>KIẾN TRÚC LUỒNG DỮ LIỆU & XỬ LÝ (ARCHITECTURE PIPELINE):</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 items-center">
                    {activeCase.pipeline.map((step, idx, arr) => (
                      <React.Fragment key={idx}>
                        <div className="flex items-center justify-center p-2.5 rounded-lg bg-[#0e1628] border border-cyan-500/30 text-center">
                          <span className="text-xs font-mono text-slate-200 leading-tight">
                            {step}
                          </span>
                        </div>
                        {idx < arr.length - 1 && (
                          <div className="hidden sm:flex justify-center text-cyan-400">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Problem vs Solution Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Challenge */}
                <div className="rounded-xl p-4 sm:p-5 bg-rose-500/[0.04] border border-rose-500/25 space-y-2">
                  <div className="flex items-center gap-2 text-rose-300 font-semibold text-xs sm:text-sm">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>Điểm nghẽn thực tế (The Bottleneck)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeCase.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="rounded-xl p-4 sm:p-5 bg-emerald-500/[0.04] border border-emerald-500/25 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-300 font-semibold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Giải pháp kiến trúc (The Architecture)</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeCase.architectureSolution}
                  </p>
                </div>
              </div>

              {/* Key Architectural Decisions Checklist */}
              <div className="pt-2">
                <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2 font-mono">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <span>Trọng tâm Triển khai Kỹ thuật:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCase.keyArchitectures.map((arch, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-1 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Tech Stack:</span>
                </span>
                {activeCase.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-cyan-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
