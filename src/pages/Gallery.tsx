import { PageHead } from '../components/UI'

const classes = [
  { label: '초등 원서 리딩 수업', tag: 'Elementary' },
  { label: '스피치 발표 수업', tag: 'Speech' },
  { label: '영어 토론(Debate)', tag: 'Debate' },
  { label: '중등 내신 집중반', tag: 'Middle' },
  { label: 'IB 사고력 수업', tag: 'Thinking' },
  { label: '영어 면접 시뮬레이션', tag: 'Admission' },
  { label: 'Writing 첨삭 수업', tag: 'Writing' },
  { label: '레벨테스트 · 상담', tag: 'Test' },
]

export default function Gallery() {
  return (
    <>
      <PageHead eyebrow="Our Classes" title="수업 클래스"
        subtitle="맥시멈의 생생한 수업 현장을 사진으로 만나보세요." crumb="홈 / 수업 클래스" />

      <section className="py-20 max-md:py-14">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-md:gap-4">
            {classes.map((c, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-line cursor-pointer"
                style={{ background: 'linear-gradient(160deg,#1C4A42,#0B2521)' }}>
                {/* 사진 자리 (실제 사진으로 교체) */}
                <div className="absolute inset-0 flex items-center justify-center text-gold-light/30">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 16l4.5-6 3 4 2.5-3 5.5 7M4 6h16v12H4z" /></svg>
                </div>
                {/* 하단 라벨 */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-green-900/90 to-transparent">
                  <div className="text-[11px] tracking-[0.16em] uppercase text-gold-light font-bold mb-1">{c.tag}</div>
                  <div className="text-[14px] text-cream font-semibold">{c.label}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-ink-muted text-[13px] font-light mt-10">* 실제 수업 사진으로 교체해 주세요.</p>
        </div>
      </section>
    </>
  )
}