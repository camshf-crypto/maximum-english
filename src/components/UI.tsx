import { Link } from 'react-router-dom'
import type { ProgramCard, CurriculumItem } from '../data/content'

/** 섹션 상단 제목 블록 */
export function SectionHead({ eyebrow, title, desc, light = false, left = false }: {
  eyebrow: string; title: string; desc?: string; light?: boolean; left?: boolean
}) {
  return (
    <div className={`${left ? '' : 'text-center mx-auto'} max-w-[720px] mb-14`}>
      {!left && (
        <div className="flex items-center justify-center gap-3.5 mb-4">
          <span className="h-px w-[46px] bg-gold" />
          <span className="w-1.5 h-1.5 bg-gold rotate-45" />
          <span className="h-px w-[46px] bg-gold" />
        </div>
      )}
      <span className={`text-xs tracking-[0.32em] uppercase font-bold ${light ? 'text-gold-light' : 'text-gold-deep'} block mb-4`}>{eyebrow}</span>
      <h2 className={`text-[44px] max-md:text-3xl font-extrabold tracking-[-0.02em] leading-[1.12] mb-4 ${light ? 'text-cream' : 'text-ink'}`}>{title}</h2>
      {desc && <p className={`text-[15.5px] font-light ${light ? 'text-cream/70' : 'text-ink-muted'}`}>{desc}</p>}
    </div>
  )
}

/** 페이지 상단 헤더 (서브 페이지) */
export function PageHead({ eyebrow, title, subtitle, crumb }: {
  eyebrow: string; title: string; subtitle: string; crumb: string
}) {
  return (
    <div className="relative overflow-hidden text-cream py-[84px] pb-[70px] text-center"
      style={{ background: 'radial-gradient(110% 130% at 90% -20%, rgba(201,168,106,.16), transparent 55%), linear-gradient(180deg,#0F2E2A,#0B2521)' }}>
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(201,168,106,.08) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-container mx-auto px-6">
        <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-light block mb-4">{eyebrow}</span>
        <h1 className="text-[52px] max-md:text-4xl font-extrabold tracking-[-0.02em]">{title}</h1>
        <p className="text-cream/70 mt-3.5 font-light max-w-[600px] mx-auto">{subtitle}</p>
        <div className="text-[12.5px] text-cream/55 tracking-wide" style={{ marginTop: 22 }}>{crumb}</div>
      </div>
    </div>
  )
}

/** 학년/프로그램 카드 */
export function GradeCard({ card }: { card: ProgramCard }) {
  return (
    <div className="bg-cream border border-line rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft hover:border-gold">
      <div className="relative overflow-hidden text-cream px-7 pt-8 pb-7" style={{ background: 'linear-gradient(160deg,#143A34,#0B2521)' }}>
        <div className="absolute -right-8 -top-8 w-[130px] h-[130px] border border-gold/25 rounded-full" />
        <div className="text-[13px] tracking-[0.2em] text-gold-light font-semibold">{card.badge}</div>
        <h3 className="text-[25px] font-semibold mt-2.5 mb-1">{card.title}</h3>
        <div className="text-[12.5px] text-cream/60 tracking-wide">{card.age}</div>
      </div>
      <div className="px-7 pt-7 pb-8 flex-1 flex flex-col">
        <p className="text-[14px] text-ink-muted font-light leading-relaxed" style={{ marginBottom: 18 }}>{card.desc}</p>
        <ul className="mb-6 space-y-0">
          {card.points.map((p) => (
            <li key={p} className="relative pl-6 py-1.5 text-[13.5px] text-ink">
              <span className="absolute left-0 top-[13px] w-[7px] h-[7px] bg-gold rotate-45" />{p}
            </li>
          ))}
        </ul>
        {card.to && (
          <Link to={card.to} className="mt-auto text-[13.5px] font-semibold text-gold-deep inline-flex items-center gap-1.5 hover:gap-3 hover:text-green-700 transition-all">
            자세히 보기 →
          </Link>
        )}
      </div>
    </div>
  )
}

/** 번호형 커리큘럼 리스트 (초등/중등 상세) */
export function CurriculumList({ items }: { items: CurriculumItem[] }) {
  return (
    <div className="max-w-[860px] mx-auto grid gap-4">
      {items.map((it) => (
        <div key={it.no} className="group bg-cream border border-line rounded-2xl px-7 py-6 max-md:px-5 flex gap-6 max-md:gap-4 items-start transition-all hover:border-gold hover:shadow-soft">
          <div className="flex-none w-14 h-14 max-md:w-11 max-md:h-11 rounded-xl flex items-center justify-center text-gold-light font-extrabold text-[20px] max-md:text-[16px]"
            style={{ background: 'linear-gradient(160deg,#143A34,#0B2521)' }}>
            {it.no}
          </div>
          <div className="flex-1 pt-1">
            <h4 className="text-[18px] max-md:text-[16px] font-bold text-green-800 mb-2.5 leading-snug">{it.title}</h4>
            <ul className="space-y-1.5">
              {it.lines.map((l, i) => (
                <li key={i} className="relative pl-4 text-[14px] max-md:text-[13px] text-ink-muted font-light leading-relaxed">
                  <span className="absolute left-0 top-2.5 w-[5px] h-[5px] bg-gold/70 rotate-45" />{l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

/** 4칸 특징 그리드 (다크) */
export function FeatureGrid({ features }: { features: { mark: string; title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-px border border-gold/25 rounded-2xl overflow-hidden" style={{ background: 'rgba(201,168,106,.25)' }}>
      {features.map((f) => (
        <div key={f.title} className="bg-green-800 px-7 py-9 transition-colors hover:bg-green-700">
          <div className="w-[46px] h-[46px] border border-gold rounded-full flex items-center justify-center text-gold-light text-xl font-semibold mb-5">{f.mark}</div>
          <h4 className="text-[18px] text-cream font-semibold mb-2.5">{f.title}</h4>
          <p className="text-[13.5px] text-cream/65 font-light leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  )
}
