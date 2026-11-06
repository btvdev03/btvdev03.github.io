import React, { useState, useEffect } from 'react'
import {
  Search,
  Menu,
  X,
  Mail,
  Copy,
  Check,
  Terminal,
  Layers,
  GraduationCap,
  FolderGit2,
  Cpu,
  Milestone,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { navigationItems, personalInfo } from '../data/portfolioData'
import { triggerConfetti } from '../lib/confetti'

interface NavbarProps {
  onOpenCommandPalette: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-3 inset-x-0 z-40 mx-auto max-w-6xl px-4 transition-all duration-300 ${
          isScrolled ? 'top-2' : 'top-4'
        }`}
      >
        <nav
          className={`flex items-center justify-between px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#090b10]/85 border-white/15 backdrop-blur-xl shadow-xl shadow-black/40'
              : 'bg-[#0b0e17]/60 border-white/10 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#about')
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500/20 via-cyan-500/10 to-indigo-500/20 border border-teal-500/30 group-hover:border-teal-400 transition-colors">
              <span className="font-mono font-bold text-sm bg-gradient-to-r from-teal-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                VB
              </span>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
              </span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-slate-100 group-hover:text-teal-300 transition-colors leading-tight">
                Võ Tấn Bản
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-tight">
                M.Sc Candidate @ TDMU
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] px-3 py-1 rounded-xl border border-white/5">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Hub */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal-500/40 transition-all cursor-pointer"
              title="Mở Command Palette (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden sm:inline text-slate-400">Tìm kiếm...</span>
              <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-semibold text-slate-400 bg-black/40 rounded border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Quick Email Copy */}
            <button
              onClick={handleCopyEmail}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 border border-teal-500/30'
              }`}
              title="Sao chép địa chỉ Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Đã chép!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>Email</span>
                </>
              )}
            </button>

            {/* GitHub Profile link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              title="GitHub: @btvdev03"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 inset-x-4 bg-[#0d1018] border border-white/10 rounded-2xl p-4 shadow-2xl space-y-2">
            <div className="text-xs font-mono uppercase text-slate-400 px-2 pb-1 border-b border-white/5">
              Điều hướng
            </div>
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-teal-300 hover:bg-white/5 rounded-xl transition-all"
              >
                <span>{item.label}</span>
              </button>
            ))}

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Đã sao chép Email!' : `Sao chép: ${personalInfo.email}`}</span>
              </button>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Xem GitHub @btvdev03</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
