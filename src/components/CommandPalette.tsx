import React, { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ArrowRight,
  Copy,
  Check,
  Mail,
  FileCode,
  GraduationCap,
  Layers,
  Terminal,
  Clock,
  Sparkles,
  ExternalLink,
  X,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import { personalInfo } from '../data/portfolioData'
import { triggerConfetti } from '../lib/confetti'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

interface CommandItem {
  id: string
  title: string
  subtitle: string
  category: 'Navigation' | 'Actions' | 'Projects' | 'Research'
  icon: React.ReactNode
  action: () => void
  keywords?: string[]
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    triggerConfetti()
    setTimeout(() => {
      setCopied(false)
      onClose()
    }, 1200)
  }

  const navigateTo = (anchor: string) => {
    onClose()
    const element = document.querySelector(anchor)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: 'action-email',
        title: copied ? 'Đã sao chép Email!' : 'Sao chép Email liên hệ',
        subtitle: personalInfo.email,
        category: 'Actions',
        icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-teal-400" />,
        action: handleCopyEmail,
        keywords: ['email', 'contact', 'mail', 'btv.dev03@gmail.com', 'lien he'],
      },
      {
        id: 'action-github',
        title: 'Mở GitHub cá nhân',
        subtitle: 'github.com/btvdev03',
        category: 'Actions',
        icon: <GithubIcon className="w-4 h-4 text-indigo-400" />,
        action: () => {
          window.open(personalInfo.github, '_blank', 'noopener,noreferrer')
          onClose()
        },
        keywords: ['github', 'profile', 'repo', 'code'],
      },
      {
        id: 'nav-about',
        title: 'Giới thiệu & Triết lý',
        subtitle: 'Võ Tấn Bản - Kỹ sư Phần mềm & Cao học HTTT (TDMU)',
        category: 'Navigation',
        icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
        action: () => navigateTo('#about'),
        keywords: ['about', 'bio', 'gioi thieu', 'tdmu', 'thu dau mot'],
      },
      {
        id: 'nav-transformation',
        title: 'Chuyển đổi số & Giải pháp Thực tiễn',
        subtitle: 'Case studies số hóa quy trình, ERP, IoT & Data pipeline',
        category: 'Navigation',
        icon: <Layers className="w-4 h-4 text-teal-400" />,
        action: () => navigateTo('#transformation'),
        keywords: ['chuyen doi so', 'digital transformation', 'erp', 'workflow', 'case study'],
      },
      {
        id: 'nav-research',
        title: 'Nghiên cứu Khoa học & Papers',
        subtitle: 'Semantic search, Knowledge discovery & BibTeX citations',
        category: 'Navigation',
        icon: <GraduationCap className="w-4 h-4 text-purple-400" />,
        action: () => navigateTo('#research'),
        keywords: ['research', 'nghien cuu', 'paper', 'bai bao', 'bibtex', 'arxiv'],
      },
      {
        id: 'nav-projects',
        title: 'Dự án Kỹ thuật & Open-Source',
        subtitle: 'git-roast, InstantTranslate, IdeaClaimer, zen-desk-clock',
        category: 'Navigation',
        icon: <Terminal className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo('#projects'),
        keywords: ['projects', 'du an', 'git roast', 'instant translate', 'open source'],
      },
      {
        id: 'proj-git-roast',
        title: 'Dự án: git-roast (CLI)',
        subtitle: 'Phân tích thói quen code qua Git commit & bóc phốt dev phong cách Spotify Wrapped',
        category: 'Projects',
        icon: <Terminal className="w-4 h-4 text-amber-400" />,
        action: () => {
          navigateTo('#projects')
          setTimeout(() => {
            const el = document.getElementById('project-git-roast')
            el?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        },
        keywords: ['git-roast', 'cli', 'spotify wrapped', 'commit'],
      },
      {
        id: 'proj-instant-translate',
        title: 'Dự án: InstantTranslate (Chrome Extension)',
        subtitle: 'Dịch thuật ngữ đa ngữ cảnh tức thì chuẩn Manifest V3',
        category: 'Projects',
        icon: <FileCode className="w-4 h-4 text-sky-400" />,
        action: () => {
          navigateTo('#projects')
          setTimeout(() => {
            const el = document.getElementById('project-InstantTranslate')
            el?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        },
        keywords: ['instanttranslate', 'chrome extension', 'mv3', 'translate'],
      },
      {
        id: 'proj-idea-claimer',
        title: 'Dự án: IdeaClaimer (Automation & AI)',
        subtitle: 'Hệ sinh thái thu thập ý tưởng nghiên cứu arXiv & Hacker News',
        category: 'Projects',
        icon: <Sparkles className="w-4 h-4 text-teal-400" />,
        action: () => {
          navigateTo('#projects')
          setTimeout(() => {
            const el = document.getElementById('project-IdeaClaimer')
            el?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        },
        keywords: ['ideaclaimer', 'arxiv', 'hacker news', 'research pipeline'],
      },
      {
        id: 'proj-zen-desk-clock',
        title: 'Dự án: zen-desk-clock (Web App)',
        subtitle: 'Đồng hồ để bàn phong cách Zen & Pomodoro Deep Work',
        category: 'Projects',
        icon: <Clock className="w-4 h-4 text-indigo-400" />,
        action: () => {
          navigateTo('#projects')
          setTimeout(() => {
            const el = document.getElementById('project-zen-desk-clock')
            el?.scrollIntoView({ behavior: 'smooth' })
          }, 300)
        },
        keywords: ['zen-desk-clock', 'pomodoro', 'clock', 'deep work'],
      },
      {
        id: 'nav-skills',
        title: 'Ma trận Năng lực & Công nghệ',
        subtitle: 'Kiến trúc HTTT, Software Engineering, AI & DevOps',
        category: 'Navigation',
        icon: <FileCode className="w-4 h-4 text-blue-400" />,
        action: () => navigateTo('#skills'),
        keywords: ['skills', 'ky nang', 'react', 'typescript', 'docker', 'python'],
      },
      {
        id: 'nav-timeline',
        title: 'Lộ trình Học vấn & Sự nghiệp',
        subtitle: 'Đại học Thủ Dầu Một (TDMU) B.Eng & M.Sc Candidate',
        category: 'Navigation',
        icon: <Clock className="w-4 h-4 text-amber-400" />,
        action: () => navigateTo('#timeline'),
        keywords: ['timeline', 'hoc van', 'kinh nghiem', 'education', 'experience'],
      },
    ],
    [copied],
  )

  const filteredCommands = useMemo(() => {
    if (!query.trim()) return commands
    const q = query.toLowerCase()
    return commands.filter((cmd) => {
      const matchTitle = cmd.title.toLowerCase().includes(q)
      const matchSub = cmd.subtitle.toLowerCase().includes(q)
      const matchKeywords = cmd.keywords?.some((k) => k.toLowerCase().includes(q))
      return matchTitle || matchSub || matchKeywords
    })
  }, [query, commands])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        if (isOpen) {
          onClose()
        } else {
          // Open
          const evt = new CustomEvent('open-command-palette')
          window.dispatchEvent(evt)
        }
      }

      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredCommands.length))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % Math.max(1, filteredCommands.length))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, filteredCommands, selectedIndex])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:pt-28">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0e121b] shadow-2xl shadow-teal-950/40"
          >
            {/* Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search className="w-5 h-5 text-teal-400/80 shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Tìm kiếm mục, dự án, bài báo hoặc gõ lệnh... (Nhấn Esc để đóng)"
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="rounded p-1 text-slate-400 hover:text-slate-200 hover:bg-white/5"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <div className="flex items-center gap-1 shrink-0 text-xs text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 font-mono">
                <span>ESC</span>
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-96 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-sm text-slate-400">
                  <p>Không tìm thấy kết quả phù hợp cho "{query}"</p>
                  <p className="text-xs text-slate-500 mt-1">Thử tìm "email", "tdmu", "git-roast", "paper"...</p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 ${
                        isSelected
                          ? 'bg-teal-500/15 text-white border border-teal-500/30'
                          : 'text-slate-300 hover:bg-white/[0.04] border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`p-2 rounded-lg shrink-0 ${
                            isSelected ? 'bg-teal-500/20 text-teal-300' : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          {cmd.icon}
                        </div>
                        <div className="min-w-0 truncate">
                          <div className="text-sm font-medium truncate flex items-center gap-2">
                            <span>{cmd.title}</span>
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                              {cmd.category}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 truncate">{cmd.subtitle}</div>
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isSelected ? 'text-teal-400 translate-x-0.5' : 'text-slate-500 opacity-40'
                        }`}
                      />
                    </button>
                  )
                })
              )}
            </div>

            {/* Keyboard Footer */}
            <div className="border-t border-white/10 px-4 py-2.5 bg-black/30 flex items-center justify-between text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↓</kbd>
                  <span className="text-slate-400 ml-1">Điều hướng</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↵</kbd>
                  <span className="text-slate-400 ml-1">Chọn</span>
                </span>
              </div>
              <div className="text-[11px] text-teal-400/80">
                Võ Tấn Bản • Portfolio
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
