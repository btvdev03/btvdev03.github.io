import React from 'react'
import { ArrowUp, Mail, Terminal, Heart } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { personalInfo } from '../data/portfolioData'
import { retroAudio } from '../lib/retroAudio'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    retroAudio.play('click')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-cyan-500/20 bg-[#05070c] py-12 text-slate-400 text-xs relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left: Identity & Terminal Status */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm font-mono">Võ Tấn Bản</span>
              <span className="text-slate-600">•</span>
              <span className="text-emerald-400 font-mono">btvdev03</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                HOSTED ON GH-PAGES
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              Kỹ sư Kỹ thuật Phần mềm (B.Eng) • Học viên Cao học Hệ thống Thông tin (TDMU)
            </p>
          </div>

          {/* Center / Right: Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => retroAudio.play('click')}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              onClick={() => retroAudio.play('click')}
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="min-h-[40px] flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/5 hover:bg-cyan-500/15 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 font-mono transition-colors cursor-pointer"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Tech Specs & Retro Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Võ Tấn Bản (btvdev03). Retro Dark Edition.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span>React 19</span>
            <span>•</span>
            <span>Three.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span className="text-slate-700">|</span>
            <span className="text-emerald-400/90">[SYS: OK]</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
