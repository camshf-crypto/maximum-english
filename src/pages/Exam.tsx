import { Link } from 'react-router-dom'
import { PageHead, SectionHead, GradeCard } from '../components/UI'
import { examCards } from '../data/content'

const steps = [
  { n: '01', t: '진단 · 지망교 설정', d: '현재 역량을 진단하고 목표 학교를 함께 정합니다' },
  { n: '02', t: '면접 · 자소서 훈련', d: '유형별 실전 훈련과 1:1 첨삭을 반복합니다' },
  { n: '03', t: '모의 면접', d: '실제와 같은 환경에서 모의 면접과 피드백을 진행합니다' },
  { n: '04', t: '최종 점검 · 합격', d: '제출 직전까지 디테일을 다듬어 합격을 완성합니다' },
]

export default function Exam() {
  return (
    <>
      <PageHead eyebrow="High School Admission" title="고입입시반"
        subtitle="외고 · 국제고 · 자사고 · 과학고. 영어 면접부터 자소서·학생부까지 한 곳에서 완성합니다." crumb="홈 / 고입입시" />

      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Target Schools" title="지망교별 맞춤 전략"
            desc="학교마다 평가 방식이 다릅니다. 지망교에 맞춰 다르게 준비합니다." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examCards.map((c) => <GradeCard key={c.title} card={c} />)}
          </div>
        </div>
      </section>

      <section className="py-24 max-md:py-16 bg-cream-2">
        <div className="max-w-container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[22px] text-cream px-14 py-14 max-md:px-7 max-md:py-9"
            style={{ background: 'radial-gradient(100% 120% at 100% 0%, rgba(201,168,106,.2), transparent 50%), linear-gradient(135deg,#143A34,#0B2521)' }}>
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center relative z-10">
              <div>
                <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-light">Process</span>
                <h2 className="text-[42px] max-md:text-3xl font-extrabold mt-3.5 mb-4 leading-[1.12]">합격까지의<br /><em className="not-italic text-gold-light">4단계 코칭</em></h2>
                <p className="text-cream/80 text-[15px] font-light mb-6">막연한 준비가 아니라, 진단에서 실전까지 단계별로 함께합니다.</p>
                <Link to="/contact" className="inline-block bg-gradient-to-br from-gold-light to-gold-deep text-green-900 font-bold rounded-full text-[14.5px] hover:-translate-y-0.5 transition-transform" style={{ padding: '15px 30px' }}>입시 상담 예약 →</Link>
              </div>
              <div className="grid gap-3.5">
                {steps.map((p) => (
                  <div key={p.n} className="flex gap-4 items-start bg-white/5 border border-gold/20 rounded-xl" style={{ padding: '18px 20px' }}>
                    <div className="text-[22px] font-extrabold text-gold-light leading-none">{p.n}</div>
                    <div>
                      <h5 className="text-[15px] text-cream font-semibold mb-1">{p.t}</h5>
                      <p className="text-[13px] text-cream/65 font-light">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
