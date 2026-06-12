import { useState } from 'react'
import { PageHead } from '../components/UI'
import { submitConsultation } from '../lib/supabase'
import { site } from '../data/content'

const grades = ['예비초 ~ 초2', '초3 ~ 초4', '초5 ~ 초6', '중1', '중2', '중3 (고입입시)']
const programs = ['초등 영어', '중등 영어 (정규/내신)', '고입입시반', '레벨테스트만 희망']

export default function Contact() {
  const [form, setForm] = useState({ student_name: '', parent_phone: '', grade: '', program: '', message: '' })
  const [agree, setAgree] = useState(false)
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const [errMsg, setErrMsg] = useState('')

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }))

  async function submit() {
    if (!form.student_name.trim() || !form.parent_phone.trim() || !form.grade) {
      alert('학생 이름 · 연락처 · 학년은 필수입니다.'); return
    }
    if (!agree) { alert('개인정보 수집·이용에 동의해 주세요.'); return }

    setState('sending')
    try {
      await submitConsultation({
        student_name: form.student_name.trim(),
        parent_phone: form.parent_phone.trim(),
        grade: form.grade,
        program: form.program || null,
        message: form.message.trim() || null,
      })
      setState('done')
    } catch (e: any) {
      setErrMsg(e?.message || '전송 중 오류가 발생했습니다.')
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <>
        <PageHead eyebrow="Admission & Contact" title="입학상담 예약" subtitle="신청이 접수되었습니다." crumb="입학상담" />
        <section className="py-24 max-md:py-16">
          <div className="max-w-[480px] mx-auto px-6 text-center bg-cream rounded-2xl p-12 border border-line shadow-soft">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-800 rounded-full flex items-center justify-center text-3xl text-gold-light">✓</div>
            <h2 className="text-2xl font-extrabold mb-3">상담 신청 완료</h2>
            <p className="text-ink-muted leading-relaxed mb-8">빠른 시일 내에 연락드려 상담 일정을 잡아드리겠습니다.</p>
            <a href="/" className="inline-block px-7 py-3.5 bg-green-800 text-gold-light font-semibold rounded-full hover:bg-green-700 transition-colors">메인으로</a>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHead eyebrow="Admission & Contact" title="입학상담 예약"
        subtitle="무료 레벨테스트와 학습 상담으로 시작하세요. 가장 알맞은 반과 방향을 안내해 드립니다." crumb="입학상담" />

      <section className="py-24 max-md:py-16">
        <div className="max-w-container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            {/* 좌: 안내 */}
            <div className="rounded-[20px] text-cream px-10 py-11" style={{ background: 'linear-gradient(160deg,#143A34,#0B2521)', padding: '44px 40px' }}>
              <h3 className="text-[30px] font-extrabold text-gold-light mb-3.5">상담 안내</h3>
              <p className="text-[14px] text-cream/74 font-light mb-7.5 leading-relaxed" style={{ marginBottom: 30 }}>전화 또는 아래 폼으로 신청해 주시면, 빠르게 연락드려 상담 일정을 잡아드립니다.</p>
              {[
                ['☎', 'Phone', site.phone],
                ['◷', 'Hours', site.hours],
                ['⌖', 'Location', site.address],
                ['✉', 'Email', site.email],
              ].map(([ic, lab, val]) => (
                <div key={lab} className="flex gap-4 items-start py-4.5 border-t border-gold/20" style={{ padding: '18px 0' }}>
                  <div className="w-[38px] h-[38px] border border-gold rounded-full flex items-center justify-center text-gold-light flex-none">{ic}</div>
                  <div>
                    <div className="text-[11.5px] tracking-[0.14em] uppercase text-gold font-bold">{lab}</div>
                    <div className="text-[14.5px] text-cream mt-1">{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 우: 폼 */}
            <div className="bg-cream border border-line rounded-[20px] p-10.5 shadow-soft" style={{ padding: '42px 40px' }}>
              <Field label="학생 이름" req>
                <input className={inputCls} placeholder="홍길동" value={form.student_name} onChange={(e) => set('student_name', e.target.value)} />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5" style={{ gap: 18 }}>
                <Field label="학부모 연락처" req>
                  <input className={inputCls} placeholder="010-0000-0000" value={form.parent_phone} onChange={(e) => set('parent_phone', e.target.value)} />
                </Field>
                <Field label="학년" req>
                  <select className={inputCls} value={form.grade} onChange={(e) => set('grade', e.target.value)}>
                    <option value="">선택</option>
                    {grades.map((g) => <option key={g}>{g}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="관심 프로그램">
                <select className={inputCls} value={form.program} onChange={(e) => set('program', e.target.value)}>
                  <option value="">선택</option>
                  {programs.map((p) => <option key={p}>{p}</option>)}
                </select>
              </Field>
              <Field label="상담 희망 내용">
                <textarea className={inputCls + ' min-h-[120px] resize-y'} placeholder="현재 학습 상황이나 궁금한 점을 자유롭게 적어주세요." value={form.message} onChange={(e) => set('message', e.target.value)} />
              </Field>
              <label className="flex gap-2.5 items-start mb-6 text-[13px] text-ink-muted cursor-pointer">
                <input type="checkbox" className="w-[18px] h-[18px] mt-0.5 accent-gold-deep" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
                <span>개인정보 수집·이용에 동의합니다. (상담 목적 외 사용하지 않습니다)</span>
              </label>
              {state === 'error' && <div className="text-red-600 text-[13px] mb-3">{errMsg}</div>}
              <button onClick={submit} disabled={state === 'sending'}
                className="w-full bg-gradient-to-br from-gold-light to-gold-deep text-green-900 font-bold py-4 rounded-full text-[15px] hover:-translate-y-0.5 transition-transform disabled:opacity-60">
                {state === 'sending' ? '전송 중…' : '상담 신청하기'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const inputCls = 'w-full px-4 py-3.5 border border-line rounded-[10px] text-[14px] bg-white text-ink focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all'

function Field({ label, req, children }: { label: string; req?: boolean; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label className="block text-[13px] font-semibold text-green-700 mb-2 tracking-tight">
        {label} {req && <span className="text-gold-deep">*</span>}
      </label>
      {children}
    </div>
  )
}
