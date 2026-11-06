import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Terminal,
  Cpu,
  BookOpen,
  Layers,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  MapPin,
  Mail,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { personalInfo } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'
import { triggerConfetti } from '../lib/confetti'

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => setCopied(false), 2000)
  }

  const focusIcons = {
    Cpu: Cpu,
    BookOpen: BookOpen,
    Layers: Layers,
  }

  return (
    <section id="about" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background cyber grid & aura */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center sm:justify-start"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono mb-6 backdrop-blur-sm shadow-sm hover:border-teal-400/60 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.statusBadge.label}</span>
          </div>
        </motion.div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Bio & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-center sm:text-left"
          >
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-400 text-sm font-mono mb-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>{personalInfo.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300">Đại học Thủ Dầu Một (TDMU)</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
                Võ Tấn Bản
              </h1>
              <div className="mt-2 text-lg sm:text-xl font-medium bg-gradient-to-r from-teal-300 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
                {personalInfo.title}
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.bioShort}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
              <a
                href="#transformation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                <span>Chuyển đổi số</span>
                <Layers className="w-4 h-4" />
              </a>

              <a
                href="#research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-medium text-sm border border-white/10 hover:border-teal-500/40 transition-all active:scale-95"
              >
                <span>Nghiên cứu & Papers</span>
                <BookOpen className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all active:scale-95 ${
                  copied
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 hover:border-slate-500'
                }`}
                title="Sao chép Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4 text-teal-400" />}
                <span>{copied ? 'Đã sao chép!' : 'Copy Email'}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: High-Craft Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <SpotlightCard
              spotlightColor="rgba(6, 182, 212, 0.15)"
              borderColor="rgba(6, 182, 212, 0.35)"
              className="p-5 font-mono text-xs border-cyan-500/20 shadow-2xl shadow-cyan-950/20"
            >
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-slate-400">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] text-slate-400">btvdev@workspace:~</span>
                </div>
                <span className="text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/30">
                  zsh • active
                </span>
              </div>

              {/* Terminal Body */}
              <div className="space-y-3 leading-relaxed text-slate-300">
                <div>
                  <span className="text-teal-400">$ </span>
                  <span className="text-slate-100">whoami --verbose</span>
                </div>
                <div className="text-slate-400 pl-3 border-l-2 border-teal-500/30 space-y-1">
                  <p>
                    <span className="text-cyan-300">Name:</span> Võ Tấn Bản
                  </p>
                  <p>
                    <span className="text-cyan-300">Degree:</span> B.Eng Software Engineering
                  </p>
                  <p>
                    <span className="text-cyan-300">Current:</span> M.Sc Candidate in Information Systems
                  </p>
                  <p>
                    <span className="text-cyan-300">Affiliation:</span> Đại học Thủ Dầu Một (TDMU)
                  </p>
                  <p>
                    <span className="text-cyan-300">Location:</span> Bình Dương, VN
                  </p>
                </div>

                <div>
                  <span className="text-teal-400">$ </span>
                  <span className="text-slate-100">cat profile.core_focus</span>
                </div>
                <div className="text-emerald-300/90 pl-3 border-l-2 border-emerald-500/30">
                  <p>✓ Practical Digital Transformation</p>
                  <p>✓ Scientific Literature Mining & AI</p>
                  <p>✓ High-craft Open-Source CLI & Tools</p>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500 border-t border-white/5">
                  <span>uptime: 24/7 dedicated</span>
                  <span className="text-teal-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    ready for collab
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Credentials & Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {personalInfo.metrics.map((item, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(20, 184, 166, 0.1)"
              className="p-4 sm:p-5 text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-200">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">{item.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{item.sublabel}</div>
            </SpotlightCard>
          ))}
        </motion.div>

        {/* Core Focus Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
        >
          {personalInfo.coreFocusAreas.map((area, idx) => {
            const IconComponent =
              idx === 0 ? Cpu : idx === 1 ? BookOpen : Layers

            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(99, 102, 241, 0.12)"
                borderColor="rgba(99, 102, 241, 0.3)"
                className="p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-300 mb-4">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{area.title}</h3>
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
