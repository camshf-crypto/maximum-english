import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string

export const supabase = createClient(url, anon)

export type ConsultationStatus = 'new' | 'contacted' | 'enrolled' | 'closed'

export interface Consultation {
  id?: string
  student_name: string
  parent_phone: string
  grade: string
  program: string | null
  message: string | null
  status?: ConsultationStatus
  created_at?: string
}

/** 상담 신청 저장 (anon insert) */
export async function submitConsultation(
  data: Omit<Consultation, 'id' | 'status' | 'created_at'>
) {
  const { error } = await supabase.from('consultations').insert([{ ...data, status: 'new' }])
  if (error) throw error
}

/** 어드민: 상담 목록 조회 */
export async function listConsultations() {
  const { data, error } = await supabase
    .from('consultations')
    .select('*')
    .order('created_at', { ascending: false })
  if (error) throw error
  return data as Consultation[]
}

/** 어드민: 상태 변경 */
export async function updateConsultationStatus(id: string, status: ConsultationStatus) {
  const { error } = await supabase.from('consultations').update({ status }).eq('id', id)
  if (error) throw error
}
