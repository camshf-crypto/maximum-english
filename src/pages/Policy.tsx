import { PageHead } from '../components/UI'
import { site } from '../data/content'

// ===== 수강료 표 (실제 학원 수강료로 수정하세요) =====
const feeRows = [
  { course: '초등 저학년 영어 시작반', fee: '244,000원' },
  { course: '초등 영어원서', fee: '335,000원' },
  { course: '예비중 ~ 중1', fee: '400,000원' },
  { course: '중등부 특목 대비반', fee: '450,000원' },
  { course: '중등부 특목 심화반', fee: '600,000원' },
  { course: '중등부 기본 과정', fee: '270,000원' },
  { course: '중등부 실력 과정', fee: '335,000원' },
  { course: '중등부 심화 과정', fee: '400,000원' },
  { course: '중등부 최상위 과정', fee: '800,000원' },
  { course: '고1 기본 과정', fee: '350,000원' },
  { course: '고1 모의고사반', fee: '400,000원' },
  { course: '고2 모의고사반', fee: '500,000원' },
  { course: '고3 모의고사반', fee: '600,000원' },
  { course: '고등부 최상위 과정', fee: '900,000원' },
]

const payMethods = [
  { t: '온라인 결제', d: '학원 안내에 따라 카드로 간편하게 결제' },
  { t: '방문 결제', d: '학원에 방문하여 카드 또는 현금으로 결제' },
  { t: '계좌 이체', d: '지정된 계좌로 직접 이체' },
]

const refundRows = [
  ['수강 시작 전', '납부한 수강료 전액 환불'],
  ['총 수강 시간의 1/3 경과 전', '실제 결제 금액의 2/3 환불'],
  ['총 수강 시간의 1/2 경과 전', '실제 결제 금액의 1/2 환불'],
  ['총 수강 시간의 1/2 경과 후', '환불 없음'],
]

// ===== 개인정보 / 이용약관 =====
const docContent: Record<string, { eyebrow: string; title: string; crumb: string; body: { h: string; p: string[] }[] }> = {
  privacy: {
    eyebrow: 'Privacy Policy', title: '개인정보처리방침', crumb: '홈 / 개인정보처리방침',
    body: [
      { h: '1. 수집하는 개인정보 항목', p: [`${site.nameKo}(이하 '학원')은 입학 상담 신청을 위해 다음의 개인정보를 수집합니다.`, '• 필수 항목 : 학생 이름, 학부모 연락처, 학년', '• 선택 항목 : 관심 프로그램, 상담 희망 내용'] },
      { h: '2. 개인정보의 수집 및 이용 목적', p: ['수집한 개인정보는 입학 상담 및 레벨테스트 안내, 학원 프로그램 안내 목적으로만 이용됩니다.'] },
      { h: '3. 개인정보의 보유 및 이용 기간', p: ['상담 목적이 달성된 후 또는 정보주체의 삭제 요청 시 지체 없이 파기합니다. 단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.'] },
      { h: '4. 개인정보의 제3자 제공', p: ['학원은 정보주체의 동의 없이 개인정보를 외부에 제공하지 않습니다. 단, 법령에 의해 요구되는 경우는 예외로 합니다.'] },
      { h: '5. 정보주체의 권리', p: ['정보주체는 언제든지 개인정보의 열람, 정정, 삭제, 처리정지를 요청할 수 있으며, 학원은 관련 요청에 지체 없이 조치합니다.', `문의 : ${site.phone}`] },
    ],
  },
  terms: {
    eyebrow: 'Terms of Use', title: '이용약관', crumb: '홈 / 이용약관',
    body: [
      { h: '제1조 (목적)', p: [`본 약관은 ${site.nameKo}(이하 '학원')이 제공하는 웹사이트 및 서비스의 이용과 관련하여 학원과 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.`] },
      { h: '제2조 (서비스의 내용)', p: ['학원은 웹사이트를 통해 학원 및 프로그램 안내, 입학 상담 신청 등의 서비스를 제공합니다.'] },
      { h: '제3조 (이용자의 의무)', p: ['이용자는 상담 신청 시 정확한 정보를 제공해야 하며, 타인의 정보를 도용해서는 안 됩니다.'] },
      { h: '제4조 (책임의 제한)', p: ['학원은 천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.'] },
      { h: '제5조 (약관의 변경)', p: ['본 약관은 관련 법령의 변경 또는 학원의 사정에 따라 변경될 수 있으며, 변경 시 웹사이트를 통해 공지합니다.'] },
    ],
  },
}

