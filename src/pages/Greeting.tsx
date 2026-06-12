import { Link } from 'react-router-dom'
import Crest from '../components/Crest'
import { PageHead } from '../components/UI'
import { greeting } from '../data/content'

export default function Greeting() {
  return (
    <>
      <PageHead eyebrow="Director's Message" title="대표 인사말"
        subtitle="아이가 가진 가능성의 최대치를 끌어내는 것 — 그것이 맥시멈의 약속입니다." crumb="홈 / 대표 인사말" />

      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-14 max-md:gap-10 items-center">
            {/* 사진 자리 */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-[20px] flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#1C4A42,#0B2521)' }}>
                <div className="absolute inset-5 border border-gold/30 rounded-xl" />
                <div className="text-center text-cream/40">
                  <Crest className="w-[120px] mx-auto mb-4 opacity-70" />
                  <div className="text-[12px] tracking-wide font-light">원장님 사진</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-gold-light to-gold-deep text-green-900 px-5 py-3 rounded-xl shadow-gold max-md:hidden">
                <div className="text-[11px] font-bold tracking-wide">DIRECTOR</div>
              </div>
            </div>
            {/* 인사말 */}
            <div>
              <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-deep">{greeting.badge}</span>
              <h2 className="text-[34px] max-md:text-2xl font-extrabold leading-[1.3] mt-4 mb-7 text-green-800 whitespace-pre-line">{greeting.lead}</h2>
              {greeting.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-muted text-[15px] font-light mb-4 leading-[1.9]">{p}</p>
              ))}
              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[15px] text-green-700 font-semibold">{greeting.sign}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}