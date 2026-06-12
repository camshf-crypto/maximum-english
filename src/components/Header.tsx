import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Crest from './Crest'
import { site } from '../data/content'

const nav = [
  { label: '홈', to: '/' },
  {
    label: '학원소개', to: '/about',
    sub: [{ label: '대표 인사말', to: '/greeting' }, { label: '맥시멈 러닝팩이란', to: '/about' }],
  },
  {
    label: '초등영어', to: '/elementary',
    sub: [{ label: '초등 프로그램', to: '/elementary' }],
  },
  {
    label: '중등영어', to: '/middle',
    sub: [{ label: '정규 · 내신', to: '/middle' }, { label: '고입입시반', to: '/exam' }],
  },
  { label: '고입입시', to: '/exam' },
  { label: '수업 클래스', to: '/gallery' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState<string | null>(null)
  const { pathname } = useLocation()

  const toggle = (label: string) => setExpanded((prev) => (prev === label ? null : label))

  return (
    <>
      {/* header (흰 배경) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-line">
        <div className="max-w-container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3.5">
            <Crest className="w-[42px] h-[42px]" />
            <span className="flex flex-col leading-none">
              <span className="font-extrabold text-[22px] tracking-[0.16em] text-green-800">MAXIMUM</span>
              <span className="text-[11px] tracking-[0.42em] text-green-700/60 mt-1">영 어 학 원</span>
            </span>
          </Link>

          {/* desktop nav */}
          <ul className="hidden md:flex gap-6 items-center">
            {nav.map((item) => (
              <li key={item.label} className="relative group">
                <Link
                  to={item.to}
                  className={`block px-3 py-7 text-[16px] font-bold tracking-tight transition-colors ${
                    pathname === item.to ? 'text-gold-deep' : 'text-green-700 hover:text-gold-deep'
                  }`}
                >
                  {item.label}
                </Link>
                {item.sub && (
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-[72px] left-1/2 -translate-x-1/2 bg-white rounded-xl border border-line shadow-soft p-2 min-w-[180px]">
                    {item.sub.map((s) => (
                      <Link key={s.label} to={s.to} className="block px-3.5 py-2.5 text-[14px] font-medium text-green-700 rounded-lg hover:bg-cream-2 hover:text-gold-deep transition-colors whitespace-nowrap">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="hidden md:inline-block bg-gradient-to-br from-gold-light to-gold-deep text-green-900 font-bold text-[14px] px-5.5 py-3 rounded-full shadow-gold hover:-translate-y-0.5 transition-transform" style={{ paddingLeft: 22, paddingRight: 22 }}>
            입학상담 예약
          </Link>

          {/* burger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(true)} aria-label="메뉴 열기">
            <span className="w-6 h-0.5 bg-green-700 rounded" />
            <span className="w-6 h-0.5 bg-green-700 rounded" />
            <span className="w-6 h-0.5 bg-green-700 rounded" />
          </button>
        </div>
      </header>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-[100] md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute inset-0 bg-green-900/40" />
          <div className="absolute top-0 right-0 h-full w-[78%] max-w-[320px] bg-white overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 min-h-full flex flex-col">
              <button className="absolute top-5 right-5 text-2xl text-green-700 z-10" onClick={() => setOpen(false)} aria-label="닫기">&times;</button>
              <h6 className="text-[12px] text-gold-deep tracking-widest mt-4 mb-3 uppercase">메뉴</h6>

              {nav.map((item) => (
                <div key={item.label} className="border-b border-line">
                  {item.sub ? (
                    <>
                      {/* 펼침 버튼 */}
                      <button
                        onClick={() => toggle(item.label)}
                        className="w-full flex items-center justify-between py-3.5 text-green-700 text-[15px] font-bold"
                      >
                        {item.label}
                        <svg className={`w-4 h-4 text-gold-deep transition-transform ${expanded === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* 하위 메뉴 */}
                      {expanded === item.label && (
                        <div className="pb-3 pl-1">
                          {item.sub.map((s) => (
                            <Link key={s.label} to={s.to} onClick={() => setOpen(false)} className="block py-2 text-ink-muted text-[14px] font-medium hover:text-gold-deep transition-colors">
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.to} onClick={() => setOpen(false)} className="block py-3.5 text-green-700 text-[15px] font-bold">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <Link to="/contact" onClick={() => setOpen(false)} className="block py-3.5 text-gold-deep text-[15px] font-bold">입학상담 예약</Link>

              {/* 하단 메뉴 */}
              <div className="mt-5 pt-4 border-t border-line">
                <Link to="/fee" onClick={() => setOpen(false)} className="block py-2 text-ink-muted text-[13px] font-medium">수강료 안내</Link>
                <Link to="/privacy" onClick={() => setOpen(false)} className="block py-2 text-ink-muted text-[13px] font-medium">개인정보처리방침</Link>
                <Link to="/terms" onClick={() => setOpen(false)} className="block py-2 text-ink-muted text-[13px] font-medium">이용약관</Link>
              </div>

              {/* 하단 학원 정보 */}
              <div className="mt-6 pt-6 border-t border-line">
                <a href={`tel:${site.phone}`} className="block text-[18px] font-extrabold text-green-800 mb-1">{site.phone}</a>
                <p className="text-[11.5px] text-ink-muted font-light leading-relaxed mb-3">{site.hours}<br />{site.address}</p>
                <div className="flex gap-2 flex-wrap">
                  <a href="https://www.instagram.com/maximum_english_academy" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border border-line rounded-full text-[11.5px] font-bold text-green-700 hover:bg-cream-2 transition-colors">인스타그램</a>
                  <a href="https://blog.naver.com/kingc2017" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 border border-line rounded-full text-[11.5px] font-bold text-green-700 hover:bg-cream-2 transition-colors">블로그</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}