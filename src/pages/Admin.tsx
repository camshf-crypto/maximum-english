import { useEffect, useState } from 'react'
import { supabase, listConsultations, updateConsultationStatus } from '../lib/supabase'
import type { Consultation, ConsultationStatus } from '../lib/supabase'

const statusLabel: Record<ConsultationStatus, string> = {
  new: '신규', contacted: '연락완료', enrolled: '등록', closed: '종료',
}
const statusColor: Record<ConsultationStatus, string> = {
  new: 'bg-gold text-green-900',
  contacted: 'bg-green-700 text-gold-light',
  enrolled: 'bg-green-900 text-gold-light',
  closed: 'bg-ink-muted/30 text-ink',
}

export default function Admin() {
  const [session, setSession] = useState<boolean | null>(null)
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [loginErr, setLoginErr] = useState('')
  const [rows, setRows] = useState<Consultation[]>([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<ConsultationStatus | 'all'>('all')

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(!!data.session))
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(!!s))
    return () => sub.subscription.unsubscribe()
  }, [])

  useEffect(() => { if (session) load() }, [session])

  async function load() {
    setLoading(true)
    try { setRows(await listConsultations()) } catch (e: any) { alert(e.message) }
    setLoading(false)
  }

  async function login() {
    setLoginErr('')
    const { error } = await supabase.auth.signInWithPassword({ email, password: pw })
    if (error) setLoginErr('로그인 실패: ' + error.message)
  }

  async function changeStatus(id: string, status: ConsultationStatus) {
    await updateConsultationStatus(id, status)
    setRows((r) => r.map((x) => (x.id === id ? { ...x, status } : x)))
  }

  if (session === null) return <div className="p-20 text-center text-ink-muted">로딩 중…</div>

  // ----- 로그인 화면 -----
  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: 'linear-gradient(180deg,#0F2E2A,#0B2521)' }}>
        <div className="w-full max-w-[380px] bg-cream rounded-2xl p-9 shadow-soft">
          <h1 className="text-[22px] font-extrabold text-green-800 mb-1">원장 어드민</h1>
          <p className="text-[13px] text-ink-muted mb-6">상담 신청 관리</p>
          <input className={inp} placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={inp + ' mt-3'} type="password" placeholder="비밀번호" value={pw} onChange={(e) => setPw(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && login()} />
          {loginErr && <div className="text-red-600 text-[12.5px] mt-3">{loginErr}</div>}
          <button onClick={login} className="w-full mt-5 bg-green-800 text-gold-light font-bold py-3.5 rounded-full hover:bg-green-700 transition-colors">로그인</button>
        </div>
      </div>
    )
  }

  // ----- 대시보드 -----
  const filtered = filter === 'all' ? rows : rows.filter((r) => r.status === filter)
  const counts = rows.reduce((a, r) => { a[r.status as ConsultationStatus] = (a[r.status as ConsultationStatus] || 0) + 1; return a }, {} as Record<string, number>)

  return (
    <div className="min-h-screen bg-cream-2">
      <header className="bg-green-800 text-cream">
        <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-extrabold text-gold-light tracking-wide">MAXIMUM · 상담 관리</span>
          <button onClick={() => supabase.auth.signOut()} className="text-[13px] text-cream/70 hover:text-gold-light">로그아웃</button>
        </div>
      </header>

      <div className="max-w-container mx-auto px-6 py-10">
        {/* 요약 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {(['new', 'contacted', 'enrolled', 'closed'] as ConsultationStatus[]).map((s) => (
            <div key={s} className="bg-cream border border-line rounded-xl p-5">
              <div className="text-[12.5px] text-ink-muted mb-1">{statusLabel[s]}</div>
              <div className="text-[28px] font-extrabold text-green-700">{counts[s] || 0}</div>
            </div>
          ))}
        </div>

        {/* 필터 */}
        <div className="flex gap-2 mb-5 flex-wrap">
          {(['all', 'new', 'contacted', 'enrolled', 'closed'] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all ${filter === f ? 'bg-green-800 text-gold-light' : 'bg-cream border border-line text-ink-muted hover:border-gold'}`}>
              {f === 'all' ? '전체' : statusLabel[f]}
            </button>
          ))}
          <button onClick={load} className="ml-auto px-4 py-2 rounded-full text-[13px] bg-cream border border-line text-ink-muted hover:border-gold">새로고침</button>
        </div>

        {/* 목록 */}
        <div className="bg-cream border border-line rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-800 text-gold-light text-[13px]">
                  {['신청일', '학생', '연락처', '학년', '관심', '내용', '상태'].map((h) => (
                    <th key={h} className="px-4 py-3.5 text-left font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan={7} className="text-center py-12 text-ink-muted">불러오는 중…</td></tr>
                ) : filtered.length === 0 ? (
                  <tr><td colSpan={7} className="text-center py-12 text-ink-muted">상담 신청이 없습니다.</td></tr>
                ) : filtered.map((r) => (
                  <tr key={r.id} className="border-b border-line text-[13.5px] align-top hover:bg-cream-2/50">
                    <td className="px-4 py-3.5 whitespace-nowrap text-ink-muted">{r.created_at?.slice(0, 10)}</td>
                    <td className="px-4 py-3.5 font-semibold whitespace-nowrap">{r.student_name}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">{r.parent_phone}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">{r.grade}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap text-ink-muted">{r.program || '-'}</td>
                    <td className="px-4 py-3.5 max-w-[260px] text-ink-muted">{r.message || '-'}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <select value={r.status} onChange={(e) => changeStatus(r.id!, e.target.value as ConsultationStatus)}
                        className={`text-[12px] font-bold px-2.5 py-1.5 rounded-full border-none cursor-pointer ${statusColor[r.status as ConsultationStatus]}`}>
                        {(['new', 'contacted', 'enrolled', 'closed'] as ConsultationStatus[]).map((s) => (
                          <option key={s} value={s}>{statusLabel[s]}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const inp = 'w-full px-4 py-3 border border-line rounded-lg text-[14px] bg-white focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15'
