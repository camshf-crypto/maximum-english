// ============================================================
//  사이트 콘텐츠 데이터
//  → 초등/중등/고입/커리큘럼/러닝팩 내용은 전부 여기서 수정하세요.
// ============================================================

// ---------- 커리큘럼 항목 (번호 + 제목 + 설명들) ----------
export interface CurriculumItem {
  no: string
  title: string
  lines: string[]
}

// ===== 초등부 7개 =====
export const elementaryCurriculum: CurriculumItem[] = [
  {
    no: '01', title: '100% 영어 몰입 + 스피킹 전담 선생님 수업',
    lines: ['모든 수업 영어로 진행', '실생활 회화 → 발표 → Speech 훈련까지 전담 지도'],
  },
  {
    no: '02', title: '정통 영어원서 기반 다독 시스템',
    lines: ['미국 국제학교 정식 원서 사용', 'AR레벨 맞춤 다독 (월 60~100권)', '문장구조·어휘·표현 자연습득 + 과학·사회·역사 등 배경지식 확장'],
  },
  {
    no: '03', title: 'IB Inquiry Activity & 사고력 수업',
    lines: ['질문 만들기, 토론, 북리포트, Retelling 등', 'IB 교육철학 기반의 질문 중심 수업으로 사고력 확장'],
  },
  {
    no: '04', title: '체계적인 Writing 시스템',
    lines: ['기본문장 → 단락 → 북리포트 → 기초 에세이 작성'],
  },
  {
    no: '05', title: '초등 VOCA 7단계 시스템',
    lines: ['초등 필수 800단어', '독해용·내신대비 어휘까지 확장', '중등 수행·내신 대비까지 자연스럽게 연계되는 누적형 어휘 시스템'],
  },
  {
    no: '06', title: '초등 수행평가 Speaking & Writing 시스템',
    lines: ['초등부터 수행평가형 발표·에세이 작성 훈련', '중·고 수행평가 자연스러운 연결'],
  },
  {
    no: '07', title: '영자신문 특별 수업 (초등부)',
    lines: ['시사·사회·문화 기사 읽기', '배경지식·어휘·문장구조·비판적 사고력 통합 훈련', '수행평가형 Writing 기초 구축'],
  },
]

// ===== 중등부 11개 =====
export const middleCurriculum: CurriculumItem[] = [
  {
    no: '01', title: '영어 내신·수행평가 전문 대비',
    lines: ['능숙증·효과실증 등 기출 수행 실전 대비 완벽 분석', '실전문제풀이·오답분석·개인 피드백 정밀 관리'],
  },
  {
    no: '02', title: '국제학교·특목고 연계 영어원서 심화 수업',
    lines: ['뉴버리 수상작, 철학·역사 인문학 원서 심층 독서', '국제학교·외고·국제고 실사용 원서 활용'],
  },
  {
    no: '03', title: 'IB형 아카데믹 사고력 확장',
    lines: ['질문·탐구·토론·논술형 쓰기로 사고력 확장 유지'],
  },
  {
    no: '04', title: 'Writing & Academic Expression',
    lines: ['Argument · Opinion · Summary Writing 전문 지도', '학생부 종합전형 대비 Writing 프레임 구축'],
  },
  {
    no: '05', title: 'VOCA 확장 시스템',
    lines: ['어휘 기반 심화 어휘학습', '어근·접두사·접미사 중심 어휘학습 → 고급 독해형 어휘까지 확장'],
  },
  {
    no: '06', title: '특목·자사고 대비 시스템',
    lines: ['외고·국제고·자사고 독서이력 서류·면접·논술 전망 대비', 'Humanities 독서 포트폴리오 체계적 관리'],
  },
  {
    no: '07', title: 'TED·영어설문 스피치 수업',
    lines: ['TED 강연·영어설문 발표 훈련 → 실전 발표력 완성'],
  },
  {
    no: '08', title: 'Debate 전담 스피킹 시스템 (100% 영어)',
    lines: ['전담 Debate 스피킹 선생님 수업 → 전원 영어토론', 'Academic Debate·Critical Thinking 집중 훈련'],
  },
  {
    no: '09', title: '고등영어 연계 과정',
    lines: ['중등부터 고등 수능형 독해프레임으로 자연스러운 체계적인 연계'],
  },
  {
    no: '10', title: '영자신문 특별 수업 (중등부)',
    lines: ['시사·국제 기사 분석 → Summary Writing & 토론', '일반고·특목고 영어수행평가 완벽 대비'],
  },
  {
    no: '11', title: '문법 독파 시스템',
    lines: ['내신 수행 필수 문법 완전 소화', '→ Writing·Speaking 연계 적용'],
  },
]

