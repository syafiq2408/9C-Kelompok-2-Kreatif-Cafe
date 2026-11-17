import React from 'react';
import { Coffee, ArrowUp, MapPin, Phone, Instagram, Mail } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#201A16] text-[#D6CEBF] border-t border-[#342A24] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#342A24]">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#E7D7C1]">
                <Coffee className="w-4 h-4" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight font-['Outfit'] block">
                  {CAFE_INFO.name}
                </span>
                <span className="text-xs text-[#A8A29E] tracking-wider block">
                  {CAFE_INFO.subName}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed max-w-sm">
              A real-world youth entrepreneurship laboratory and student creative sanctuary. Serving ethically sourced Indonesian specialty coffee and wholesome halal dining on the campus of SMPIT Citra Az-Zahra private school.
            </p>

            <div className="text-xs text-[#78716C] pt-1">
              Supported by the Faculty Board &amp; Citra Az-Zahra Foundation
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#tentang" className="hover:text-white transition-colors">
                  About &amp; Philosophy
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Menu &amp; Pricing
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-white transition-colors">
                  Amenities &amp; Reading Nook
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white transition-colors">
                  Location &amp; Campus Access
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact &amp; Information
            </h4>
            
            <div className="space-y-2.5 text-[#A8A29E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A85A32] shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A85A32] shrink-0" />
                <a href="https://wa.me/6281262615222" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  {CAFE_INFO.phone} (WhatsApp Orders)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A85A32] shrink-0" />
                <span>{CAFE_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#A85A32] shrink-0" />
                <span className="font-mono">{CAFE_INFO.instagram}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#78716C]">
              Monday – Friday: 10:00 AM – 10:00 PM (Excl. Public Holidays) · Saturday &amp; Sunday: Closed
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <div>
            © {new Date().getFullYear()} House of Laraga · SMPIT Citra Az-Zahra. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px]">100% Halal &amp; Wholesome</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#D6CEBF] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
