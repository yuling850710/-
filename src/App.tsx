import React from 'react';
import { PRODUCTS } from './data/products';
import { NoticeBanner } from './components/NoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { CombosSection } from './components/CombosSection';
import { CookingGuide } from './components/CookingGuide';
import { OrderSection } from './components/OrderSection';
import { StoreInfo } from './components/StoreInfo';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f5] text-[#27272a]">
      {/* Pinned Top Notice Banner with 5-7 days arrival & SMS alert */}
      <NoticeBanner />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 3 Core Tonic Soup Kits */}
        <ProductsSection products={PRODUCTS} />

        {/* Special Bundles & Combos */}
        <CombosSection />

        {/* Cooking Guide with Facebook Video */}
        <CookingGuide />

        {/* Embedded Google Form Pre-order Section */}
        <OrderSection />

        {/* Pharmacy Store, Contacts & FAQ */}
        <StoreInfo />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
