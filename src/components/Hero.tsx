import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu,
  BookOpen,
  Layers,
  Copy,
  Check,
  Terminal,
  MapPin,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'
import { RetroThreeScene } from './RetroThreeScene'
import { retroAudio } from '../lib/retroAudio'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    retroAudio.play('success')
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* 3D Three.js Interactive Retro Cyber Horizon & Polyhedron Canvas */}
      <RetroThreeScene className="opacity-90" showPolyhedron={true} />

      {/* Cyber Grid Pattern & Vignette overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Status Window Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-2 mb-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="truncate max-w-[260px] sm:max-w-none">{personalInfo.statusBadge.label}</span>
          </div>

          {/* Retro Sys Status Pill */}
          <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 text-[11px] font-mono text-slate-400">
            <span className="text-amber-400">[SYS.INIT: OK]</span>
            <span>•</span>
            <span className="text-cyan-400">TDMU.IS_LAB</span>
          </div>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Column: Visual & Scannable Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5 text-center sm:text-left"
          >
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-xs sm:text-sm font-mono mb-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{personalInfo.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-emerald-300">Đại học Thủ Dầu Một (TDMU)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Võ Tấn Bản
              </h1>

              <div className="mt-2 text-base sm:text-xl font-medium font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-300">
                {personalInfo.title}
              </div>
            </div>

            {/* Scannable Short Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.bioShort}
            </p>

            {/* Quick Action Buttons (Touch friendly >= 44px) */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
              <a
                href="#transformation"
                onClick={() => retroAudio.play('click')}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm font-mono transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
              >
                <span>Chuyển đổi số</span>
                <Layers className="w-4 h-4" />
              </a>

              <a
                href="#research"
                onClick={() => retroAudio.play('click')}
                className="min-h-[44px] inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#0d1322]/80 hover:bg-[#131a2e] text-slate-200 font-medium text-xs sm:text-sm font-mono border border-cyan-500/30 hover:border-cyan-400 transition-all active:scale-95 cursor-pointer"
              >
                <span>Nghiên cứu & Papers</span>
                <BookOpen className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={handleCopyEmail}
                className={`min-h-[44px] inline-flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm border transition-all active:scale-95 cursor-pointer ${
                  copied
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 hover:border-slate-500'
                }`}
                title="Sao chép Email"
              >
                {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Mail className="w-4 h-4 text-emerald-400" />}
                <span>{copied ? 'Đã sao chép!' : 'Copy Email'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Retro Phosphor Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.15)"
              borderColor="rgba(6, 182, 212, 0.35)"
              className="p-0 font-mono text-xs border-cyan-500/30 shadow-2xl shadow-cyan-950/40 bg-[#080c16]/90 backdrop-blur-md overflow-hidden"
            >
              {/* Retro Window Header */}
              <div className="retro-window-header">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[10px] text-slate-400">btvdev@workspace:~</span>
                </div>
                <div className="text-[10px] text-cyan-300 flex items-center gap-1">
                  <span>[ _ ]</span>
                  <span>[ □ ]</span>
                  <span>[ ✕ ]</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-4 sm:p-5 space-y-3 leading-relaxed text-slate-300">
                <div>
                  <span className="text-emerald-400">$ </span>
                  <span className="text-slate-100">whoami --summary</span>
                </div>
                <div className="text-slate-300 pl-3 border-l-2 border-emerald-500/40 space-y-1">
                  <p>
                    <span className="text-cyan-400">Engineer:</span> Võ Tấn Bản
                  </p>
                  <p>
                    <span className="text-cyan-400">Degree:</span> B.Eng Software Engineering
                  </p>
                  <p>
                    <span className="text-cyan-400">Graduate:</span> M.Sc Candidate (Info Systems @ TDMU)
                  </p>
                  <p>
                    <span className="text-cyan-400">Hub:</span> Bình Dương Industrial Core, VN
                  </p>
                </div>

                <div>
                  <span className="text-emerald-400">$ </span>
                  <span className="text-slate-100">cat system.metrics</span>
                </div>
                <div className="text-amber-300/90 pl-3 border-l-2 border-amber-500/40 space-y-0.5 text-[11px]">
                  <p>• Digital Workflow: -75% cycle time</p>
                  <p>• Literature Mining: -40% query latency</p>
                  <p>• Production Status: 100% paperless</p>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-500 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>ONLINE // READY</span>
                  </span>
                  <span className="text-cyan-400">zsh 5.9</span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Quantifiable Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10"
        >
          {personalInfo.metrics.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(16, 185, 129, 0.12)"
              borderColor="rgba(16, 185, 129, 0.25)"
              className="p-3.5 sm:p-5 text-center sm:text-left bg-[#080c16]/75"
            >
              <div className="text-xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-200 to-amber-300">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">{item.label}</div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 truncate">{item.sublabel}</div>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* Core Focus Pillars with direct stats */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6"
        >
          {personalInfo.coreFocusAreas.map((area, idx) => {
            const IconComponent =
              idx === 0 ? Cpu : idx === 1 ? BookOpen : Layers
            const accentColor =
              idx === 0 ? 'text-emerald-400 border-emerald-500/30' : idx === 1 ? 'text-cyan-400 border-cyan-500/30' : 'text-amber-400 border-amber-500/30'

            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(6, 182, 212, 0.12)"
                borderColor="rgba(6, 182, 212, 0.3)"
                className="p-5 sm:p-6 flex flex-col justify-between bg-[#0d1322]/80"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 border ${accentColor} flex items-center justify-center`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {area.metric && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-amber-300 border border-amber-500/30">
                        {area.metric}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </SpotlightCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
