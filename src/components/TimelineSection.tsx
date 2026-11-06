import React from 'react'
import { Milestone, GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react'
import { timelineData } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic & Career Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lộ trình Học vấn & Hoạt động Chuyên môn
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Hành trình đào tạo chính quy tại Trường Đại học Thủ Dầu Một (TDMU) từ Kỹ sư Kỹ thuật Phần mềm
            đến Học viên Cao học Hệ thống Thông tin, song hành cùng kỹ thuật thực chiến.
          </p>
        </div>

        {/* Vertical Retro Terminal Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 space-y-8 ml-2 sm:ml-4">
          {timelineData.map((item) => {
            const isEducation = item.type === 'academic'

            return (
              <div key={item.id} className="relative group">
                {/* Glowing Node Dot on Timeline */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    item.isCurrent
                      ? 'bg-emerald-500 border-emerald-300 shadow-lg shadow-emerald-500/50 glow-emerald'
                      : 'bg-[#080c16] border-white/30 group-hover:border-emerald-400'
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap
                      className={`w-3 h-3 ${item.isCurrent ? 'text-slate-950 font-bold' : 'text-slate-400'}`}
                    />
                  ) : (
                    <Briefcase
                      className={`w-3 h-3 ${item.isCurrent ? 'text-slate-950 font-bold' : 'text-slate-400'}`}
                    />
                  )}
                </div>

                {/* Timeline Card */}
                <SpotlightCard
                  spotlightColor="rgba(245, 158, 11, 0.12)"
                  borderColor="rgba(245, 158, 11, 0.35)"
                  className="p-0 bg-[#080c16]/90 border-amber-500/25 overflow-hidden shadow-xl"
                >
                  {/* Retro Window Header */}
                  <div className="retro-window-header">
                    <div className="flex items-center gap-2 text-amber-300">
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                      <span>[SYS.LOG // {item.period}]</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-[10px]">
                      {item.highlightBadge && (
                        <span className="text-emerald-400 font-bold">★ {item.highlightBadge}</span>
                      )}
                      <span>[ _ ] [ □ ] [ ✕ ]</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Top Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        {item.isCurrent && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Hiện tại</span>
                          </span>
                        )}
                      </div>

                      <div className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Title & Organization */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-medium text-emerald-300 mt-0.5">
                        {item.organization}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>

                    {/* Bullet Points with metric highlights */}
                    <div className="space-y-1.5 border-t border-white/5 pt-3">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
