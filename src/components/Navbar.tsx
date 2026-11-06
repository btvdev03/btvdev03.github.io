import React, { useState, useEffect } from 'react'
import {
  Search,
  Menu,
  X,
  Mail,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Tv,
  ExternalLink,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { navigationItems, personalInfo } from '../data/portfolioData'
import { triggerConfetti } from '../lib/confetti'
import { retroAudio } from '../lib/retroAudio'

interface NavbarProps {
  onOpenCommandPalette: () => void
  crtEnabled: boolean
  onToggleCrt: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  crtEnabled,
  onToggleCrt,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [soundOn, setSoundOn] = useState(retroAudio.isEnabled())
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Real-time retro terminal clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('vi-VN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = () => {
    retroAudio.play('success')
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => setCopied(false), 2000)
  }

  const handleToggleSound = () => {
    const next = retroAudio.toggle()
    setSoundOn(next)
  }

  const scrollTo = (href: string) => {
    retroAudio.play('click')
    setMobileMenuOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-2 sm:top-3 inset-x-0 z-40 mx-auto max-w-6xl px-3 sm:px-4 transition-all duration-300 ${
          isScrolled ? 'top-1 sm:top-2' : 'top-2 sm:top-4'
        }`}
      >
        <nav
          className={`flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'bg-[#080c16]/90 border-cyan-500/25 backdrop-blur-xl shadow-xl shadow-black/60 glow-cyan'
              : 'bg-[#0d1322]/75 border-white/10 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo & Status */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              scrollTo('#about')
            }}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
          >
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-amber-500/20 border border-emerald-500/30 group-hover:border-emerald-400 transition-colors">
              <span className="font-mono font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
                VB
              </span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors leading-tight">
                  Võ Tấn Bản
                </span>
                <span className="hidden md:inline-block text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                  SYS.OK
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 leading-tight truncate max-w-[150px] sm:max-w-none">
                M.Sc @ TDMU
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-0.5 bg-black/40 px-2 py-1 rounded-xl border border-white/10">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.href)}
                className="px-2.5 py-1 text-xs font-mono text-slate-300 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-lg transition-all cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Retro Action Hub */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Live Terminal Clock */}
            {currentTime && (
              <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 font-mono text-[11px] text-amber-300/90">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span>{currentTime} ICT</span>
              </div>
            )}

            {/* CRT Scanline Toggle */}
            <button
              onClick={() => {
                retroAudio.play('toggle')
                onToggleCrt()
              }}
              className={`p-2 rounded-lg sm:rounded-xl border transition-all cursor-pointer ${
                crtEnabled
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm shadow-amber-500/20'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-slate-200 hover:bg-white/10'
              }`}
              title={crtEnabled ? 'Tắt hiệu ứng CRT Scanline' : 'Bật hiệu ứng CRT Scanline'}
              aria-label="Toggle CRT Scanline"
            >
              <Tv className="w-3.5 h-3.5" />
            </button>

            {/* Retro SFX Audio Toggle */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-lg sm:rounded-xl border transition-all cursor-pointer ${
                soundOn
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20'
                  : 'bg-white/5 text-slate-400 border-white/10 hover:text-slate-200 hover:bg-white/10'
              }`}
              title={soundOn ? 'Tắt âm thanh retro' : 'Bật âm thanh retro SFX'}
              aria-label="Toggle Retro SFX Audio"
            >
              {soundOn ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                retroAudio.play('click')
                onOpenCommandPalette()
              }}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-xl text-xs text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
              title="Mở Command Palette (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline text-slate-400 font-mono text-[11px]">Lệnh</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[9px] font-mono text-cyan-300 bg-black/60 rounded border border-cyan-500/20">
                ⌘K
              </kbd>
            </button>

            {/* Quick Email Copy on Desktop */}
            <button
              onClick={handleCopyEmail}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg sm:rounded-xl text-xs font-mono transition-all cursor-pointer ${
                copied
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              }`}
              title="Sao chép Email"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Đã chép!</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Email</span>
                </>
              )}
            </button>

            {/* GitHub Link */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => retroAudio.play('click')}
              className="p-2 rounded-lg sm:rounded-xl text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              title="GitHub: @btvdev03"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Mobile menu toggle (touch-friendly >= 44px) */}
            <button
              onClick={() => {
                retroAudio.play('click')
                setMobileMenuOpen(!mobileMenuOpen)}
              }
              className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-slate-200 hover:text-emerald-300 bg-white/5 border border-white/10 cursor-pointer active:scale-95"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu (Touch-Friendly >= 44px targets, retro window frame) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-y-auto">
          {/* Backdrop blur */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative min-h-screen px-4 pt-20 pb-8 flex flex-col justify-between">
            <div className="bg-[#080c16] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/50">
              {/* Retro Window Header */}
              <div className="retro-window-header">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>[SYS.NAV // MOBILE_DRAWER]</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1 text-slate-400 hover:text-white text-xs font-mono"
                  >
                    [ ✕ ]
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <div className="p-3 space-y-1">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.href)}
                    className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 text-sm font-mono text-slate-200 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-xl transition-all cursor-pointer text-left active:bg-emerald-500/20"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-400 text-xs">&gt;</span>
                      <span>{item.label}</span>
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">{item.href}</span>
                  </button>
                ))}
              </div>

              {/* Quick Actions & Toggles */}
              <div className="p-3 bg-black/40 border-t border-white/10 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      retroAudio.play('toggle')
                      onToggleCrt()
                    }}
                    className={`min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                      crtEnabled
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    <Tv className="w-4 h-4" />
                    <span>CRT: {crtEnabled ? 'BẬT' : 'TẮT'}</span>
                  </button>

                  <button
                    onClick={handleToggleSound}
                    className={`min-h-[44px] flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                      soundOn
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                        : 'bg-white/5 text-slate-400 border-white/10'
                    }`}
                  >
                    {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    <span>SFX: {soundOn ? 'BẬT' : 'TẮT'}</span>
                  </button>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium active:scale-98 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Đã sao chép Email!' : `Sao chép: ${personalInfo.email}`}</span>
                </button>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-mono font-medium"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub @{personalInfo.githubUsername}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
