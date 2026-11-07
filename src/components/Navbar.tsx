import React, { useState } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/products';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f5]/95 backdrop-blur-md border-b border-[#e7dfd3]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#451a03] font-serif-tc whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          天賜藥局
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#715949]">
          <a href="#products" className="hover:text-[#451a03] transition-colors whitespace-nowrap shrink-0">
            精選品項
          </a>
          <a href="#combos" className="hover:text-[#451a03] transition-colors whitespace-nowrap shrink-0">
            優惠組合
          </a>
          <a href="#cooking" className="hover:text-[#451a03] transition-colors whitespace-nowrap shrink-0">
            燉煮教學
          </a>
          <a href="#order-form" className="hover:text-[#451a03] transition-colors whitespace-nowrap shrink-0">
            Google 表單預購
          </a>
          <a href="#store-info" className="hover:text-[#451a03] transition-colors whitespace-nowrap shrink-0">
            取貨與門市
          </a>
        </nav>

        {/* Zone 3: 1 primary action (Directly opens or scrolls to Google Form) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#order-form"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#92400e] hover:bg-[#78350f] rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>立即填寫預購表單</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#715949] hover:text-[#451a03] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e7dfd3] bg-[#faf9f5] px-4 py-3 space-y-2 text-sm font-medium text-[#715949]">
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-[#f2ece2] hover:text-[#451a03]"
          >
            精選品項
          </a>
          <a
            href="#combos"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-[#f2ece2] hover:text-[#451a03]"
          >
            優惠組合
          </a>
          <a
            href="#cooking"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-[#f2ece2] hover:text-[#451a03]"
          >
            燉煮教學（附影片）
          </a>
          <a
            href="#order-form"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-[#f2ece2] hover:text-[#451a03]"
          >
            Google 表單預購回填
          </a>
          <a
            href="#store-info"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 px-3 rounded-md hover:bg-[#f2ece2] hover:text-[#451a03]"
          >
            取貨與門市資訊
          </a>
          <div className="pt-2 border-t border-[#e7dfd3]">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 w-full text-center py-2.5 text-xs font-semibold text-white bg-[#92400e] hover:bg-[#78350f] rounded-lg shadow-xs"
            >
              <span>在新視窗開啟 Google 表單</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
