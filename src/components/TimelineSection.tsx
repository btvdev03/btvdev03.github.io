import React from 'react'
import { Milestone, GraduationCap, Briefcase, MapPin, Calendar, Sparkles } from 'lucide-react'
import { timelineData } from '../data/portfolioData'
import { SpotlightCard } from './SpotlightCard'

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Academic & Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Lộ trình Học vấn & Hoạt động Chuyên môn
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-2xl">
            Hành trình đào tạo chính quy tại Trường Đại học Thủ Dầu Một (TDMU) từ Kỹ sư Kỹ thuật Phần mềm
            đến Học viên Cao học Hệ thống Thông tin, song hành cùng các hoạt động kỹ thuật thực chiến.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-8 ml-2 sm:ml-4">
          {timelineData.map((item, idx) => {
            const isEducation = item.type === 'academic'

            return (
              <div key={item.id} className="relative group">
                {/* Glowing Node Dot on Timeline */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    item.isCurrent
                      ? 'bg-teal-500 border-teal-300 shadow-lg shadow-teal-500/50'
                      : 'bg-[#0e121b] border-white/30 group-hover:border-teal-400'
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
                  spotlightColor="rgba(99, 102, 241, 0.12)"
                  borderColor="rgba(99, 102, 241, 0.35)"
                  className="p-5 sm:p-6"
                >
                  {/* Top Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5">
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
                      <MapPin className="w-3.5 h-3.5 text-teal-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-teal-300 mt-0.5">
                    {item.organization}
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Bullet Points */}
                  <div className="mt-3.5 space-y-1.5 border-t border-white/5 pt-3">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
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
