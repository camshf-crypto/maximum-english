import { Link } from 'react-router-dom'
import { PageHead, SectionHead, CurriculumList } from '../components/UI'
import { elementaryCurriculum } from '../data/content'

export default function Elementary() {
  return (
    <>
      <PageHead eyebrow="Elementary Program" title="초등부"
        subtitle="영어 기초 완성과 사고력 기반 다지기" crumb="홈 / 초등영어" />

      {/* 슬로건 밴드 */}
      <section className="py-20 max-md:py-14 bg-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-deep block mb-5">Reading · Thinking · Expressing</span>
          <h2 className="text-[34px] max-md:text-2xl font-extrabold text-green-800 leading-snug max-w-[820px] mx-auto">
            영어원서로 <em className="not-italic text-green-600">읽고</em>, 질문으로 <em className="not-italic text-green-600">생각하고</em>,<br className="max-md:hidden" />
            발표로 <em className="not-italic text-green-600">표현하는</em> 아이로
          </h2>
          <p className="text-ink-muted font-light mt-6 max-w-[640px] mx-auto leading-relaxed">
            100% 영어 몰입 환경에서 원서 다독과 IB 사고력 수업으로 영어의 기초와 사고력을 동시에 키웁니다.
          </p>
        </div>
      </section>

      {/* 7개 커리큘럼 */}
      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Curriculum" title="초등 프로그램 7대 시스템"
            desc="원서 기반 다독부터 수행평가형 Writing까지, 단계적으로 설계된 초등 커리큘럼." />
          <CurriculumList items={elementaryCurriculum} />
        </div>
      </section>

      {/* 러닝팩 연계 CTA */}
      <section className="py-20 max-md:py-14 bg-cream-2">
        <div className="max-w-container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[22px] text-cream px-14 py-12 max-md:px-7 max-md:py-9 text-center"
            style={{ background: 'radial-gradient(100% 120% at 100% 0%, rgba(201,168,106,.2), transparent 50%), linear-gradient(135deg,#143A34,#0B2521)' }}>
            <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-light">Maximum Learning Pack</span>
            <h2 className="text-[30px] max-md:text-2xl font-extrabold mt-3.5 mb-4">초등은 러닝팩 1~2단계로 설계됩니다</h2>
            <p className="text-cream/78 font-light mb-7 max-w-[560px] mx-auto">
              Foundation(기반 다지기)에서 Insight(생각이 열리는 시기)까지. 아이의 읽기 수준과 사고 발달에 맞춰 자연스럽게 성장합니다.
            </p>
            <Link to="/about" className="inline-block bg-gradient-to-br from-gold-light to-gold-deep text-green-900 font-bold rounded-full text-[14.5px] hover:-translate-y-0.5 transition-transform" style={{ padding: '15px 30px' }}>맥시멈 러닝팩 4단계 보기 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
