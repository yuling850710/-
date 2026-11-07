import React from 'react';
import { PHARMACY_PHONE, PHARMACY_LINE_ID, PHARMACY_LINE_URL, GOOGLE_FORM_URL } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#29170a] text-[#d6c7b2] text-xs py-12 border-t border-[#451a03]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#451a03]/80">
          <div>
            <span className="text-xl font-bold font-serif-tc text-white block">
              天賜藥局
            </span>
            <p className="text-xs text-[#a89279] mt-1">
              2026 冬令進補・漢方養生藥膳包線上預購專頁
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[#cfbeaa]">
            <a href="#products" className="hover:text-white transition-colors">
              精選品項
            </a>
            <a href="#combos" className="hover:text-white transition-colors">
              優惠組合
            </a>
            <a href="#cooking" className="hover:text-white transition-colors">
              燉煮教學
            </a>
            <a href="#order-form" className="hover:text-white transition-colors">
              Google 表單回填
            </a>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300"
            >
              官方表單外部連結 ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8f7762] text-[11px]">
          <div>
            諮詢電話：{PHARMACY_PHONE} ｜ LINE：{PHARMACY_LINE_ID}
          </div>
          <div>
            © {new Date().getFullYear()} 天賜藥局 版權所有・藥材經專業嚴選真空密封包裝
          </div>
        </div>
      </div>
    </footer>
  );
};
