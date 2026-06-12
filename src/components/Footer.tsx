import { Link } from 'react-router-dom'
import Crest from './Crest'
import { site } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-cream/70 pt-14 pb-10 border-t border-gold/20">
      <div className="max-w-container mx-auto px-6">
        {/* 상단: 메뉴 링크 */}
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 pb-7 border-b border-gold/15">
          <Link to="/fee" className="text-[15px] font-bold text-cream/85 hover:text-gold-light transition-colors">수강료 안내</Link>
          <Link to="/privacy" className="text-[15px] font-bold text-cream/85 hover:text-gold-light transition-colors">개인정보처리방침</Link>
          <Link to="/terms" className="text-[15px] font-bold text-cream/85 hover:text-gold-light transition-colors">이용약관</Link>
        </div>

        {/* 학원 정보 */}
        <div className="pt-9 pb-8">
          <div className="flex items-center gap-3 mb-5">
            <Crest className="w-9 h-9" />
            <span className="font-bold text-[17px] text-cream tracking-wide">{site.nameKo}</span>
          </div>
          <p className="text-[13px] font-light text-cream/55 leading-relaxed mb-1.5">
            주소 : {site.address}
          </p>
          <p className="text-[13px] font-light text-cream/55 leading-relaxed">
            전화번호 : {site.phone} <span className="mx-2 text-cream/25">ㅣ</span> 상담시간 : {site.hours} <span className="mx-2 text-cream/25">ㅣ</span> 학원등록번호 : {site.regNo}
          </p>
        </div>

        {/* 하단: 카피라이트 + SNS */}
        <div className="border-t border-gold/15 pt-6 flex flex-wrap justify-between items-center gap-4">
          <div className="text-[12px] text-cream/40">
            Copyright © {site.name}. All rights reserved.
          </div>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/maximum_english_academy" target="_blank" rel="noopener noreferrer" className="px-4 h-[34px] border border-gold/30 rounded-full flex items-center justify-center text-gold-light text-[13px] font-bold hover:bg-gold hover:text-green-900 transition-colors">
              인스타그램
            </a>
            <a href="https://blog.naver.com/kingc2017" target="_blank" rel="noopener noreferrer" className="px-4 h-[34px] border border-gold/30 rounded-full flex items-center justify-center text-gold-light text-[13px] font-bold hover:bg-gold hover:text-green-900 transition-colors">
              블로그
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}