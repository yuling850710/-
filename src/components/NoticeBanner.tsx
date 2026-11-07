import React from 'react';
import { Sparkles, Phone, MessageCircle } from 'lucide-react';
import { PHARMACY_PHONE, PHARMACY_LINE_ID, PHARMACY_LINE_URL } from '../data/products';

export const NoticeBanner: React.FC = () => {
  return (
    <div className="bg-[#422006] text-[#fef3c7] text-xs sm:text-sm py-2.5 px-4 border-b border-[#78350f]/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 font-medium">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            冬令進補，暖心暖胃！預購約 <strong className="text-amber-300 font-bold">5-7 日後到貨</strong>，將以簡訊通知取貨，請務必確認手機號碼。
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs shrink-0 text-amber-200/90">
          <a
            href={`tel:${PHARMACY_PHONE.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-300" />
            <span>{PHARMACY_PHONE}</span>
          </a>
          <span className="text-amber-400/40">|</span>
          <a
            href={PHARMACY_LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>LINE: {PHARMACY_LINE_ID}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
