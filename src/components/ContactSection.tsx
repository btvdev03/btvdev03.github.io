import React, { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { personalInfo } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SpotlightCard
          spotlightColor="rgba(20, 184, 166, 0.15)"
          borderColor="rgba(20, 184, 166, 0.4)"
          className="p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-teal-500/10 blur-3xl pointer-events-none rounded-full" />

          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-mono mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Open for Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kết nối & Hợp tác Chuyên môn
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Tôi luôn sẵn sàng trao đổi về các đề tài nghiên cứu khoa học trong Hệ thống Thông tin,
            tư vấn kiến trúc chuyển đổi số thực tế hoặc cùng xây dựng các dự án công nghệ mã nguồn mở giá trị.
          </p>

          {/* Interactive Email Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <div className="flex items-center justify-between gap-3 w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 font-mono text-sm text-slate-200">
              <span className="truncate">{personalInfo.email}</span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                title="Sao chép Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            <a
              href={`mailto:${personalInfo.email}?subject=Trao%20đổi%20hợp%20tác%20với%20Võ%20Tấn%20Bản`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-all shrink-0 active:scale-95 shadow-lg shadow-teal-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Mail</span>
            </a>
          </div>

          {/* Info & Socials */}
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-indigo-400" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-300 transition-colors flex items-center gap-1 font-mono"
              >
                <span>github.com/{personalInfo.githubUsername}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Đại học Thủ Dầu Một (TDMU)</span>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
