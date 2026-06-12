import { PageHead } from '../components/UI'
import { teachers } from '../data/content'

export default function Teachers() {
  return (
    <>
      <PageHead eyebrow="Our Teachers" title="강사진"
        subtitle="가르치는 사람이 학원의 수준입니다. 검증된 전문 강사가 직접 관리합니다." crumb="홈 / 강사진" />

      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teachers.map((t) => (
              <div key={t.role} className="bg-cream border border-line rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-soft transition-all">
                <div className="aspect-[1/1.05] relative flex items-center justify-center" style={{ background: 'linear-gradient(160deg,#1C4A42,#0B2521)' }}>
                  <span className="text-[56px] font-semibold text-gold-light opacity-85">{t.mono}</span>
                  <div className="absolute inset-3.5 border border-gold/30 rounded-lg" />
                </div>
                <div className="px-6 pt-5.5 pb-6.5" style={{ padding: '22px 24px 26px' }}>
                  <div className="text-[11.5px] tracking-[0.16em] uppercase text-gold-deep font-bold">{t.role}</div>
                  <h4 className="text-[20px] font-semibold mt-2 mb-1.5">{t.name} <span className="text-[13px] text-ink-muted font-normal">{t.sub}</span></h4>
                  <p className="text-[13px] text-ink-muted font-light leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 text-ink-muted text-[13.5px] font-light">* 강사진 정보는 실제 학원 정보로 교체해 주세요.</div>
        </div>
      </section>
    </>
  )
}
