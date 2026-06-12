import { Link } from 'react-router-dom'
import Crest from '../components/Crest'
import { PageHead, SectionHead } from '../components/UI'
import { mlsIntro, packStages } from '../data/content'

export default function About() {
  return (
    <>
      <PageHead eyebrow="Maximum Learning System" title="맥시멈 러닝팩이란"
        subtitle="영어로 생각하고 표현하는 능력을 단계적으로 키우는 맥시멈만의 학습 시스템입니다." crumb="홈 / 맥시멈 러닝팩" />

      {/* MLS 철학 */}
      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
            <div className="aspect-[4/5] rounded-[20px] flex items-center justify-center relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#1C4A42,#0B2521)' }}>
              <div className="absolute inset-5 border border-gold/30 rounded-xl" />
              <Crest className="w-[180px] drop-shadow-2xl" />
            </div>
            <div>
              <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-deep">{mlsIntro.badge}</span>
              <h2 className="text-[38px] max-md:text-3xl font-extrabold leading-[1.16] mt-3.5 mb-6 text-green-800">{mlsIntro.title}</h2>
              {mlsIntro.paragraphs.map((p, i) => (
                <p key={i} className="text-ink-muted text-[15px] font-light mb-4 leading-[1.9]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 러닝팩 4단계 */}
      <section className="py-24 max-md:py-16" style={{ background: 'linear-gradient(180deg,#0F2E2A,#0B2521)' }}>
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Maximum Learning Pack" title="맥시멈 러닝팩 4단계"
            desc="아이의 읽기 수준과 사고 발달 단계에 따라 자연스럽게 성장하도록 설계된 4단계 프로그램." light />

          <div className="grid gap-5 max-w-[920px] mx-auto">
            {packStages.map((s, i) => (
              <div key={s.en} className="relative bg-white/[0.04] border border-gold/20 rounded-2xl px-9 py-8 max-md:px-6 transition-all hover:border-gold/50">
                <div className="flex items-start gap-6 max-md:gap-4 max-md:flex-col">
                  <div className="flex-none">
                    <div className="text-gold-light font-extrabold text-[15px] tracking-wide mb-1">{s.step}</div>
                    <div className="text-cream text-[28px] max-md:text-[24px] font-extrabold leading-none">{s.en}</div>
                    <div className="mt-3 w-12 h-px bg-gold/40 max-md:hidden" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gold-light/90 text-[14px] font-medium mb-4">{s.ko}</div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
                      {s.lines.map((l, j) => (
                        <li key={j} className="relative pl-4 text-[13.5px] text-cream/75 font-light leading-relaxed">
                          <span className="absolute left-0 top-2 w-[5px] h-[5px] bg-gold/70 rotate-45" />{l}
                        </li>
                      ))}
                    </ul>
                    {s.en_summary && <p className="text-cream/45 text-[12.5px] italic font-light mb-3 leading-relaxed">{s.en_summary}</p>}
                    <p className="text-cream/85 text-[13.5px] font-light pt-3 border-t border-gold/15">{s.closing}</p>
                  </div>
                  <div className="absolute top-6 right-7 text-[60px] font-extrabold text-gold/10 leading-none max-md:hidden">{i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 max-md:py-16 bg-cream-2">
        <div className="max-w-container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[22px] text-cream text-center px-14 py-14 max-md:px-7"
            style={{ background: 'radial-gradient(80% 140% at 0% 0%, rgba(201,168,106,.18), transparent 50%), linear-gradient(135deg,#143A34,#0B2521)' }}>
            <h2 className="text-[40px] max-md:text-3xl font-extrabold mb-3.5">맥시멈의 교육을 직접 경험해보세요</h2>
            <p className="text-cream/78 font-light mb-7">무료 레벨테스트와 학습 상담으로 시작합니다.</p>
            <Link to="/contact" className="inline-block bg-gradient-to-br from-gold-light to-gold-deep text-green-900 font-bold rounded-full text-[14.5px] hover:-translate-y-0.5 transition-transform" style={{ padding: '15px 30px' }}>입학상담 예약하기</Link>
          </div>
        </div>
      </section>
    </>
  )
}