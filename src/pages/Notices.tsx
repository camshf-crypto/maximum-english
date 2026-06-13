import { useParams, Link } from 'react-router-dom'
import { PageHead } from '../components/UI'
import { notices } from '../data/content'

export default function Notices() {
  const { id } = useParams()

  // 개별 공지 보기
  if (id) {
    const notice = notices.find((n) => n.id === Number(id))
    if (!notice) {
      return (
        <>
          <PageHead eyebrow="Notice" title="공지사항" subtitle="" crumb="홈 / 공지사항" />
          <section className="py-24 text-center">
            <p className="text-ink-muted mb-6">해당 공지를 찾을 수 없습니다.</p>
            <Link to="/notices" className="text-gold-deep font-semibold">목록으로 →</Link>
          </section>
        </>
      )
    }
    return (
      <>
        <PageHead eyebrow="Notice" title="공지사항" subtitle="" crumb="홈 / 공지사항" />
        <section className="py-20 max-md:py-14">
          <div className="max-w-[760px] mx-auto px-6">
            <div className="border-b-2 border-green-700 pb-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[11.5px] font-bold tracking-wide px-3 py-1.5 rounded-full ${notice.exam ? 'bg-gold text-green-900' : 'bg-green-800 text-gold-light'}`}>{notice.tag}</span>
                <span className="text-[13px] text-ink-muted">{notice.date}</span>
              </div>
              <h2 className="text-[26px] max-md:text-[21px] font-extrabold text-green-800 leading-snug">{notice.title}</h2>
            </div>
            <div className="space-y-4 mb-12">
              {notice.body.map((p, i) => (
                <p key={i} className="text-[15px] text-ink-muted font-light leading-[1.9]">{p}</p>
              ))}
            </div>
            <Link to="/notices" className="inline-flex items-center gap-1.5 text-gold-deep font-semibold text-[14px] hover:gap-3 transition-all">← 목록으로</Link>
          </div>
        </section>
      </>
    )
  }

  // 공지 목록
  return (
    <>
      <PageHead eyebrow="Notice" title="공지사항" subtitle="맥시멈 영어학원의 소식을 전해드립니다." crumb="홈 / 공지사항" />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[860px] mx-auto px-6">
          <div className="border-t-2 border-green-700">
            {notices.map((n) => (
              <Link key={n.id} to={`/notices/${n.id}`} className="grid grid-cols-[auto_1fr_auto] gap-4 max-md:gap-3 items-center py-5 px-1.5 border-b border-line hover:bg-cream-2 transition-all">
                <span className={`text-[11.5px] font-bold tracking-wide px-3 py-1.5 rounded-full whitespace-nowrap ${n.exam ? 'bg-gold text-green-900' : 'bg-green-800 text-gold-light'}`}>{n.tag}</span>
                <span className="text-[14.5px] max-md:text-[13px] text-ink truncate">{n.title}</span>
                <span className="text-[12.5px] text-ink-muted whitespace-nowrap">{n.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}