// ---------- 맥시멈 러닝팩 4단계 ----------
export interface PackStage {
  step: string
  en: string
  ko: string
  lines: string[]
  en_summary: string
  closing: string
}

export const packStages: PackStage[] = [
  {
    step: '1단계', en: 'Foundation', ko: '영어 학습의 기반을 다지는 시기',
    lines: ['영어원서 읽기 습관 형성', '영어 기본 문해력·어휘·문장 구조 이해', '온라인 영어독서관 및 듣기 과제 습관 정착', 'Language Arts 기초 레벨 진행'],
    en_summary: 'Build essential literacy and establish solid learning habits (vocabulary, sentence structure, basic comprehension)',
    closing: '기초를 탄탄히 만들어 이후 학습의 흐름을 잡아주는 단계입니다.',
  },
  {
    step: '2단계', en: 'Insight', ko: '읽기에서 생각이 열리는 시기',
    lines: ['영어원서 내용을 스스로 이해하고 추론하는 능력 강화', '읽기 속도·정확도 향상', 'Grammar & Reading Skills 본격 학습', '사고 기반 리딩 (Thinking-based Reading) 훈련'],
    en_summary: '',
    closing: '단순 읽기를 넘어 \u2018생각이 보이는 아이\u2019로 성장합니다.',
  },
  {
    step: '3단계', en: 'Mastery', ko: '문해력·사고력·표현력이 완성되는 단계',
    lines: ['영어 원서 기반 Reading → Writing → Discussion 연계', '중등 내신 및 수행평가 확장 가능한 실력 형성', 'Grammar & Reading Skills 심화 학습', '고급 어휘·문장 활용 능력 완성'],
    en_summary: '',
    closing: '스스로 읽고, 정리하고, 말하고, 쓸 수 있는 실질적 Academic Skills를 갖추게 됩니다.',
  },
  {
    step: '4단계', en: 'Visionary', ko: '미래를 바라보는 시야와 학문적 사고력을 갖춘 단계 (특목고 전용)',
    lines: ['특목·자사고 목표 학생을 위한 심화 사고력 훈련', '인터뷰형 사고력·토론·논술 기반 사고 확장', '프로젝트·포트폴리오 학습', 'Academic English를 다룰 수 있는 수준의 최종 단계'],
    en_summary: '',
    closing: '단순히 영어를 잘하는 것을 넘어 미래를 바라보고 스스로 길을 만드는 학생으로 성장합니다.',
  },
]

// ---------- 대표 인사말 (원장 인사말) ----------
export const greeting = {
  badge: 'Director\u2019s Message',
  title: '대표 인사말',
  lead: '영어를 잘하는 아이가 아니라,\n영어로 생각하고 표현하는 아이를 키웁니다.',
  paragraphs: [
    '안녕하세요, 맥시멈 영어학원 원장입니다.',
    '오랜 시간 현장에서 학생들을 지도하며 한 가지 확신을 갖게 되었습니다. 진짜 영어 실력은 점수만으로 완성되지 않는다는 것입니다. 스스로 읽고, 깊이 이해하고, 자신의 생각을 논리적으로 말하고 쓸 수 있을 때 비로소 그 실력은 입시에서도, 그 이후의 삶에서도 무기가 됩니다.',
    '맥시멈은 영어원서 기반의 다독과 사고력 수업, 그리고 스피치·토론·면접까지 이어지는 체계적인 커리큘럼으로 아이가 가진 가능성의 \u2018최대치\u2019를 끌어냅니다. 초등의 탄탄한 기초가 중등 내신으로, 다시 고입입시 경쟁력으로 자연스럽게 이어지도록 한 명 한 명을 오래, 깊이 책임지겠습니다.',
    '아이의 성장을 함께 설계하는 든든한 파트너가 되겠습니다. 감사합니다.',
  ],
  sign: '맥시멈 영어학원 원장',
}

