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

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setCommandPaletteOpen(true)
    window.addEventListener('open-command-palette', handleOpen)
    return () => window.removeEventListener('open-command-palette', handleOpen)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#08090d] text-slate-100 selection:bg-teal-500/30 selection:text-teal-200">
      {/* Top Floating Glassmorphism Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Hero Section */}
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
        onClick={() => setCommandPaletteOpen(true)}
        className="fixed bottom-5 right-5 z-30 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#0d121c]/90 border border-teal-500/30 text-teal-300 text-xs font-mono backdrop-blur-md shadow-xl hover:border-teal-400 hover:bg-teal-500/10 transition-all active:scale-95 cursor-pointer"
        title="Mở Command Palette (Cmd + K)"
      >
        <Search className="w-3.5 h-3.5 text-teal-400" />
        <span className="hidden sm:inline">Lệnh nhanh</span>
        <kbd className="px-1.5 py-0.5 rounded bg-black/60 border border-white/10 text-[10px]">
          ⌘K
        </kbd>
      </button>
    </div>
  )
}
