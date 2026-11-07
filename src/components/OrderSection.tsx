import React, { useState } from 'react';
import {
  GOOGLE_FORM_URL,
  GOOGLE_FORM_EMBED_URL,
  PHARMACY_LINE_ID,
  PHARMACY_LINE_URL,
  PHARMACY_PHONE
} from '../data/products';
import {
  FileText,
  ExternalLink,
  MessageCircle,
  Phone,
  AlertCircle,
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const OrderSection: React.FC = () => {
  const [iframeKey, setIframeKey] = useState(0);

  return (
    <section id="order-form" className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#faf9f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#854d0e] tracking-wider uppercase">
            <FileText className="w-4 h-4 text-[#b45309]" />
            <span>天賜藥局・官方預購表單</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#351a06] font-serif-tc">
            冬令進補藥膳包 線上預購回填
          </h2>
          <p className="text-sm sm:text-base text-[#6b5341] leading-relaxed">
            請直接在下方完成 Google 表單回填，或點擊按鈕開啟獨立視窗填寫。送出後藥局小幫手將為您登記備貨！
          </p>
        </div>

        {/* SMS & Arrival Reminder Alert */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#fffbeb] border border-[#fef08a] shadow-xs flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#78350f] space-y-1.5">
            <div className="font-bold text-[#451a03] flex items-center gap-2">
              <span>重要提醒：到貨將以「簡訊」通知取貨！</span>
            </div>
            <p className="text-[#854d0e] leading-relaxed">
              藥膳包皆為精選藥材新鮮真空配製，預購約需 <strong>5-7 日後到貨</strong>。請在填寫 Google 表單時，務必<strong>再次確認手機號碼</strong>正確無誤，門市將於到貨第一時間發送簡訊通知。
            </p>
          </div>
        </div>

        {/* Embedded Google Form Container */}
        <div className="bg-white rounded-2xl border border-[#e5dcce] shadow-sm overflow-hidden">
          {/* Top Toolbar */}
          <div className="p-4 bg-[#f5ede2] border-b border-[#e5dcce] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#78350f]">
              <FileText className="w-4 h-4 text-[#b45309] shrink-0" />
              <span className="font-semibold">
                Google 預購表單（頁面內直接填寫）
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIframeKey((k) => k + 1)}
                className="px-2.5 py-1.5 rounded-md bg-white border border-[#d6c7b2] text-[#715949] hover:text-[#451a03] inline-flex items-center gap-1 cursor-pointer transition-colors"
                title="重新整理表單"
              >
                <RotateCcw className="w-3 h-3" />
                <span>重新整理</span>
              </button>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-md bg-[#92400e] text-white font-medium hover:bg-[#78350f] inline-flex items-center gap-1.5 transition-colors shadow-xs"
              >
                <span>在新分頁開啟全螢幕表單</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Google Form Iframe */}
          <div className="relative w-full min-h-[920px] bg-[#fbf9f6]">
            <iframe
              key={iframeKey}
              src={GOOGLE_FORM_EMBED_URL}
              title="天賜藥局冬令進補藥膳包預購表單"
              className="w-full h-[980px] border-0"
              loading="lazy"
            >
              載入 Google 表單中...
            </iframe>
          </div>

          {/* Bottom Guidance */}
          <div className="p-4 bg-[#faf9f5] border-t border-[#e5dcce] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#715949]">
            <span>
              填表完成後請記得點擊表單最下方的「提交」按鈕。
            </span>
            <div className="flex items-center gap-3 font-semibold text-[#854d0e]">
              <a
                href={`tel:${PHARMACY_PHONE.replace(/[^0-9]/g, '')}`}
                className="hover:underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3" />
                <span>電話：{PHARMACY_PHONE}</span>
              </a>
              <span>·</span>
              <a
                href={PHARMACY_LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1 text-[#059669]"
              >
                <MessageCircle className="w-3 h-3" />
                <span>LINE：{PHARMACY_LINE_ID}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
