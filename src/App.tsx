import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DigitalTransformationSection } from './components/DigitalTransformationSection'
import { ResearchSection } from './components/ResearchSection'
import { ProjectsSection } from './components/ProjectsSection'
import { SkillsSection } from './components/SkillsSection'
import { TimelineSection } from './components/TimelineSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { CommandPalette } from './components/CommandPalette'
import { Search } from 'lucide-react'
import { retroAudio } from './lib/retroAudio'

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [crtEnabled, setCrtEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('retro_crt_enabled') === 'true'
    }
    return false
  })

  useEffect(() => {
    const handleOpen = () => setCommandPaletteOpen(true)
    window.addEventListener('open-command-palette', handleOpen)
    return () => window.removeEventListener('open-command-palette', handleOpen)
  }, [])

  const handleToggleCrt = () => {
    setCrtEnabled((prev) => {
      const next = !prev
      if (typeof window !== 'undefined') {
        localStorage.setItem('retro_crt_enabled', String(next))
      }
      return next
    })
  }

  return (
    <div className="relative min-h-screen bg-[#05070c] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* Optional CRT Scanline & Phosphor Vignette Layer */}
      {crtEnabled && (
        <>
          <div className="crt-overlay" aria-hidden="true" />
          <div className="crt-vignette" aria-hidden="true" />
        </>
      )}

      {/* Top Floating Glassmorphism & Retro Navbar */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
      />

      {/* Main Content Layout */}
      <main className="relative z-10 overflow-x-hidden">
        {/* Hero Section with Three.js 3D Interactive Cyber Grid & Polyhedron */}
        <Hero />

        {/* Digital Transformation & Practical Solutions Case Studies */}
        <DigitalTransformationSection />

        {/* Academic Research & Papers */}
        <ResearchSection />

        {/* Engineering & Open-Source Projects */}
        <ProjectsSection />

        {/* Systems & Skills Matrix */}
        <SkillsSection />

        {/* Education & Experience Journey */}
        <TimelineSection />

        {/* Contact & Collab Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal (Cmd + K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />

      {/* Floating Cmd+K Pill on mobile/desktop corner */}
      <button
        onClick={() => {
          retroAudio.play('click')
          setCommandPaletteOpen(true)
        }}
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 min-h-[44px] flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#080c16]/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all active:scale-95 cursor-pointer glow-cyan"
        title="Mở Command Palette (Cmd + K)"
        aria-label="Mở lệnh nhanh Command Palette"
      >
        <Search className="w-3.5 h-3.5 text-cyan-400" />
        <span className="hidden sm:inline">Lệnh nhanh</span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/60 border border-cyan-500/20 text-[10px]">
          ⌘K
        </kbd>
      </button>
    </div>
  )
}