// ---------- MLS 철학 (학원소개) ----------
export const mlsIntro = {
  badge: 'Maximum Learning System',
  title: '맥시멈 러닝 시스템 (MLS)',
  paragraphs: [
    '2026년 1월부터 맥시멈영어학원은 학생들의 문해력, 사고력, 표현력, 미래역량을 단계적으로 설계하기 위해 영어원서 기반의 학습 체계 \u2018맥시멈 러닝 시스템(MLS)\u2019을 도입합니다.',
    '맥시멈 러닝 시스템은 단순히 영어 점수를 올리는 훈련이 아니라, 아이들이 영어로 생각하고, 이해하고, 연결하고, 표현할 수 있는 능력을 기르는 데 초점을 둔 장기 성장 프로그램입니다.',
    '그 핵심이 바로 맥시멈 러닝팩(Maximum Learning Pack)입니다. 맥시멈 러닝팩은 총 4단계로 구성되며, 아이의 읽기 수준과 사고 발달 단계에 따라 자연스럽게 성장하도록 설계되었습니다.',
  ],
}

// ---------- 고입입시 카드 ----------
export interface ProgramCard {
  badge: string; title: string; age: string; desc: string; points: string[]; to?: string
}

export const examCards: ProgramCard[] = [
  {
    badge: 'FOREIGN LANG', title: '외고 · 국제고', age: '영어 역량 중심',
    desc: '제시문 면접과 자기주도학습 역량이 핵심. 실전 면접과 자소서를 집중 훈련합니다.',
    points: ['인성, 자기주도적 기반 면접', '자소서 스토리 설계', '학생부 연계 첨삭'],
  },
  {
    badge: 'AUTONOMOUS', title: '자사고', age: '학업 역량 종합',
    desc: '내신과 면접, 학생부 전반을 균형 있게. 학교별 인재상에 맞춰 준비합니다.',
    points: ['학교별 면접 대비', '내신 경쟁력 강화', '지원 동기 구체화'],
  },
  {
    badge: 'SCIENCE', title: '과학고 · 영재', age: '탐구 역량 중심',
    desc: '탐구 면접과 발표 역량을 함께. 논리적으로 설명하는 힘을 기릅니다.',
    points: ['실험 발표 · 설명 훈련', '탐구 면접 대비', '자기소개 작성'],
  },
]

// ---------- 커리큘럼 레벨표 ----------
export interface LevelRow { level: string; target: string; focus: string; detail: string }

export const levels: LevelRow[] = [
  { level: '1단계', target: 'Foundation', focus: '기반 다지기', detail: '원서 읽기 습관 · 기초 문해력 · Language Arts' },
  { level: '2단계', target: 'Insight', focus: '사고 확장', detail: '추론 독해 · Grammar & Reading · 사고 기반 리딩' },
  { level: '3단계', target: 'Mastery', focus: '실력 완성', detail: 'Reading→Writing→Discussion · 내신·수행 확장' },
  { level: '4단계', target: 'Visionary', focus: '특목고 심화', detail: '인터뷰·토론·논술 · 프로젝트 · Academic English' },
]

// ---------- 홈: 학년별 3카드 ----------
export const homeGrades: ProgramCard[] = [
  {
    badge: 'ELEMENTARY', title: '초등 영어', age: '예비초 ~ 초6',
    desc: '영어원서 기반 다독과 4대 영역 균형 학습. 영어로 생각하고 표현하는 힘을 키우는 결정적 시기를 책임집니다.',
    points: ['100% 영어 몰입 · 스피킹 전담', '원서 다독 + IB 사고력 수업', '수행평가형 Writing 기초'],
    to: '/elementary',
  },
  {
    badge: 'MIDDLE', title: '중등 영어', age: '중1 ~ 중3',
    desc: '내신·수행평가 전문 대비와 특목·자사고 연계 원서 심화. 담임이 성적과 실력을 동시에 책임집니다.',
    points: ['내신·수행평가 전문 대비', '특목·자사고 원서 심화', 'Debate·TED 영어 스피치'],
    to: '/middle',
  },
  {
    badge: 'HIGH SCHOOL ADMISSION', title: '고입입시', age: '중2 ~ 중3 특화',
    desc: '외고·국제고·자사고·과학고까지. 영어 면접과 자기소개서, 학생부 대비를 한 곳에서 완성합니다.',
    points: ['유형별 영어 면접 시뮬레이션', '자소서·학생부 첨삭', '고입 합격 전략'],
    to: '/exam',
  },
]

