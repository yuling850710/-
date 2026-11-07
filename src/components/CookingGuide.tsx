import React from 'react';
import { COOKING_STEPS, COOKING_VIDEO_URL } from '../data/products';
import { PlayCircle, ChefHat, ExternalLink, Flame, Sparkles } from 'lucide-react';

export const CookingGuide: React.FC = () => {
  return (
    <section id="cooking" className="py-16 sm:py-20 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#854d0e] tracking-wider uppercase">
            <ChefHat className="w-4 h-4 text-[#b45309]" />
            <span>美味秘訣・廚藝新手零失敗</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#351a06] font-serif-tc">
            藥膳包怎麼煮？4 步驟香氣飄滿屋
          </h2>
          <p className="text-sm sm:text-base text-[#6b5341] leading-relaxed">
            不用複雜廚藝！精選藥材已調配好黃金比例，只需加水燉煮，自由搭配喜愛的雞肉、排骨、新鮮菇類或甜玉米，隨時享受星級補湯。
          </p>
        </div>

        {/* Video Card Banner */}
        <div className="relative mb-14 rounded-2xl overflow-hidden border border-[#d6c7b2] bg-[#29170a] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image side */}
            <div className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto lg:h-[360px] overflow-hidden">
              <img
                src="/src/assets/images/cooking_guide_claypot_1794037468586.jpg"
                alt="天賜藥膳包家庭料理烹煮示範"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <a
                  href={COOKING_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-2 text-white hover:scale-105 transition-transform"
                >
                  <PlayCircle className="w-16 h-16 text-amber-400 group-hover:text-amber-300 drop-shadow-md" />
                  <span className="text-xs font-semibold tracking-wider uppercase bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">
                    點擊觀看 Facebook 官方示範短片
                  </span>
                </a>
              </div>
            </div>

            {/* Video Callout Text */}
            <div className="lg:col-span-5 p-6 sm:p-8 text-white space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300">
                <Flame className="w-4 h-4" />
                <span>🙋‍♀️ 藥膳包怎麼煮，來看這邊！</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-tc text-white leading-snug">
                天賜藥局・藥師私房燉煮技巧大公開
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                特別錄製的實境燉湯短片，教你如何掌握火候、汆燙去腥、以及何時加米酒讓香氣昇華至極致。
              </p>
              <div className="pt-2">
                <a
                  href={COOKING_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#451a03] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-sm"
                >
                  <span>立即開啟 FB 觀看燉煮短片</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COOKING_STEPS.map((item) => (
            <div
              key={item.step}
              className="bg-white p-6 rounded-2xl border border-[#e5dcce] shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-3xl font-black text-[#d6c7b2] font-serif-tc tabular-nums block">
                  {item.step}
                </span>
                <h4 className="text-base font-bold text-[#351a06] font-serif-tc">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#665040] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#f2ece2] text-[11px] text-[#854d0e] font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>小撇步：瓦斯爐小火或電鍋外鍋2杯水皆宜</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
