import { Link } from 'react-router-dom'
import Crest from '../components/Crest'
import { SectionHead, GradeCard, FeatureGrid } from '../components/UI'
import { homeGrades, packStages } from '../data/content'

const systemFeatures = [
  { mark: '01', title: '레벨 진단', desc: '입학 테스트로 현재 위치를 정확히 파악하고 가장 알맞은 반에 배치합니다.' },
  { mark: '02', title: '담임 관리', desc: '전담 담임이 학습 태도부터 성적 추이까지 1:1로 밀착 관리합니다.' },
  { mark: '03', title: '주간 피드백', desc: '매주 학습 리포트와 상담으로 학부모와 진행 상황을 공유합니다.' },
  { mark: '04', title: '입시 연계', desc: '초·중등 학습이 고입입시 경쟁력으로 자연스럽게 이어지도록 설계합니다.' },
]

const roadmap = [
  { side: 'left', yr: 'STAGE 01 · 예비초~초3', t: '영어와 친해지기', d: '파닉스와 리딩으로 단단한 기초. 영어를 즐기는 습관을 만듭니다.' },
  { side: 'right', yr: 'STAGE 02 · 초4~초6', t: '4대 영역 균형', d: '읽기·듣기·말하기·쓰기를 통합 학습하며 중등 내신을 미리 준비합니다.' },
  { side: 'left', yr: 'STAGE 03 · 중1~중2', t: '내신과 실력', d: '학교별 맞춤 내신대비와 구문·어휘 빌드업으로 성적과 실력을 동시에.' },
  { side: 'right', yr: 'STAGE 04 · 중3', t: '고입입시 완성', d: '면접·자소서·학생부까지 지망교별 전략으로 합격을 완성합니다.' },
]

const examPoints = [
  { n: '01', t: '영어 면접 시뮬레이션', d: '실전 유형별 질문·답변 훈련과 1:1 피드백' },
  { n: '02', t: '자소서·학생부 첨삭', d: '지망교 맞춤형 콘텐츠 설계와 첨삭 관리' },
  { n: '03', t: '지망교별 합격 전략', d: '학교별 데이터 기반 맞춤 컨설팅' },
]

