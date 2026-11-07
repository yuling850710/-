import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Utensils, MessageSquareText } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../data/products';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f5ede2] via-[#faf9f5] to-[#faf9f5] pt-8 pb-16 sm:py-20 border-b border-[#e7dfd3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Story & Offer */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#854d0e] tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#b45309]" />
              <span>天賜藥局 2026 冬令進補限時預購</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#351a06] font-serif-tc leading-tight text-balance">
              冬天來了，最懂你的暖心補冬包上架啦！
            </h1>

            <p className="text-base sm:text-lg text-[#5c4636] leading-relaxed">
              今年我們替大家把每一包藥膳都調整到最剛好的風味與配方，冷冷的天氣裡，不管是忙碌的上班日還是週末想補一補，只要簡單就能讓家裡飄出幸福的香味。
            </p>

            {/* Notification Callout */}
            <div className="p-4 rounded-xl bg-[#fffbeb] border border-[#fef08a] text-sm text-[#78350f] space-y-1">
              <div className="flex items-center gap-2 font-semibold">
                <MessageSquareText className="w-4 h-4 text-[#b45309] shrink-0" />
                <span>預購到貨說明・簡訊安心取貨</span>
              </div>
              <p className="text-xs sm:text-sm text-[#854d0e] pl-6 leading-normal">
                預購約 <strong>5-7 日後到貨</strong>，會以簡訊通知取貨，填單時請務必再次確認手機號碼正確。
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href="#combos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#92400e] hover:bg-[#78350f] rounded-lg shadow-sm transition-all transform active:scale-[0.98]"
              >
                <span>搶先挑選優惠組合</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#order-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#78350f] bg-[#fef3c7] hover:bg-[#fde68a] border border-[#f59e0b]/40 rounded-lg transition-colors"
              >
                <span>直接回填 Google 表單</span>
              </a>
            </div>

            {/* Key Advantages (Zero-Pill Discipline: clean unboxed typographic list) */}
            <div className="pt-4 border-t border-[#e7dfd3]/80">
              <h2 className="text-xs font-semibold text-[#854d0e] tracking-wider uppercase mb-3">
                為什麼大家都選天賜藥局的藥膳包？
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#4a3525]">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#92400e] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#351a06]">精選藥材、專業配比</strong>
                    <br />
                    每一包都是用得安心、喝得放心
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#92400e] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#351a06]">真材實料看得見</strong>
                    <br />
                    藥材清晰無添加，品質透明嚴選
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Utensils className="w-4 h-4 text-[#92400e] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#351a06]">料理超簡單</strong>
                    <br />
                    加水燉煮，雞肉排骨菇類玉米百搭
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#92400e] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#351a06]">全家人溫暖補氣湯</strong>
                    <br />
                    一鍋滿載甘醇，暖身禦寒顧好底子
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#d6c7b2] shadow-xl bg-[#29170a]">
              <img
                src="/src/assets/images/hero_herbal_soup_1794037467401.jpg"
                alt="天賜藥局冬令進補藥膳燉湯"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs text-amber-300 font-medium tracking-wide">
                  天賜藥局 漢方溫補本草
                </p>
                <p className="text-base font-serif-tc font-bold text-white mt-0.5">
                  滋補養生・冬令進補湯，熱騰騰香氣撲鼻
                </p>
                <div className="flex items-center gap-3 text-xs text-stone-200 mt-2">
                  <span>藥師親自把關</span>
                  <span>·</span>
                  <span>常溫真空保鮮</span>
                  <span>·</span>
                  <span>附完整燉煮秘訣</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