export default function Policy({ type }: { type: 'fee' | 'privacy' | 'terms' }) {
  // ===== 수강료 페이지 =====
  if (type === 'fee') {
    return (
      <>
        <PageHead eyebrow="Tuition" title="수강료 안내" subtitle="과정별 월 교습비 안내입니다. 자세한 사항은 학원으로 문의해 주세요." crumb="홈 / 수강료 안내" />
        <section className="py-20 max-md:py-14">
          <div className="max-w-[720px] mx-auto px-6">
            {/* 수강료 표 */}
            <div className="overflow-x-auto mb-16">
              <table className="w-full border-collapse bg-cream rounded-2xl overflow-hidden border border-line" style={{ boxShadow: '0 16px 40px -28px rgba(11,37,33,.4)' }}>
                <thead>
                  <tr>
                    <th className="bg-green-800 text-gold-light text-[14.5px] font-semibold px-5 py-4 text-left tracking-wide">과정명</th>
                    <th className="bg-green-800 text-gold-light text-[14.5px] font-semibold px-5 py-4 text-left tracking-wide" style={{ width: 160 }}>월 수강료</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((r, i) => (
                    <tr key={i} className={i % 2 ? 'bg-cream-2/50' : ''}>
                      <td className="px-5 py-4 border-b border-line text-[14px] font-semibold text-green-800 align-top">{r.course}</td>
                      <td className="px-5 py-4 border-b border-line text-[14px] font-bold text-gold-deep text-left whitespace-nowrap align-top">{r.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-[12.5px] text-ink-muted font-light mt-3">* 수강료는 학원 사정에 따라 변경될 수 있습니다. 정확한 금액은 학원으로 문의해 주세요.</p>
            </div>

            {/* 납부 방법 */}
            <h3 className="text-[20px] font-bold text-green-800 mb-5">수강료 납부 방법</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              {payMethods.map((m, i) => (
                <div key={i} className="bg-cream border border-line rounded-2xl px-6 py-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-gold-light font-extrabold mb-3" style={{ background: 'linear-gradient(160deg,#143A34,#0B2521)' }}>{i + 1}</div>
                  <h4 className="text-[15px] font-bold text-green-800 mb-1.5">{m.t}</h4>
                  <p className="text-[13px] text-ink-muted font-light leading-relaxed">{m.d}</p>
                </div>
              ))}
            </div>

            {/* 환불 기준 */}
            <h3 className="text-[20px] font-bold text-green-800 mb-2">수강료 환불 기준</h3>
            <p className="text-[13.5px] text-ink-muted font-light mb-5">수강료 환불 기준은 교육청 수강료 환불 기준을 준수하며, 월 단위로 적용됩니다.</p>
            <div className="bg-cream rounded-2xl overflow-hidden border border-line">
              {refundRows.map((r, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-4 ${i !== refundRows.length - 1 ? 'border-b border-line' : ''} ${i % 2 ? 'bg-cream-2/50' : ''}`}>
                  <div className="text-[14px] font-semibold text-green-800 sm:w-[280px] sm:flex-none">{r[0]}</div>
                  <div className="text-[14px] text-ink-muted font-light">{r[1]}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
  }

  // ===== 개인정보 / 이용약관 =====
  const data = docContent[type]
  return (
    <>
      <PageHead eyebrow={data.eyebrow} title={data.title} subtitle="" crumb={data.crumb} />
      <section className="py-20 max-md:py-14">
        <div className="max-w-[820px] mx-auto px-6">
          {data.body.map((sec, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-[19px] font-bold text-green-800 mb-4">{sec.h}</h3>
              {sec.p.map((line, j) => (
                <p key={j} className="text-[14.5px] text-ink-muted font-light leading-[1.9] mb-1.5">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  )
}