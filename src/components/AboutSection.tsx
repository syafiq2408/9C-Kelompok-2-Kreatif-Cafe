import React from 'react';
import { BookOpen, Sparkles, Users } from 'lucide-react';
import creativeSpaceImg from '../assets/images/cafe_creative_space_1794205435717.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-[#F5EFE6]/50 border-y border-[#E8E0D2] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
            Background &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#201A16] font-['Outfit'] text-balance">
            More Than Just a Coffee Bar: An Incubator for Youth Character &amp; Entrepreneurship
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed">
            House of Laraga was born from a clear vision at SMPIT Citra Az-Zahra private school: creating a space that harmonizes serene study comfort, genuine fellowship, and a practical living laboratory for the next generation.
          </p>
        </div>

        {/* Narrative & Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Image with authentic campus cafe life */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-[#E8E0D2] shadow-sm bg-white">
              <img
                src={creativeSpaceImg}
                alt="Students collaborating and studying at House of Laraga SMPIT Citra Az-Zahra"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[440px] object-cover"
              />
            </div>
            
            {/* Caption without pill */}
            <div className="mt-3 flex items-center justify-between text-xs text-[#78716C] px-1">
              <span>Collaboration Space &amp; Reading Corner</span>
              <span>Citra Az-Zahra Campus Archive</span>
            </div>
          </div>

          {/* Right Column: Detailed Story */}
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#44403C] leading-relaxed">
            <h3 className="text-xl font-bold text-[#201A16] font-['Outfit']">
              The Story Behind House of Laraga Citra Az-Zahra
            </h3>
            
            <p>
              In today's fast-paced world, interpersonal confidence, entrepreneurial curiosity, and ethical business habits cannot solely be learned on a classroom whiteboard. The faculty and leadership of <span className="font-semibold text-[#201A16]">SMPIT Citra Az-Zahra</span> designed <span className="font-semibold text-[#201A16]">House of Laraga</span> as an experiential living laboratory.
            </p>

            <p>
              Here, students actively observe and engage in practical operations: exploring the rich agricultural diversity of Indonesian single-origin beans, calculating unit costs and fair profit margins, and greeting guests with sincere courtesy, respect, and Islamic character.
            </p>

            <p>
              For parents picking up their children after extracurricular clubs or participating in school parenting forums, the cafe offers a peaceful retreat—enjoying artisanal warm brews, reading publications, and sharing thoughtful conversations in a tranquil garden-adjacent atmosphere.
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#78716C] border-t border-[#E8E0D2]">
              <div>
                <span className="block text-xl font-bold font-mono text-[#201A16]">100%</span>
                <span className="text-[#57534E]">Halal-Certified Ingredients</span>
              </div>
              <div className="h-8 w-px bg-[#E8E0D2]" />
              <div>
                <span className="block text-xl font-bold font-mono text-[#201A16]">18+</span>
                <span className="text-[#57534E]">Ergonomic Workstations</span>
              </div>
              <div className="h-8 w-px bg-[#E8E0D2]" />
              <div>
                <span className="block text-xl font-bold font-mono text-[#201A16]">15%</span>
                <span className="text-[#57534E]">School Community Discount</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          
          <div className="bg-white p-7 rounded-xl border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#A85A32]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-semibold text-[#78716C]">01. CORE PILLAR</div>
            <h3 className="text-lg font-bold text-[#201A16] font-['Outfit']">
              Edu-Entrepreneurship Lab
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Nurturing independence, inventory management, and ethical business etiquette among students through structured operational shifts and barista workshops.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#4E6B56]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-semibold text-[#78716C]">02. CORE PILLAR</div>
            <h3 className="text-lg font-bold text-[#201A16] font-['Outfit']">
              Reading &amp; Literacy Haven
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Equipped with a mini library featuring hundreds of curated titles—from Islamic history to science encyclopedias—inspiring leisurely reading beyond standard class hours.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-[#E8E0D2] shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#8C5E3C]">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-xs font-mono font-semibold text-[#78716C]">03. CORE PILLAR</div>
            <h3 className="text-lg font-bold text-[#201A16] font-['Outfit']">
              School &amp; Family Synergy
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              A bridge of fellowship connecting teachers, parents, committee members, and students in an uplifting, hospitable environment throughout the school week.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
