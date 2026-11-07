import React from 'react';
import { Product } from '../types';
import { FileText, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="flex flex-col bg-white rounded-2xl border border-[#e5dcce] shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-[#f5ede2] overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 bg-[#451a03]/85 text-[#fef3c7] text-xs font-semibold px-2.5 py-1 rounded backdrop-blur-sm">
          {product.highlight}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 text-[#451a03] text-xs font-bold px-2.5 py-1 rounded shadow-xs">
          NT$ {product.price} / 單包
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="text-xs font-medium text-[#b45309] tracking-wide">
            {product.subtitle}
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#351a06] font-serif-tc leading-snug">
            {product.name}
          </h3>
          <p className="text-sm text-[#654e3d] leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Benefits & Ingredients */}
        <div className="space-y-2.5 pt-2 border-t border-[#f0e7db] text-xs text-[#523d2e]">
          <div>
            <span className="font-semibold text-[#854d0e]">特點功效：</span>
            <span className="ml-1 text-[#451a03]">
              {product.benefits.join(' · ')}
            </span>
          </div>

          <div>
            <span className="font-semibold text-[#854d0e]">嚴選藥材：</span>
            <span className="ml-1 text-[#665040]">
              {product.ingredients.join('、')}
            </span>
          </div>

          <div>
            <span className="font-semibold text-[#854d0e]">推薦搭配：</span>
            <span className="ml-1 text-[#665040]">
              {product.recommendedPairings.join('、')}
            </span>
          </div>
        </div>

        {/* Bottom Actions: Clear Price and Direct Pre-Order Link */}
        <div className="pt-3 border-t border-[#f0e7db] flex items-center justify-between gap-3">
          <div>
            <span className="text-xs text-stone-500 block">單包價格</span>
            <span className="text-lg font-bold text-[#92400e] font-serif-tc tabular-nums">
              NT$ {product.price}
            </span>
          </div>

          <a
            href="#order-form"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#78350f] bg-[#fef3c7] hover:bg-[#fde68a] border border-[#f59e0b]/30 rounded-lg transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#b45309]" />
            <span>填表預購</span>
          </a>
        </div>
      </div>
    </article>
  );
};
