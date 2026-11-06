import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  Quote,
} from 'lucide-react'
import { researchPapers } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'

export const ResearchSection: React.FC = () => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({
    [researchPapers[0].id]: true, // first paper open by default
  })
  const [copiedBibtexId, setCopiedBibtexId] = useState<string | null>(null)
  const [showBibtexModal, setShowBibtexModal] = useState<string | null>(null)

  const toggleAbstract = (id: string) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex)
    setCopiedBibtexId(id)
    triggerConfetti()
    setTimeout(() => {
      setCopiedBibtexId(null)
    }, 2000)
  }

  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Research & Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Nghiên cứu Khoa học & Hướng Công bố
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Các hướng nghiên cứu trong khuôn khổ chương trình Cao học Hệ thống Thông tin tại Trường Đại học Thủ Dầu Một (TDMU),
            tập trung vào Semantic Information Retrieval, Knowledge Graphs và kiến trúc số hóa tối ưu.
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
                spotlightColor="rgba(168, 85, 247, 0.12)"
                borderColor="rgba(168, 85, 247, 0.35)"
                className="p-6 sm:p-8"
              >
                {/* Status & Venue header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {paper.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Năm: {paper.year}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                    <span>{paper.venue}</span>
                  </div>
                </div>

                {/* Paper Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-4 leading-snug">
                  {paper.title}
                </h3>

                {/* Authors */}
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-xs text-slate-400">Tác giả:</span>
                  {paper.authors.map((author, aIdx) => {
                    const isTargetAuthor = author.includes('Võ Tấn Bản') || author.includes('Vo, Tan Ban')
                    return (
                      <span
                        key={aIdx}
                        className={`text-xs px-2 py-0.5 rounded ${
                          isTargetAuthor
                            ? 'bg-teal-500/20 text-teal-300 font-semibold border border-teal-500/40'
                            : 'bg-white/5 text-slate-300 border border-white/5'
                        }`}
                      >
                        {author}
                      </span>
                    )
                  })}
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {paper.keywords.map((kw, kwIdx) => (
                    <span
                      key={kwIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>

                {/* Collapsible Abstract with Framer Motion spring transition */}
                <div className="mt-5 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden">
                  <button
                    onClick={() => toggleAbstract(paper.id)}
                    className="w-full flex items-center justify-between p-3.5 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.03] transition-colors"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      <FileText className="w-4 h-4 text-purple-400" />
                      <span>Tóm tắt nghiên cứu (Abstract)</span>
                    </span>
                    {isAbstractExpanded ? (
                      <ChevronUp className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  <AnimatePresence>
                    {isAbstractExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-4 pb-4 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                          {paper.abstract}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons: BibTeX, PDF, Code */}
                <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {/* Copy BibTeX Button */}
                    <button
                      onClick={() => handleCopyBibtex(paper.id, paper.bibtex)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono transition-all ${
                        isBibtexCopied
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30'
                      }`}
                      title="Sao chép BibTeX Citation"
                    >
                      {isBibtexCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Đã chép BibTeX!</span>
                        </>
                      ) : (
                        <>
                          <Quote className="w-3.5 h-3.5 text-purple-400" />
                          <span>Copy BibTeX</span>
                        </>
                      )}
                    </button>

                    {/* View BibTeX Modal/Inline toggle */}
                    <button
                      onClick={() => setShowBibtexModal(showBibtexModal === paper.id ? null : paper.id)}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                    >
                      {showBibtexModal === paper.id ? 'Ẩn BibTeX' : 'Xem mã BibTeX'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {paper.codeUrl && (
                      <a
                        href={paper.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5 text-teal-400" />
                        <span>Mã nguồn / Pipeline</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Collapsible BibTeX Code Preview */}
                <AnimatePresence>
                  {showBibtexModal === paper.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="mt-4 overflow-hidden"
                    >
                      <div className="p-4 rounded-xl bg-black/60 border border-purple-500/20 font-mono text-xs text-purple-200/90 overflow-x-auto relative">
                        <pre className="whitespace-pre-wrap">{paper.bibtex}</pre>
                        <button
                          onClick={() => handleCopyBibtex(paper.id, paper.bibtex)}
                          className="absolute top-3 right-3 p-1.5 rounded bg-white/10 hover:bg-white/20 text-slate-200"
                          title="Copy"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SpotlightCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
