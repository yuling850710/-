import React, { useState } from 'react';
import { ComboDeal } from '../types';
import { SINGLE_BUNDLES, COMBO_SETS, GOOGLE_FORM_URL } from '../data/products';
import { Tag, FileText, ArrowRight, ExternalLink } from 'lucide-react';

export const CombosSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'combos' | 'single_bundles'>('all');

  return (
    <section id="combos" className="py-16 sm:py-20 bg-white border-y border-[#e7dfd3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#854d0e] tracking-wider uppercase">
            <Tag className="w-4 h-4 text-[#b45309]" />
            <span>2026 冬令特惠方案・現折現省</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#351a06] font-serif-tc">
            多款超值組合優惠・常備或送禮最有心
          </h2>
          <p className="text-sm sm:text-base text-[#6b5341] leading-relaxed">
            單品同款量販享多件折抵，雙拼與三全大滿貫組合現省高達 $71 元。選好心儀方案，直接前往 Google 表單勾選回填！
          </p>

          {/* Tab Filter */}
          <div className="inline-flex items-center p-1 bg-[#f5ede2] rounded-xl border border-[#e5dcce] mt-4">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-[#451a03] shadow-xs'
                  : 'text-[#715949] hover:text-[#451a03]'
              }`}
            >
              全部優惠方案 ({SINGLE_BUNDLES.length + COMBO_SETS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('combos')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'combos'
                  ? 'bg-white text-[#451a03] shadow-xs'
                  : 'text-[#715949] hover:text-[#451a03]'
              }`}
            >
              人氣混搭組 ({COMBO_SETS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('single_bundles')}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'single_bundles'
                  ? 'bg-white text-[#451a03] shadow-xs'
                  : 'text-[#715949] hover:text-[#451a03]'
              }`}
            >
              單品優惠區 ({SINGLE_BUNDLES.length})
            </button>
          </div>
        </div>

        {/* Combos Sets Showcase */}
        {(activeTab === 'all' || activeTab === 'combos') && (
          <div className="mb-14">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#351a06] font-serif-tc flex items-center gap-2">
                  <span>💝 人氣組合優惠價</span>
                  <span className="text-xs font-normal text-[#854d0e] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#f59e0b]/30">
                    最受歡迎混搭
                  </span>
                </h3>
                <p className="text-xs text-[#715949] mt-0.5">
                  精算日常所需，經典雙響與孝親大補湯，自己喝或送家人都體面
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COMBO_SETS.map((deal) => (
                <ComboCard
                  key={deal.id}
                  deal={deal}
                  featured={deal.id === 'combo_flagship'}
                />
              ))}
            </div>
          </div>
        )}

        {/* Single Bundles Showcase */}
        {(activeTab === 'all' || activeTab === 'single_bundles') && (
          <div>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold text-[#351a06] font-serif-tc flex items-center gap-2">
                  <span>💝 單品組合優惠區</span>
                  <span className="text-xs font-normal text-[#854d0e] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#f59e0b]/30">
                    同款量販常備
                  </span>
                </h3>
                <p className="text-xs text-[#715949] mt-0.5">
                  專寵特定風味！4包/3包大份量優惠，熱湯隨時上桌不怕斷貨
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SINGLE_BUNDLES.map((deal) => (
                <ComboCard key={deal.id} deal={deal} />
              ))}
            </div>
          </div>
        )}

        {/* Order CTA button */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#order-form"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white bg-[#92400e] hover:bg-[#78350f] rounded-xl shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <FileText className="w-4 h-4" />
            <span>前往下方填寫 Google 表單預購</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 text-sm font-semibold text-[#854d0e] bg-[#fef3c7] hover:bg-[#fde68a] border border-[#f59e0b]/30 rounded-xl transition-colors"
          >
            <span>在新視窗開啟 Google 表單</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface ComboCardProps {
  deal: ComboDeal;
  featured?: boolean;
}

const ComboCard: React.FC<ComboCardProps> = ({ deal, featured }) => {
  return (
    <div
      className={`relative flex flex-col justify-between p-5 rounded-2xl border transition-all ${
        featured
          ? 'bg-gradient-to-b from-[#fffbeb] to-white border-[#f59e0b] shadow-md ring-1 ring-[#f59e0b]/30'
          : 'bg-[#faf9f5] border-[#e7dfd3] hover:border-[#cfbeaa] hover:shadow-sm'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#b45309] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
          ★ 人氣旗艦推薦
        </div>
      )}

      <div className="space-y-3">
        {/* Deal Title & Tag */}
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-lg font-bold text-[#351a06] font-serif-tc">
            {deal.name}
          </h4>
          {deal.tag && (
            <span className="text-[11px] font-semibold text-[#854d0e] bg-[#fef3c7] px-2 py-0.5 rounded border border-[#fde68a]">
              {deal.tag}
            </span>
          )}
        </div>

        {/* Content list */}
        <div className="p-2.5 rounded-lg bg-white/80 border border-[#eee4d6] text-xs font-medium text-[#78350f] leading-snug">
          {deal.itemsText}
        </div>

        <p className="text-xs text-[#665040] leading-relaxed">
          {deal.description}
        </p>

        {/* Price display */}
        <div className="pt-2 flex items-baseline justify-between">
          <div>
            <span className="text-xs text-stone-600 line-through mr-2">
              原價 ${deal.originalPrice}
            </span>
            <span className="text-xl font-bold text-[#92400e] font-serif-tc tabular-nums">
              ${deal.discountPrice}
            </span>
          </div>
          <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-300 px-2 py-0.5 rounded">
            現省 ${deal.saveAmount}
          </span>
        </div>
      </div>

      {/* Direct Pre-Order Link */}
      <div className="pt-4 mt-4 border-t border-[#eee4d6]">
        <a
          href="#order-form"
          className={`w-full py-2.5 px-3 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
            featured
              ? 'bg-[#92400e] text-white hover:bg-[#78350f]'
              : 'bg-white text-[#78350f] border border-[#d6c7b2] hover:bg-[#f7f2ea]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>前往表單預購此組合</span>
        </a>
      </div>
    </div>
  );
};
