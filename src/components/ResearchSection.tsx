import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  FileText,
  Code2,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { researchPapers } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'
import { retroAudio } from '../lib/retroAudio'

export const ResearchSection: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({})
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null)
  const [activeBibtexModal, setActiveBibtexModal] = useState<string | null>(null)

  const toggleAbstract = (id: string) => {
    retroAudio.play('click')
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleCopyBibtex = (id: string, bibtex: string) => {
    retroAudio.play('success')
    navigator.clipboard.writeText(bibtex)
    setCopiedBibtexId(id)
    triggerConfetti()
    setTimeout(() => {
      setCopiedBibtexId(null)
    }, 2000)
  }

  return (
    <section id="research" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Research & Publications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nghiên cứu Khoa học & Hướng Công bố
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Các hướng nghiên cứu Cao học Hệ thống Thông tin tại Đại học Thủ Dầu Một (TDMU),
            tập trung vào Semantic Search, Knowledge Graphs và kiến trúc số hóa tối ưu.
          </p>
        </div>

        {/* Papers List */}
        <div className="space-y-6">
          {researchPapers.map((paper) => {
            const isAbstractExpanded = !!expandedAbstracts[paper.id]
            const isBibtexCopied = copiedBibtexId === paper.id

            return (
              <SpotlightCard
                key={paper.id}
                spotlightColor="rgba(6, 182, 212, 0.15)"
                borderColor="rgba(6, 182, 212, 0.35)"
                className="p-0 bg-[#080c16]/90 border-cyan-500/30 overflow-hidden shadow-2xl"
              >
                {/* Retro Window Header */}
                <div className="retro-window-header">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>[RESEARCH.PAPER // {paper.id.toUpperCase()}]</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                    <span className="text-amber-300 font-mono">{paper.status}</span>
                    <span>• {paper.year}</span>
                    <span>[ _ ] [ □ ] [ ✕ ]</span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 space-y-4">
                  {/* Top Meta: Status, Venue & Metric Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{paper.venue}</span>
                      </span>
                    </div>

                    {paper.metricBadge && (
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                        ⚡ {paper.metricBadge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug">
                    {paper.title}
                  </h3>

                  {/* Scannable Core Takeaway Callout */}
                  {paper.takeaway && (
                    <div className="p-3.5 rounded-xl bg-[#0d1322] border-l-4 border-l-cyan-400 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                      <span className="text-cyan-400 font-bold mr-1.5">✓ Điểm nhấn nghiên cứu:</span>
                      <span>{paper.takeaway}</span>
                    </div>
                  )}

                  {/* Authors */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-400">
                    <span>Tác giả:</span>
                    {paper.authors.map((author, aIdx) => {
                      const isMe = author.includes('Võ Tấn Bản') || author.includes('Vo, Tan Ban')
                      return (
                        <span
                          key={aIdx}
                          className={`px-2 py-0.5 rounded ${
                            isMe
                              ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/40 font-mono'
                              : 'bg-white/5 text-slate-300 border border-white/5'
                          }`}
                        >
                          {author}
                        </span>
                      )
                    })}
                  </div>

                  {/* Keywords Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {paper.keywords.map((kw, kwIdx) => (
                      <span
                        key={kwIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-slate-300 border border-white/5"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible Abstract Box */}
                  <div className="mt-3 rounded-xl bg-black/40 border border-white/10 overflow-hidden">
                    <button
                      onClick={() => toggleAbstract(paper.id)}
                      className="w-full min-h-[44px] flex items-center justify-between p-3 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.04] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <FileText className="w-4 h-4 text-cyan-400" />
                        <span>Xem Abstract tiếng Anh & Chi tiết</span>
                      </span>
                      {isAbstractExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isAbstractExpanded && (
                      <div className="p-4 border-t border-white/10 bg-[#05070c] text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {paper.abstract}
                      </div>
                    )}
                  </div>

                  {/* Action Bar: BibTeX & Code Links */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyBibtex(paper.id, paper.bibtex)}
                        className={`min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          isBibtexCopied
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                        }`}
                        title="Sao chép trích dẫn BibTeX"
                      >
                        {isBibtexCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-amber-400" />
                            <span>Đã chép BibTeX!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Copy BibTeX</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          retroAudio.play('click')
                          setActiveBibtexModal(activeBibtexModal === paper.id ? null : paper.id)
                        }}
                        className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-400 hover:text-white bg-white/5 border border-white/10 cursor-pointer"
                      >
                        <span>{activeBibtexModal === paper.id ? 'Ẩn mã' : 'Xem mã BibTeX'}</span>
                      </button>
                    </div>

                    {paper.codeUrl && (
                      <a
                        href={paper.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => retroAudio.play('click')}
                        className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Mã nguồn thuật toán</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400" />
                      </a>
                    )}
                  </div>

                  {/* Inline BibTeX Viewer */}
                  {activeBibtexModal === paper.id && (
                    <div className="mt-3 p-3.5 rounded-xl bg-black border border-cyan-500/30 font-mono text-xs text-amber-300 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{paper.bibtex}</pre>
                    </div>
                  )}
                </div>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