// ---------- 강사진 ----------
export interface Teacher { mono: string; role: string; name: string; sub: string; desc: string }

export const teachers: Teacher[] = [
  { mono: 'M', role: '대표 원장', name: '원장', sub: '· Director', desc: '전체 커리큘럼 설계와 입시 전략을 총괄합니다.' },
  { mono: 'E', role: 'Elementary', name: '초등부', sub: '· 담임', desc: '원서 다독과 4대 영역 균형 학습을 책임집니다.' },
  { mono: 'S', role: 'Speech', name: '스피치 전담', sub: '· Coach', desc: 'Speech·Debate 등 영어 발표 역량을 전담합니다.' },
  { mono: 'A', role: 'Admission', name: '입시 전담', sub: '· 코치', desc: '영어 면접과 자소서·학생부 컨설팅을 전담합니다.' },
]

// ---------- 공지사항 ----------
export interface Notice {
  id: number
  tag: string
  exam: boolean
  title: string
  date: string
  body: string[]
}

export const notices: Notice[] = [
  {
    id: 1, tag: '개강', exam: false, date: '2026.06.10',
    title: '2026 여름방학 초·중등 집중반 모집 안내',
    body: [
      '2026년 여름방학 초·중등 집중반 모집을 안내드립니다.',
      '방학 기간 동안 영어원서 다독과 4대 영역 집중 학습으로 실력을 한 단계 끌어올리는 프로그램입니다.',
      '정원이 제한되어 있으니 자세한 일정과 신청은 학원으로 문의해 주세요.',
    ],
  },
  {
    id: 2, tag: '고입', exam: true, date: '2026.06.05',
    title: '중3 외고·국제고 영어 면접 특강 일정 공지',
    body: [
      '중3 학생을 위한 외고·국제고 영어 면접 특강 일정을 공지합니다.',
      '실전 유형별 면접 시뮬레이션과 1:1 피드백으로 지망교 합격을 준비합니다.',
      '대상 및 일정은 학원으로 문의해 주세요.',
    ],
  },
  {
    id: 3, tag: '내신', exam: false, date: '2026.05.28',
    title: '2026년 1학기 기말고사 학교별 내신대비반 운영',
    body: [
      '2026년 1학기 기말고사 대비 학교별 내신대비반을 운영합니다.',
      '학교별 기출과 출제 경향을 분석하여 시험 4주 전부터 집중 대비합니다.',
      '서술형·수행평가까지 꼼꼼하게 관리해 드립니다.',
    ],
  },
  {
    id: 4, tag: '일반', exam: false, date: '2026.05.20',
    title: '신규 입학 레벨테스트 상시 접수 안내',
    body: [
      '신규 입학을 위한 레벨테스트를 상시 접수하고 있습니다.',
      '현재 실력을 정확히 진단하고 가장 알맞은 반과 학습 방향을 무료로 안내해 드립니다.',
      '레벨테스트 예약은 입학상담 페이지 또는 전화로 신청해 주세요.',
    ],
  },
]

// ---------- 사이트 공통 정보 ----------
export const site = {
  name: 'MAXIMUM ENGLISH',
  nameKo: '맥시멈 영어학원',
  phone: '031-804-0505',
  hours: '평일 13:00 ~ 22:00 · 주말 상담 가능',
  address: '경기도 수원시 권선구 호매실로104번길 24-61 금호프라자 9층',
  email: 'info@maximum-english.kr',
  regNo: '제0000호',
}