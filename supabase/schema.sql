-- ============================================================
--  MAXIMUM ENGLISH · 상담 신청 테이블
--  Supabase 대시보드 → SQL Editor 에 붙여넣고 실행하세요.
-- ============================================================

-- 1) 테이블
create table if not exists public.consultations (
  id            uuid primary key default gen_random_uuid(),
  student_name  text not null,
  parent_phone  text not null,
  grade         text not null,
  program       text,
  message       text,
  status        text not null default 'new'
                check (status in ('new','contacted','enrolled','closed')),
  created_at    timestamptz not null default now()
);

-- 정렬 성능용 인덱스
create index if not exists consultations_created_idx
  on public.consultations (created_at desc);

-- 2) RLS 켜기
alter table public.consultations enable row level security;

-- 3) 정책
--   (a) 누구나 상담 "신청"(insert)은 가능 — 홈페이지 폼
drop policy if exists "anyone can insert" on public.consultations;
create policy "anyone can insert"
  on public.consultations
  for insert
  to anon, authenticated
  with check (true);

--   (b) 로그인한 관리자만 "조회/수정" 가능 — 어드민
drop policy if exists "auth can select" on public.consultations;
create policy "auth can select"
  on public.consultations
  for select
  to authenticated
  using (true);

drop policy if exists "auth can update" on public.consultations;
create policy "auth can update"
  on public.consultations
  for update
  to authenticated
  using (true)
  with check (true);

-- ============================================================
--  관리자 계정 만들기
--  → 대시보드 Authentication → Users → "Add user" 로
--    원장님 이메일/비밀번호 직접 생성하면 /admin 로그인 가능.
--    (회원가입 기능을 안 열었으므로 외부인은 가입 불가)
-- ============================================================
