# MAXIMUM ENGLISH 웹사이트

초등·중등 영어 + 고입입시 학원 사이트. React + Vite + TypeScript + Tailwind + Supabase.

---

## 1. 설치 & 실행

```bash
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 배포 빌드
```

## 2. Supabase 연결 (상담폼·어드민)

1. supabase.com 에서 프로젝트 생성
2. **SQL Editor** 에 `supabase/schema.sql` 붙여넣고 실행 → 상담 테이블 + 권한 생성
3. **Project Settings → API** 에서 `URL`, `anon key` 복사
4. 프로젝트 루트에 `.env` 파일 만들기 (`.env.example` 참고):

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhb...
```

5. 원장 어드민 계정 만들기:
   - Supabase **Authentication → Users → Add user** 에서 이메일/비밀번호 직접 생성
   - 그 계정으로 `/admin` 에서 로그인
   - (회원가입 화면이 없으므로 외부인은 가입 불가 — 안전)

## 3. 페이지 구조

| 경로 | 내용 |
|------|------|
| `/` | 홈 (히어로·학년별·시스템·로드맵·고입강조·공지) |
| `/about` | 학원소개 |
| `/elementary` | 초등영어 |
| `/middle` | 중등영어 |
| `/exam` | 고입입시 |
| `/curriculum` | 커리큘럼·레벨표 |
| `/teachers` | 강사진 |
| `/contact` | 입학상담 폼 (→ Supabase 저장) |
| `/admin` | 원장 어드민 (상담 목록/상태관리) |

## 4. ⭐ 내용 수정하는 법 (중요)

**페이지 코드 건드릴 필요 없이** `src/data/content.ts` 한 파일만 고치면 됩니다.

- 초등/중등/고입 카드 내용 → `elementary`, `middle`, `exam`
- 커리큘럼 레벨표 → `levels`
- 강사진 → `teachers`
- 전화번호·주소·이메일 등 공통 정보 → `site`

예) 중등에 반 하나 추가하려면 `middle.cards` 배열에 객체 하나 추가하면 끝.

## 5. 배포 (Vercel)

1. GitHub에 푸시
2. Vercel → Import → 이 저장소 선택
3. **Environment Variables** 에 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY` 입력
4. Deploy (vercel.json 이 SPA 라우팅 처리해줌)

## 6. 아직 채워야 할 것

- `src/data/content.ts` 의 `site` — 실제 전화/주소/이메일/등록번호
- 강사진 실제 정보
- 로고: 지금은 SVG 크레스트. 실제 로고 이미지 쓰려면 `src/components/Crest.tsx` 교체
- 공지사항: 지금 홈에 하드코딩(`Home.tsx` 의 `notices`). 나중에 Supabase 게시판으로 뺄 수 있음
