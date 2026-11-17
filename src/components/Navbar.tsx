import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Coffee, MapPin, Clock } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  totalCartItems: number;
  totalCartPrice: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  totalCartItems,
  totalCartPrice,
  onOpenCart,
  onOpenReservation
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const navLinks = [
    { label: 'About & Story', href: '#tentang' },
    { label: 'Menu & Prices', href: '#menu' },
    { label: 'Amenities', href: '#fasilitas' },
    { label: 'Location & Access', href: '#lokasi' },
    { label: 'Reviews & FAQ', href: '#faq' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E0D2] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          {/* Zone 1: Brand wordmark */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-10 h-10 rounded-full bg-[#201A16] flex items-center justify-center text-[#FBF9F5] shadow-xs group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 text-[#E7D7C1]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#201A16] block font-['Outfit']">
                {CAFE_INFO.name}
              </span>
              <span className="text-xs text-[#78716C] -mt-0.5 tracking-wider block font-medium">
                {CAFE_INFO.subName}
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#44403C]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#201A16] transition-colors hover:underline underline-offset-8 decoration-1 decoration-[#A85A32] whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Cart */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex items-center px-3.5 py-2 text-xs font-semibold text-[#44403C] hover:text-[#201A16] border border-[#D6CEBF] hover:border-[#201A16] rounded-md transition-all whitespace-nowrap"
            >
              Reserve Table
            </button>

            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-[#FBF9F5] bg-[#201A16] hover:bg-[#342A24] rounded-md transition-all shadow-xs whitespace-nowrap group relative"
              aria-label="Open order bag"
            >
              <ShoppingBag className="w-4 h-4 text-[#E7D7C1] group-hover:rotate-6 transition-transform" />
              <span>Bag</span>
              {totalCartItems > 0 && (
                <span className="bg-[#A85A32] text-white text-[11px] font-bold px-1.5 py-0.2 rounded-full tabular-nums">
                  {totalCartItems}
                </span>
              )}
              {totalCartPrice > 0 && (
                <span className="hidden md:inline-block border-l border-white/20 pl-2 text-[11px] text-[#E7D7C1] tabular-nums font-mono">
                  {formatIDR(totalCartPrice)}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#44403C] hover:text-[#201A16] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E0D2] bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-[#44403C]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-[#F3EFE6] text-[#201A16] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-[#E8E0D2] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 text-xs font-semibold text-center text-[#201A16] border border-[#D6CEBF] rounded-md hover:bg-[#F3EFE6]"
            >
              Reserve a Table / Study Space
            </button>
            <div className="px-3 py-2 text-xs text-[#78716C] flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A85A32]" /> Mon - Fri: 10:00 AM - 10:00 PM
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A85A32]" /> SMPIT Citra Az-Zahra
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
