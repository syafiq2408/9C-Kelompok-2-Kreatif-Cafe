/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { LocationSection } from './components/LocationSection';
import { FaqTestimonialsSection } from './components/FaqTestimonialsSection';
import { Footer } from './components/Footer';
import { OrderCartDrawer, CartItem } from './components/OrderCartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { MenuItem, CAFE_INFO } from './data/cafeData';
import { Sparkles, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved =
        localStorage.getItem('house_of_laraga_cart') ||
        localStorage.getItem('creative_cafe_cart') ||
        localStorage.getItem('kreatif_cafe_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [showTopNotice, setShowTopNotice] = useState(true);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('house_of_laraga_cart', JSON.stringify(cartItems));
    } catch {
      // ignore
    }
  }, [cartItems]);

  // Derived totals
  const totalCartItems = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartItems]);

  const totalCartPrice = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  }, [cartItems]);

  const cartItemCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    cartItems.forEach((ci) => {
      counts[ci.item.id] = ci.quantity;
    });
    return counts;
  }, [cartItems]);

  // Handlers
  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQty } : ci))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleOpenReservation = () => {
    setIsReservationOpen(true);
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLocation = () => {
    const el = document.getElementById('lokasi');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917] selection:bg-[#E7D7C1] selection:text-[#2E2015]">
      
      {/* Top Banner (Quiet Notice) */}
      {showTopNotice && (
        <div className="bg-[#201A16] text-[#E7D7C1] text-xs px-4 py-2 border-b border-[#342A24] transition-all">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 truncate">
              <Sparkles className="w-3.5 h-3.5 text-[#A85A32] shrink-0" />
              <span className="truncate">
                House of Laraga at SMPIT Citra Az-Zahra · Enjoy a {CAFE_INFO.studentDiscountPct}% discount for students, teachers &amp; staff
              </span>
            </div>
            <button
              onClick={() => setShowTopNotice(false)}
              className="text-[#A8A29E] hover:text-white shrink-0 p-0.5"
              aria-label="Close notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        totalCartItems={totalCartItems}
        totalCartPrice={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => handleOpenReservation()}
      />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onExploreMenu={scrollToMenu}
          onExploreLocation={scrollToLocation}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* About & Philosophy */}
        <AboutSection />

        {/* Menu & Pricing */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemCounts={cartItemCounts}
        />

        {/* Amenities & Reading Nook */}
        <FacilitiesSection onOpenReservation={() => handleOpenReservation()} />

        {/* Location & Campus Access */}
        <LocationSection />

        {/* Community Reviews & FAQ */}
        <FaqTestimonialsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart & Bill Calculator Drawer */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Sticky Quick-Order Float Button on Mobile if cart has items */}
      {totalCartItems > 0 && !isCartOpen && (
        <div className="fixed bottom-4 right-4 z-30 lg:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 px-4 py-3 bg-[#201A16] text-[#FBF9F5] rounded-full shadow-lg border border-[#E8E0D2] font-semibold text-xs animate-in zoom-in-90"
          >
            <span>Bag ({totalCartItems})</span>
            <span className="font-mono text-[#E7D7C1]">
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                maximumFractionDigits: 0
              }).format(totalCartPrice)}
            </span>
          </button>
        </div>
      )}

    </div>
  );
}
