import React from 'react'
import { ArrowUp, Mail, Heart, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { personalInfo } from '../data/portfolioData'

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#07080c] py-12 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5">
          {/* Left: Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Võ Tấn Bản</span>
              <span className="text-slate-600">•</span>
              <span className="text-teal-400 font-mono">btvdev03</span>
            </div>
            <p className="text-slate-500">
              Kỹ sư Kỹ thuật Phần mềm • Học viên Cao học Hệ thống Thông tin (TDMU)
            </p>
          </div>

          {/* Center / Right: Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-colors cursor-pointer"
            >
              <span>Về đầu trang</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Tech Specs & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} Võ Tấn Bản (btvdev03). All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19 • TypeScript • Tailwind • Vite</span>
            <span className="text-slate-700">|</span>
            <span className="text-teal-400/80">Hosted on GitHub Pages</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
