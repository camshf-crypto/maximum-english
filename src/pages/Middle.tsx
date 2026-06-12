import { Link } from 'react-router-dom'
import { PageHead, SectionHead, CurriculumList } from '../components/UI'
import { middleCurriculum } from '../data/content'

export default function Middle() {
  return (
    <>
      <PageHead eyebrow="Middle School Program" title="중등부"
        subtitle="심화 사고력 · 내신 · 특목 · 아카데믹 완성기" crumb="중등영어" />

      {/* 슬로건 밴드 */}
      <section className="py-20 max-md:py-14 bg-white">
        <div className="max-w-container mx-auto px-6 text-center">
          <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-deep block mb-5">Academic · Internal · Admission</span>
          <h2 className="text-[34px] max-md:text-2xl font-extrabold text-green-800 leading-snug max-w-[820px] mx-auto">
            내신과 수행평가, 특목·자사고 입시까지<br className="max-md:hidden" />
            <em className="not-italic text-green-600">한 흐름</em>으로 완성하는 중등 영어
          </h2>
          <p className="text-ink-muted font-light mt-6 max-w-[680px] mx-auto leading-relaxed">
            영어원서 심화 독서와 Debate·TED 스피치, 고등 수능형 독해까지. 평소 수업이 곧 입시 경쟁력이 되도록 설계합니다.
          </p>
        </div>
      </section>

      {/* 11개 커리큘럼 */}
      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Curriculum" title="중등 프로그램 11대 시스템"
            desc="내신·수행평가 전문 대비부터 특목·자사고 원서 심화, 영어 스피치·토론까지 아우르는 중등 커리큘럼." />
          <CurriculumList items={middleCurriculum} />
        </div>
      </section>

      {/* 고입 연계 + 러닝팩 */}
      <section className="py-20 max-md:py-14 bg-cream-2">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[20px] text-cream px-9 py-10 max-md:px-7" style={{ background: 'linear-gradient(160deg,#143A34,#0B2521)' }}>
              <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-light">Learning Pack 3~4</span>
              <h3 className="text-[24px] font-bold mt-3 mb-3">러닝팩 3~4단계로 설계</h3>
              <p className="text-cream/72 font-light leading-relaxed mb-6">Mastery(실력 완성)에서 Visionary(특목고 심화)까지. 문해력·사고력·표현력을 완성하고 Academic English로 도약합니다.</p>
              <Link to="/about" className="text-gold-light font-semibold text-[14px] hover:gap-2 inline-flex items-center gap-1.5 transition-all">러닝팩 4단계 보기 →</Link>
            </div>
            <div className="rounded-[20px] bg-cream border border-line px-9 py-10 max-md:px-7">
              <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-deep">Admission</span>
              <h3 className="text-[24px] font-bold text-green-800 mt-3 mb-3">고입입시반 연계</h3>
              <p className="text-ink-muted font-light leading-relaxed mb-6">외고·국제고·자사고·과학고를 준비하는 학생을 위한 영어 면접·자소서·학생부 전문 트랙으로 이어집니다.</p>
              <Link to="/exam" className="text-gold-deep font-semibold text-[14px] hover:gap-2 inline-flex items-center gap-1.5 transition-all">고입입시반 자세히 →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
