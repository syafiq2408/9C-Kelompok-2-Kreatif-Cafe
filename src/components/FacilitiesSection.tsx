import React from 'react';
import { Wifi, Zap, BookOpen, Users, Trees, Compass } from 'lucide-react';
import { CAFE_FACILITIES } from '../data/cafeData';

interface FacilitiesSectionProps {
  onOpenReservation?: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ onOpenReservation }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wifi':
        return <Wifi className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Trees':
        return <Trees className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <section id="fasilitas" className="py-20 bg-[#F5EFE6]/40 border-y border-[#E8E0D2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
            Comfort &amp; Amenities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#201A16] font-['Outfit']">
            Thoughtfully Designed for Focused Study &amp; Meaningful Conversations
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Every corner of House of Laraga is ergonomically arranged with generous natural daylight and functional amenities to empower student productivity and visitor serenity.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAFE_FACILITIES.map((fac, idx) => (
            <div
              key={fac.id}
              className="bg-white rounded-xl p-6 border border-[#E8E0D2] shadow-2xs hover:shadow-sm transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] text-[#A85A32] flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(fac.iconName)}
                </div>
                <span className="font-mono text-xs text-[#A8A29E] font-medium">0{idx + 1}</span>
              </div>

              <h3 className="text-base font-bold text-[#201A16] font-['Outfit']">
                {fac.title}
              </h3>

              <p className="text-xs text-[#57534E] leading-relaxed">
                {fac.description}
              </p>

              <div className="pt-3 border-t border-[#F5EFE6] text-[11px] text-[#78716C] font-mono">
                {fac.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Atmosphere Quote Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#201A16] text-[#FBF9F5] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold font-['Outfit'] text-white">
              Need Dedicated Space for Committee Meetings or Study Guidance?
            </h4>
            <p className="text-xs sm:text-sm text-[#D6CEBF] max-w-xl">
              A communal table accommodating up to 10 people with whiteboard tools and fast Wi-Fi is available complimentary for the SMPIT Citra Az-Zahra school community.
            </p>
          </div>
          {onOpenReservation ? (
            <button
              onClick={onOpenReservation}
              className="px-5 py-2.5 text-xs font-semibold text-[#201A16] bg-[#E7D7C1] hover:bg-white rounded-md transition-colors whitespace-nowrap cursor-pointer"
            >
              Reserve a Table
            </button>
          ) : (
            <a
              href={`https://wa.me/6281262615222?text=Hello%20House%20of%20Laraga,%20I%20would%20like%20to%20reserve%20a%20table`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-semibold text-[#201A16] bg-[#E7D7C1] hover:bg-white rounded-md transition-colors whitespace-nowrap"
            >
              Reserve via WhatsApp
            </a>
          )}
        </div>

      </div>
    </section>
  );
};
