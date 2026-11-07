import React from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Soup } from 'lucide-react';

interface ProductsSectionProps {
  products: Product[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section id="products" className="py-16 sm:py-20 bg-[#faf9f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#854d0e] tracking-wider uppercase">
            <Soup className="w-4 h-4 text-[#b45309]" />
            <span>今年品項・嚴選三大本草名湯</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#351a06] font-serif-tc">
            每一鍋都是為全家人精心調配的暖心好湯
          </h2>
          <p className="text-sm sm:text-base text-[#6b5341] leading-relaxed">
            天賜藥局老藥師專業配方，去除中藥厚重苦澀，保留溫潤芳香與甘醇精華，燉煮肉類、排骨、菇類皆能自然成鮮。
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner to Combos */}
        <div className="mt-12 p-5 rounded-2xl bg-[#f5ede2] border border-[#e5dcce] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-sm font-bold text-[#451a03] font-serif-tc">
              💡 買多更划算！推薦選購「單品組合」或「多款混搭優惠組」
            </div>
            <p className="text-xs text-[#715949]">
              單品4包/3包組合現折優惠，日常補氣、全家顧胃與孝親組最高現省 $71 元！
            </p>
          </div>
          <a
            href="#combos"
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#92400e] hover:bg-[#78350f] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            查看所有優惠方案
          </a>
        </div>
      </div>
    </section>
  );
};
