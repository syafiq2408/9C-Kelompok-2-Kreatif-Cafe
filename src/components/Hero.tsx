import React from 'react';
import { ArrowRight, MapPin, Sparkles, Clock, ShieldCheck, HeartHandshake } from 'lucide-react';
import heroInteriorImg from '../assets/images/cafe_hero_interior_1794205419796.jpg';

interface HeroProps {
  onExploreMenu: () => void;
  onExploreLocation: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenu,
  onExploreLocation,
  onOpenReservation
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context meta without pill boxes */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-[#A85A32] uppercase">
              <span>Entrepreneurship Lab</span>
              <span aria-hidden="true" className="text-[#D6CEBF]">·</span>
              <span>Student Study Sanctuary</span>
              <span aria-hidden="true" className="text-[#D6CEBF]">·</span>
              <span>SMPIT Citra Az-Zahra Private School</span>
            </div>

            {/* Main Title with balanced typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#201A16] font-['Outfit'] leading-[1.12] text-balance">
              Where Ideas Meet Coffee, Creativity, &amp; Fellowship.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl font-normal">
              Welcome to <strong className="font-semibold text-[#201A16]">House of Laraga</strong>—a creative sanctuary, reading haven, and practical youth entrepreneurship laboratory at the <span className="font-medium text-[#201A16]">SMPIT Citra Az-Zahra</span> private school campus. Savor ethically sourced Indonesian specialty coffee, artisan drinks, and wholesome halal food in a serene minimalist atmosphere.
            </p>

            {/* Key Unboxed Trust Points */}
            <div className="pt-2 pb-2 grid grid-cols-2 sm:grid-cols-3 gap-y-3 gap-x-4 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#4E6B56] shrink-0" />
                <span className="font-medium text-[#201A16]">100% Halal &amp; Wholesome</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A85A32] shrink-0" />
                <span className="font-medium text-[#201A16]">15% Student &amp; Staff Discount</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#8C5E3C] shrink-0" />
                <span className="font-medium text-[#201A16]">Student Barista Practice</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreMenu}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FBF9F5] bg-[#201A16] hover:bg-[#342A24] rounded-md transition-all shadow-sm group"
              >
                <span>Explore Menu &amp; Prices</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreLocation}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-[#201A16] bg-transparent hover:bg-[#F3EFE6] border border-[#D6CEBF] rounded-md transition-all"
              >
                <MapPin className="w-4 h-4 text-[#A85A32]" />
                <span>Campus Directions</span>
              </button>

              <button
                onClick={onOpenReservation}
                className="text-xs text-[#78716C] hover:text-[#201A16] underline underline-offset-4 font-medium transition-colors"
              >
                Need to reserve a table or discussion room?
              </button>
            </div>

            {/* Operational note */}
            <div className="pt-4 border-t border-[#E8E0D2] flex flex-wrap items-center justify-between text-xs text-[#78716C] gap-3">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#A85A32]" />
                Operating Hours: <span className="font-semibold text-[#201A16]">Mon – Fri (10:00 AM – 10:00 PM)</span>
              </span>
              <span>Excl. Public Holidays · Open for Students, Faculty &amp; Guests</span>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E8E0D2] bg-[#F5EFE6]">
              <img
                src={heroInteriorImg}
                alt="Minimalist warm interior of House of Laraga at SMPIT Citra Az-Zahra"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[460px] lg:h-[500px] object-cover hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Minimal scrim gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#201A16]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Info Strip */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-[#E7D7C1] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>SMPIT Citra Az-Zahra Campus</span>
                </div>
                <h3 className="text-xl font-bold font-['Outfit'] text-white">
                  A Quiet Corner to Read, Converse, &amp; Discover Ideas
                </h3>
                <p className="text-xs text-[#E7D7C1]/90 leading-relaxed">
                  Creativity Building 1st Fl · Next to Central Library &amp; Campus Mosque
                </p>
              </div>
            </div>

            {/* Floating Quick Fact Card */}
            <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white/95 backdrop-blur-md border border-[#E8E0D2] rounded-lg p-3.5 shadow-md flex items-center gap-3 max-w-[270px]">
              <div className="w-9 h-9 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#A85A32] shrink-0 font-bold text-xs">
                ☕
              </div>
              <div>
                <p className="text-xs font-semibold text-[#201A16]">Palm Sugar Iced Coffee</p>
                <p className="text-[11px] text-[#78716C]">From IDR 18,000 (IDR 15,300 Students)</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
