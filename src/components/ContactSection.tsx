import React, { useState } from 'react'
import {
  Mail,
  Copy,
  Check,
  MapPin,
  Send,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { personalInfo } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'
import { retroAudio } from '../lib/retroAudio'

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    retroAudio.play('success')
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SpotlightCard
          spotlightColor="rgba(16, 185, 129, 0.15)"
          borderColor="rgba(16, 185, 129, 0.4)"
          className="p-0 bg-[#080c16]/90 border-emerald-500/30 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Retro Window Header */}
          <div className="retro-window-header text-left">
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>[COMMS // DIRECT_UPLINK]</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400 text-[10px]">
              <span className="text-amber-400">PORT: 443 SECURE</span>
              <span>[ _ ] [ □ ] [ ✕ ]</span>
            </div>
          </div>

          <div className="p-6 sm:p-12 relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-36 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />

            {/* Header */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>Open for Collaboration & Research</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Kết nối & Hợp tác Chuyên môn
            </h2>
            <p className="mt-3 text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
              Sẵn sàng trao đổi về các đề tài nghiên cứu khoa học Hệ thống Thông tin,
              tư vấn kiến trúc chuyển đổi số thực tế hoặc cùng xây dựng các giải pháp kỹ thuật có chiều sâu.
            </p>

            {/* Interactive Email Bar */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <div className="flex items-center justify-between gap-3 w-full px-4 py-3 rounded-xl bg-black/70 border border-cyan-500/30 font-mono text-xs sm:text-sm text-slate-200">
                <span className="truncate">{personalInfo.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
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
                onClick={() => retroAudio.play('click')}
                className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold font-mono text-xs sm:text-sm hover:bg-emerald-400 transition-all shrink-0 active:scale-95 shadow-lg shadow-emerald-500/20 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Gửi Mail</span>
              </a>
            </div>

            {/* Info & Socials */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <GithubIcon className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => retroAudio.play('click')}
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1 font-mono"
                >
                  <span>github.com/{personalInfo.githubUsername}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Đại học Thủ Dầu Một (TDMU)</span>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}