const notices = [
  { tag: '개강', exam: false, ti: '2026 여름방학 초·중등 집중반 모집 안내', dt: '2026.06.10' },
  { tag: '고입', exam: true, ti: '중3 외고·국제고 영어 면접 특강 일정 공지', dt: '2026.06.05' },
  { tag: '내신', exam: false, ti: '2026년 1학기 기말고사 학교별 내신대비반 운영', dt: '2026.05.28' },
  { tag: '일반', exam: false, ti: '신규 입학 레벨테스트 상시 접수 안내', dt: '2026.05.20' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white border-b border-line">
        <div className="relative max-w-container mx-auto px-6 py-16 max-md:py-12 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="text-center md:text-left">
            <div className="text-[14px] tracking-[0.18em] text-green-700 font-semibold mb-1.5">초 등 · 중 등 · 고 입 입 시</div>
            <h1 className="text-[62px] max-md:text-[40px] font-extrabold leading-[1.06] tracking-[-0.025em] mt-5 mb-5 text-green-800">
              실력의 <em className="not-italic text-green-600">최대치</em>를<br />끌어내는 영어교육
            </h1>
            <p className="text-[17px] text-ink-muted max-w-[480px] mx-auto md:mx-0 leading-[1.85] font-light">
              기초부터 고입입시까지, 개인맞춤 성장 곡선을 설계합니다. 체계적인 4대 영역 학습과 담임 밀착 관리로 실력과 성적을 함께 키웁니다.
            </p>
            <div className="flex gap-3.5 mt-8.5 flex-wrap justify-center md:justify-start" style={{ marginTop: 34 }}>
              <Link to="/curriculum" className="bg-green-800 text-cream font-bold px-7.5 py-3.5 rounded-full text-[14.5px] hover:bg-green-700 hover:-translate-y-0.5 transition-all" style={{ padding: '15px 30px' }}>커리큘럼 보기</Link>
            </div>
            <div className="flex gap-8.5 mt-12 pt-7.5 border-t border-line flex-wrap justify-center md:justify-start" style={{ gap: 34, marginTop: 48, paddingTop: 30 }}>
              {[['4대', '영역 통합 학습'], ['1:1', '담임 밀착 관리'], ['12년', '영어교육']].map(([n, l]) => (
                <div key={l}>
                  <div className="text-[38px] font-extrabold text-green-700 leading-none">{n}</div>
                  <div className="text-[12.5px] text-ink-muted mt-2 tracking-wide">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 학생 사진 4개 */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '초등 수업' },
              { label: '원서 다독' },
              { label: '스피치 발표' },
              { label: '영어 토론' },
            ].map((p, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden relative flex items-center justify-center border border-line"
                style={{ background: 'linear-gradient(160deg,#EFE9DB,#E8E2D2)' }}>
                <div className="text-center text-green-700/40">
                  <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.5-6 3 4 2.5-3 5.5 7M4 6h16v12H4z" /></svg>
                  <div className="text-[12px] font-medium">{p.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 학년별 프로그램 */}
      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Programs by Grade" title="학년이 아니라, 단계를 가르칩니다"
            desc="초등에서 다진 기초가 중등 내신으로, 다시 고입입시 경쟁력으로 이어지도록 설계된 연속형 커리큘럼." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5" style={{ gap: 26 }}>
            {homeGrades.map((c) => <GradeCard key={c.title} card={c} />)}
          </div>
        </div>
      </section>

      {/* 맥시멈 러닝팩 (차별점) */}
      <section className="py-24 max-md:py-16 bg-cream-2">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Maximum Learning System" title="맥시멈 러닝팩, 4단계 성장 설계"
            desc="단순히 영어 점수를 올리는 훈련이 아니라, 영어로 생각하고 표현하는 능력을 기르는 장기 성장 프로그램." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
            {packStages.map((s, i) => (
              <Link key={s.en} to="/about" className="group relative bg-cream border border-line rounded-2xl px-6 py-7 transition-all hover:-translate-y-1.5 hover:shadow-soft hover:border-gold overflow-hidden">
                <div className="absolute -right-3 -top-4 text-[64px] font-extrabold text-gold/10 leading-none">{i + 1}</div>
                <div className="relative">
                  <div className="text-gold-deep font-bold text-[12.5px] tracking-wide mb-1">{s.step}</div>
                  <div className="text-green-800 text-[22px] font-extrabold mb-3 leading-none">{s.en}</div>
                  <div className="w-8 h-px bg-gold/40 mb-3" />
                  <p className="text-[13px] text-ink-muted font-light leading-relaxed">{s.ko}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about" className="inline-flex items-center gap-1.5 text-gold-deep font-semibold text-[14px] hover:gap-3 transition-all">맥시멈 러닝 시스템 자세히 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 시스템 */}
      <section className="py-24 max-md:py-16" style={{ background: 'linear-gradient(180deg,#0F2E2A,#0B2521)' }}>
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="The Maximum System" title="최대치를 만드는 네 개의 축"
            desc="가르치는 것에서 끝나지 않습니다. 측정하고, 관리하고, 끌어올립니다." light />
          <FeatureGrid features={systemFeatures} />
        </div>
      </section>

      {/* 로드맵 */}
      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Learning Roadmap" title="한 학원에서 끝내는 성장 로드맵"
            desc="옮겨 다니지 않아도 됩니다. 초등 기초부터 고입 합격까지 한 흐름으로." />
          <div className="relative max-w-[880px] mx-auto">
            <div className="absolute left-1/2 max-md:left-5 top-0 bottom-0 w-0.5 -translate-x-1/2 max-md:translate-x-0" style={{ background: 'linear-gradient(180deg,transparent,#C9A86A,transparent)' }} />
            {roadmap.map((s, i) => (
              <div key={i} className="grid grid-cols-[1fr_60px_1fr] max-md:grid-cols-[40px_1fr] items-center mb-3.5">
                {s.side === 'left' ? (
                  <>
                    <Card s={s} />
                    <Node />
                    <div className="max-md:hidden" />
                  </>
                ) : (
                  <>
                    <div className="max-md:hidden" />
                    <Node />
                    <Card s={s} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 고입입시 강조 */}
      <section className="py-24 max-md:py-16 bg-cream-2">
        <div className="max-w-container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[22px] text-cream px-14 py-15 max-md:px-7 max-md:py-9"
            style={{ background: 'radial-gradient(100% 120% at 100% 0%, rgba(201,168,106,.2), transparent 50%), linear-gradient(135deg,#143A34,#0B2521)', padding: '60px 56px' }}>
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center relative z-10">
              <div>
                <span className="text-xs tracking-[0.32em] uppercase font-bold text-gold-light">High School Admission</span>
                <h2 className="text-[42px] max-md:text-3xl font-extrabold mt-3.5 mb-4.5 leading-[1.12]" style={{ marginBottom: 18 }}>
                  영어가 강한 학원의<br /><em className="not-italic text-gold-light">고입입시 전략</em>
                </h2>
                <p className="text-cream/80 text-[15px] font-light mb-6.5" style={{ marginBottom: 26 }}>
                  외고·국제고·자사고·과학고 입시는 영어 실력에서 갈립니다. 맥시멈은 평소 수업이 곧 입시 대비가 되도록 설계합니다.
                </p>
                <Link to="/exam" className="inline-block bg-gradient-to-br from-gold-light to-gold-deep text-green-900 font-bold px-7.5 py-3.5 rounded-full text-[14.5px] hover:-translate-y-0.5 transition-transform" style={{ padding: '15px 30px' }}>고입입시반 자세히 →</Link>
              </div>
              <div className="grid gap-3.5">
                {examPoints.map((p) => (
                  <div key={p.n} className="flex gap-4 items-start bg-white/5 border border-gold/20 rounded-xl px-5 py-4.5" style={{ padding: '18px 20px' }}>
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

      {/* 공지 */}
      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <SectionHead eyebrow="Notice" title="공지 사항" left />
          <div className="border-t-2 border-green-700">
            {notices.map((n) => (
              <a key={n.ti} href="#" className="grid grid-cols-[auto_1fr_auto] gap-4.5 items-center py-5 px-1.5 border-b border-line hover:bg-cream-2 transition-all" style={{ gap: 18 }}>
                <span className={`text-[11.5px] font-bold tracking-wide px-3 py-1.5 rounded-full whitespace-nowrap ${n.exam ? 'bg-gold text-green-900' : 'bg-green-800 text-gold-light'}`}>{n.tag}</span>
                <span className="text-[14.5px] text-ink truncate">{n.ti}</span>
                <span className="text-[12.5px] text-ink-muted whitespace-nowrap">{n.dt}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Card({ s }: { s: { yr: string; t: string; d: string } }) {
  return (
    <div className="bg-cream border border-line rounded-2xl px-6.5 py-6 max-md:col-start-2" style={{ padding: '24px 26px', boxShadow: '0 12px 30px -20px rgba(11,37,33,.4)' }}>
      <div className="text-[13px] tracking-[0.12em] text-gold-deep font-semibold mb-1.5">{s.yr}</div>
      <h4 className="text-[18px] text-green-700 font-semibold mb-2">{s.t}</h4>
      <p className="text-[13.5px] text-ink-muted font-light">{s.d}</p>
    </div>
  )
}
function Node() {
  return (
    <div className="flex justify-center max-md:justify-start">
      <div className="w-[18px] h-[18px] bg-gold rounded-full border-4 border-cream" style={{ boxShadow: '0 0 0 2px #C9A86A' }} />
    </div>
  )
}