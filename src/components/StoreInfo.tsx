import React from 'react';
import {
  PHARMACY_PHONE,
  PHARMACY_LINE_ID,
  PHARMACY_LINE_URL,
  GOOGLE_FORM_URL
} from '../data/products';
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  HelpCircle,
  ShieldCheck,
  ExternalLink,
  CalendarCheck,
  Store
} from 'lucide-react';

export const StoreInfo: React.FC = () => {
  return (
    <section id="store-info" className="py-16 sm:py-20 bg-white border-t border-[#e7dfd3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#854d0e] tracking-wider uppercase">
            <Store className="w-4 h-4 text-[#b45309]" />
            <span>在地信賴・專業把關</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#351a06] font-serif-tc">
            天賜藥局門市資訊與顧客服務
          </h2>
          <p className="text-sm sm:text-base text-[#6b5341] leading-relaxed">
            如果有任何藥膳配方、食材搭配或預購進度問題，歡迎隨時致電或加入官方 LINE 詢問小幫手！
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact & Store Details */}
          <div className="lg:col-span-5 bg-[#faf9f5] p-6 sm:p-8 rounded-2xl border border-[#e5dcce] space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#351a06] font-serif-tc">
                天賜藥局 聯絡小幫手
              </h3>
              <p className="text-xs text-[#715949] mt-1">
                親切藥師團隊為您解答冬令進補各項疑難雜症
              </p>
            </div>

            <div className="space-y-4 text-sm text-[#4a3525]">
              {/* Phone */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#eee4d6]">
                <Phone className="w-5 h-5 text-[#92400e] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-xs text-stone-500">服務專線</div>
                  <a
                    href={`tel:${PHARMACY_PHONE.replace(/[^0-9]/g, '')}`}
                    className="text-lg font-bold text-[#92400e] hover:underline"
                  >
                    {PHARMACY_PHONE}
                  </a>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    歡迎來電直接由藥師為您諮詢訂購
                  </p>
                </div>
              </div>

              {/* LINE */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#eee4d6]">
                <MessageCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-xs text-stone-500">LINE 官方帳號</div>
                  <div className="text-base font-bold text-[#065f46]">
                    {PHARMACY_LINE_ID}
                  </div>
                  <a
                    href={PHARMACY_LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#059669] hover:underline font-semibold mt-1"
                  >
                    <span>點擊加入 LINE 官方好友詢問</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Arrival Cycle */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#eee4d6]">
                <CalendarCheck className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-xs text-stone-500">預購到貨時程</div>
                  <div className="text-sm font-bold text-[#351a06]">
                    下單後約 5-7 日到貨
                  </div>
                  <p className="text-xs text-[#854d0e] mt-0.5 leading-relaxed">
                    到貨後將第一時間以「簡訊」通知取貨，請留意您的手機訊息！
                  </p>
                </div>
              </div>
            </div>

            {/* Quick button */}
            <div className="pt-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-[#854d0e] bg-[#fef3c7] hover:bg-[#fde68a] border border-[#f59e0b]/40 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>前往天賜藥局 Google 表單直接預購</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right: FAQ */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-[#351a06] font-serif-tc flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-[#b45309]" />
              <span>常見問題與藥師貼心提醒 (FAQ)</span>
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e5dcce]">
                <h4 className="font-bold text-[#351a06] mb-1">
                  Q1. 藥膳包如何保存？可以放多久？
                </h4>
                <p className="text-[#654e3d] leading-relaxed">
                  A：我們的藥膳包皆採乾燥密封包裝，未開封放置陰涼乾燥處可常溫保存約 1-2 個月；若預計存放較長時間，建議置於冷藏保存可達 6 個月，維持藥材最佳香氣與色澤。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e5dcce]">
                <h4 className="font-bold text-[#351a06] mb-1">
                  Q2. 藥膳包有添加防腐劑或人工香料嗎？
                </h4>
                <p className="text-[#654e3d] leading-relaxed">
                  A：絕無添加任何人工香精、防腐劑或甜味劑！天賜藥局每一包藥膳皆為真材實料的中藥乾料，藥材清晰可見、無硫磺燻蒸，給家人吃最安心。
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e5dcce]">
                <h4 className="font-bold text-[#351a06] mb-1">
                  Q3. 孕婦、哺乳期或特殊體質者可以喝嗎？
                </h4>
                <p className="text-[#654e3d] leading-relaxed">
                  A：「四神湯」成分溫和健脾，老少咸宜；「西洋蔘黃金蟲草」與「藥燉排骨」含當歸、西洋蔘等滋補藥材，若處於懷孕期間、感冒發燒或特殊體質，建議先致電 (02)2985-6852 或透過 LINE 諮詢天賜藥局藥師為您把關！
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf9f5] border border-[#e5dcce]">
                <h4 className="font-bold text-[#351a06] mb-1">
                  Q4. 可以吃素食嗎？茹素朋友怎麼煮？
                </h4>
                <p className="text-[#654e3d] leading-relaxed">
                  A：全系列藥膳包本身皆為純天然植物性中藥材（無葷食調味包）。茹素朋友可以加入猴頭菇、杏鮑菇、豆皮、山藥、栗子或玉米一起慢燉，湯頭鮮甜濃郁，素食者也能暖暖進補！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
