import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Mail, ExternalLink, ShieldCheck, Car, Footprints } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const LocationSection: React.FC = () => {
  const [activeGuideTab, setActiveGuideTab] = useState<'siswa' | 'walimurid' | 'umum'>('walimurid');

  return (
    <section id="lokasi" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12 space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
          Location &amp; Campus Access
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#201A16] font-['Outfit']">
          Finding House of Laraga at SMPIT Citra Az-Zahra
        </h2>
        <p className="text-sm sm:text-base text-[#57534E]">
          Strategically situated inside the private school campus of SMPIT Citra Az-Zahra, conveniently accessible for students, faculty, and visiting parents.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Campus Guide & Address Card */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address & Contact Box */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E0D2] shadow-xs space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] text-[#A85A32] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#201A16] font-['Outfit']">
                  SMPIT Citra Az-Zahra
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  {CAFE_INFO.address}
                </p>
                <div className="pt-1 text-xs font-medium text-[#A85A32]">
                  Specific Spot: {CAFE_INFO.shortLocation}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F5EFE6] space-y-2 text-xs text-[#57534E]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#78716C]" />
                <span>WhatsApp Orders: <a href={`https://wa.me/6281262615222?text=Hello%20House%20of%20Laraga%20SMPIT%20Citra%20Az-Zahra`} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#201A16] hover:underline">{CAFE_INFO.phone}</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#78716C]" />
                <span>Official Email: <span className="font-mono text-[#201A16]">{CAFE_INFO.email}</span></span>
              </div>
            </div>

            {/* Google Maps External Button */}
            <div className="pt-2">
              <a
                href="https://www.google.com/maps/search/?api=1&query=SMPIT+Citra+Az-Zahra+Komplek+Taman+Alfa+Indah+Blok+K-2+Petukangan+Utara+Pesanggrahan+Jakarta+Selatan+12260"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#201A16] hover:bg-[#342A24] rounded-md transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#E7D7C1]" />
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Operational Hours Box */}
          <div className="bg-[#F5EFE6]/70 rounded-xl p-5 border border-[#E8E0D2] space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#201A16]">
              <Clock className="w-4 h-4 text-[#A85A32]" />
              <span>Full Operating Schedule</span>
            </div>
            
            <div className="divide-y divide-[#E8E0D2] text-xs">
              {CAFE_INFO.hours.map((h, i) => (
                <div key={i} className="py-2.5 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#201A16] block">{h.days}</span>
                    <span className="text-[11px] text-[#78716C]">{h.note}</span>
                  </div>
                  <span className="font-mono font-medium text-[#201A16] tabular-nums text-right">
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Campus Access Guide & Blueprint */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8E0D2] p-6 sm:p-8 shadow-xs space-y-6">
          
          <div>
            <div className="text-xs font-semibold text-[#A85A32] uppercase tracking-wider mb-1">
              Arrival &amp; Entry Guide
            </div>
            <h3 className="text-xl font-bold text-[#201A16] font-['Outfit']">
              How to Reach House of Laraga on Campus
            </h3>
          </div>

          {/* Access Tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#F5EFE6] rounded-lg border border-[#E8E0D2] max-w-md">
            <button
              onClick={() => setActiveGuideTab('walimurid')}
              className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors ${
                activeGuideTab === 'walimurid'
                  ? 'bg-white text-[#201A16] font-semibold shadow-xs'
                  : 'text-[#57534E] hover:text-[#201A16]'
              }`}
            >
              Parents &amp; Guardians
            </button>
            <button
              onClick={() => setActiveGuideTab('siswa')}
              className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors ${
                activeGuideTab === 'siswa'
                  ? 'bg-white text-[#201A16] font-semibold shadow-xs'
                  : 'text-[#57534E] hover:text-[#201A16]'
              }`}
            >
              Students &amp; Faculty
            </button>
            <button
              onClick={() => setActiveGuideTab('umum')}
              className={`flex-1 py-1.5 px-3 text-xs font-medium rounded-md transition-colors ${
                activeGuideTab === 'umum'
                  ? 'bg-white text-[#201A16] font-semibold shadow-xs'
                  : 'text-[#57534E] hover:text-[#201A16]'
              }`}
            >
              General Visitors
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FBF9F5] border border-[#E8E0D2] space-y-3 text-xs sm:text-sm text-[#57534E] leading-relaxed">
            {activeGuideTab === 'walimurid' && (
              <>
                <div className="flex items-center gap-2 font-semibold text-[#201A16]">
                  <Car className="w-4 h-4 text-[#A85A32]" />
                  <span>Comfortable Waiting Retreat for Parents</span>
                </div>
                <p>
                  1. Enter via the main gate of SMPIT Citra Az-Zahra and park in the visitor/parent parking area in front of the Building A lobby.
                </p>
                <p>
                  2. Let the on-duty security team know you are visiting House of Laraga or waiting for student pickup.
                </p>
                <p>
                  3. Stroll down the green covered garden walkway to Creativity Building 1st Floor (next to the Central Library). Enjoy an air-conditioned room with views of the school courtyards.
                </p>
              </>
            )}

            {activeGuideTab === 'siswa' && (
              <>
                <div className="flex items-center gap-2 font-semibold text-[#201A16]">
                  <Footprints className="w-4 h-4 text-[#4E6B56]" />
                  <span>Direct Access for Students &amp; Teachers</span>
                </div>
                <p>
                  1. Open throughout school break times, lunch hours, and after classes finish in the afternoon.
                </p>
                <p>
                  2. Enter through the glass door near the east locker area.
                </p>
                <p>
                  3. Show or tap your Student RFID Card at checkout to instantly enjoy the 15% discount on your order.
                </p>
              </>
            )}

            {activeGuideTab === 'umum' && (
              <>
                <div className="flex items-center gap-2 font-semibold text-[#201A16]">
                  <ShieldCheck className="w-4 h-4 text-[#8C5E3C]" />
                  <span>Visitor Access Protocol</span>
                </div>
                <p>
                  1. Kindly sign in at the Main Security Gate to receive a guest visitor pass.
                </p>
                <p>
                  2. Recommended visiting hours are from 10:00 AM – 11:30 AM and 1:30 PM – 9:30 PM.
                </p>
                <p>
                  3. The cafe is strictly non-smoking, family-friendly, and peaceful throughout the school grounds.
                </p>
              </>
            )}
          </div>

          {/* Campus Map Diagram */}
          <div className="border border-[#E8E0D2] rounded-xl p-5 bg-[#F5EFE6]/50 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#201A16] uppercase tracking-wider">Campus Ground Layout</span>
              <span className="text-[#78716C]">Ground Floor · Creativity Building</span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
              <div className="p-3 bg-white rounded-lg border border-[#E8E0D2]">
                <span className="text-[10px] text-[#78716C] block">Prayer Hall</span>
                <span className="font-semibold text-[#201A16] block mt-0.5">Campus Mosque</span>
              </div>
              <div className="p-3 bg-[#201A16] text-white rounded-lg border border-[#201A16] shadow-xs">
                <span className="text-[10px] text-[#E7D7C1] block">Our Location</span>
                <span className="font-bold text-white block mt-0.5">☕ House of Laraga</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E8E0D2]">
                <span className="text-[10px] text-[#78716C] block">Reading Hub</span>
                <span className="font-semibold text-[#201A16] block mt-0.5">Central Library</span>
              </div>
            </div>

            <div className="text-[11px] text-[#78716C] text-center pt-1">
              Just 10 meters from the School Main Courtyard &amp; Academic Wings
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
