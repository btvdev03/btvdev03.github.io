import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Cpu,
  BarChart3,
  Sparkles,
  ShieldCheck,
  Server,
  Zap,
} from 'lucide-react'
import { digitalTransformationCases } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'

export const DigitalTransformationSection: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(digitalTransformationCases[0].id)

  const activeCase =
    digitalTransformationCases.find((c) => c.id === activeCaseId) || digitalTransformationCases[0]

  return (
    <section id="transformation" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Digital Transformation & Practical Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Giải pháp Chuyển đổi số & Kỹ thuật Thực tiễn
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Các kiến trúc phần mềm và số hóa quy trình được thiết kế nhằm giải quyết trực diện điểm nghẽn
            vận hành thực tế của doanh nghiệp: xóa bỏ silo dữ liệu, tự động hóa luồng phê duyệt và giám sát thời gian thực.
          </p>
        </div>

        {/* Case Studies Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {digitalTransformationCases.map((caseItem) => {
            const isSelected = caseItem.id === activeCaseId
            return (
              <button
                key={caseItem.id}
                onClick={() => setActiveCaseId(caseItem.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500/15 border-teal-500/50 shadow-lg shadow-teal-950/30'
                    : 'bg-[#0e111a]/60 border-white/5 hover:border-white/15 hover:bg-white/[0.03]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-teal-400 text-slate-950 font-bold'
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
                  className={`text-sm font-bold line-clamp-1 ${
                    isSelected ? 'text-teal-200' : 'text-slate-200'
                  }`}
                >
                  {caseItem.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">{caseItem.domain}</p>
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
            spotlightColor="rgba(20, 184, 166, 0.15)"
            borderColor="rgba(20, 184, 166, 0.4)"
            className="p-6 sm:p-8"
          >
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {activeCase.domain}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-400">{activeCase.scope}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {activeCase.title}
                </h3>
              </div>

              {/* Quantifiable Results Banner */}
              <div className="grid grid-cols-3 gap-3 bg-black/40 p-3 rounded-xl border border-white/10 shrink-0">
                {activeCase.metrics.map((m, idx) => (
                  <div key={idx} className="text-center px-2">
                    <div className="text-xl sm:text-2xl font-extrabold text-teal-300 font-mono">
                      {m.metric}
                    </div>
                    <div className="text-[10px] sm:text-xs text-slate-400 leading-tight mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture deep dive: Problem -> Solution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
              {/* The Challenge */}
              <div className="rounded-xl p-5 bg-rose-500/[0.04] border border-rose-500/20 space-y-3">
                <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm">
                  <AlertCircle className="w-4 h-4 text-rose-400" />
                  <span>Vấn đề & Điểm nghẽn Thực tế (The Challenge)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCase.challenge}
                </p>
                <div className="text-[11px] text-rose-300/80 font-mono pt-1">
                  ⚠ Hậu quả: Tiêu tốn nhân lực, độ trễ ra quyết định và rủi ro sai sót số liệu.
                </div>
              </div>

              {/* The Architectural Solution */}
              <div className="rounded-xl p-5 bg-teal-500/[0.04] border border-teal-500/20 space-y-3">
                <div className="flex items-center gap-2 text-teal-300 font-semibold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>Giải pháp Kiến trúc Kỹ thuật (The Solution)</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeCase.architectureSolution}
                </p>
                <div className="text-[11px] text-teal-300/80 font-mono pt-1">
                  ✓ Mục tiêu: Tự động hóa triệt để, đảm bảo tính bất biến (Audit Trail) và độ tin cậy.
                </div>
              </div>
            </div>

            {/* Key Architectural Decisions Checklist */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                <Server className="w-4 h-4 text-teal-400" />
                <span>Trọng tâm Kiến trúc & Triển khai Hệ thống:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeCase.keyArchitectures.map((arch, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-teal-400" />
                <span>Tech Stack:</span>
              </span>
              {activeCase.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  )
}
