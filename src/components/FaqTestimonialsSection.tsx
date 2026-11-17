import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, MessageSquarePlus, Send, Check } from 'lucide-react';
import { FAQS, TESTIMONIALS, Testimonial } from '../data/cafeData';

export const FaqTestimonialsSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [userReviews, setUserReviews] = useState<Testimonial[]>([]);
  const [newReviewerName, setNewReviewerName] = useState('');
  const [newReviewerRole, setNewReviewerRole] = useState('SMPIT Citra Az-Zahra Student');
  const [newReviewText, setNewReviewText] = useState('');
  const [newFavoriteItem, setNewFavoriteItem] = useState('');
  const [showReviewSuccess, setShowReviewSuccess] = useState(false);

  useEffect(() => {
    try {
      const saved =
        localStorage.getItem('house_of_laraga_user_notes') ||
        localStorage.getItem('creative_cafe_user_notes') ||
        localStorage.getItem('kreatif_cafe_user_notes');
      if (saved) {
        setUserReviews(JSON.parse(saved));
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const handleToggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewerName.trim() || !newReviewText.trim()) return;

    const newNote: Testimonial = {
      id: `usr-${Date.now()}`,
      name: newReviewerName.trim(),
      role: newReviewerRole,
      text: newReviewText.trim(),
      rating: 5,
      favoriteItem: newFavoriteItem.trim() || 'Signature Laraga Palm Sugar Coffee'
    };

    const updated = [newNote, ...userReviews];
    setUserReviews(updated);
    try {
      localStorage.setItem('house_of_laraga_user_notes', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setNewReviewerName('');
    setNewReviewText('');
    setNewFavoriteItem('');
    setShowReviewSuccess(true);
    setTimeout(() => setShowReviewSuccess(false), 3000);
  };

  return (
    <section id="faq" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      
      {/* 1. Testimonials & Faculty Voice */}
      <div className="mb-20">
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
            Faculty Perspectives &amp; Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#201A16] font-['Outfit']">
            What SMPIT Citra Az-Zahra Teachers Say
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Direct reflections from our faculty on how House of Laraga serves as an educational living laboratory, character builder, and peaceful campus workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E8E0D2] p-6 shadow-2xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Rating stars unboxed */}
                <div className="flex items-center gap-1 text-[#A85A32]">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#F5EFE6] space-y-1">
                <div className="font-semibold text-sm text-[#201A16] font-['Outfit']">
                  {item.name}
                </div>
                <div className="text-xs text-[#78716C]">{item.role}</div>
                <div className="text-[11px] text-[#A85A32] font-medium pt-1">
                  Favorite: {item.favoriteItem}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Submitted Community Notes (if any) */}
        {userReviews.length > 0 && (
          <div className="mb-8 space-y-3">
            <h4 className="text-xs font-semibold text-[#78716C] uppercase tracking-wider">
              Community &amp; Visitor Notes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {userReviews.map((note) => (
                <div key={note.id} className="p-4 bg-white rounded-lg border border-[#E8E0D2] text-xs space-y-2">
                  <p className="italic text-[#44403C]">"{note.text}"</p>
                  <div className="flex items-center justify-between text-[11px] text-[#78716C] border-t border-[#F5EFE6] pt-2">
                    <span className="font-semibold text-[#201A16]">{note.name} ({note.role})</span>
                    <span className="text-[#A85A32]">Favorite: {note.favoriteItem}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form to leave a note or feedback */}
        <div className="bg-[#F5EFE6]/60 rounded-xl p-5 sm:p-6 border border-[#E8E0D2]">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquarePlus className="w-4 h-4 text-[#A85A32]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#201A16]">
              Leave a Note or Review for House of Laraga
            </h3>
          </div>
          
          <form onSubmit={handleAddReview} className="grid grid-cols-1 sm:grid-cols-12 gap-3 text-xs">
            <div className="sm:col-span-4">
              <input
                type="text"
                placeholder="Your Full Name..."
                value={newReviewerName}
                onChange={(e) => setNewReviewerName(e.target.value)}
                required
                className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-4">
              <select
                value={newReviewerRole}
                onChange={(e) => setNewReviewerRole(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
              >
                <option value="SMPIT Citra Az-Zahra Student">SMPIT Citra Az-Zahra Student</option>
                <option value="SMPIT Citra Az-Zahra Teacher">SMPIT Citra Az-Zahra Teacher</option>
                <option value="Parent / Guardian">Parent / Guardian</option>
                <option value="School Alumnus">School Alumnus</option>
                <option value="Visiting Guest">Visiting Guest</option>
              </select>
            </div>
            <div className="sm:col-span-4">
              <input
                type="text"
                placeholder="Favorite Item (e.g. Kyoto Matcha Latte)"
                value={newFavoriteItem}
                onChange={(e) => setNewFavoriteItem(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-10">
              <input
                type="text"
                placeholder="Your thoughts, review, or message for the cafe..."
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                required
                className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full h-full py-2 px-3 text-xs font-semibold text-white bg-[#201A16] hover:bg-[#342A24] rounded-md transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit</span>
              </button>
            </div>
          </form>

          {showReviewSuccess && (
            <div className="mt-2 text-xs text-[#4E6B56] font-medium flex items-center gap-1.5 animate-in fade-in">
              <Check className="w-3.5 h-3.5" />
              <span>Thank you! Your note has been submitted and is now displayed on the website.</span>
            </div>
          )}
        </div>
      </div>

      {/* 2. Interactive FAQ Accordion */}
      <div>
        <div className="max-w-2xl mb-8 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
            Help &amp; Information
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#201A16] font-['Outfit']">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-sm text-[#57534E]">
            Practical details regarding visiting hours, digital payments, student discounts, and table bookings at House of Laraga.
          </p>
        </div>

        <div className="divide-y divide-[#E8E0D2] border-y border-[#E8E0D2]">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="py-4 sm:py-5">
                <button
                  onClick={() => handleToggleFaq(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-hidden group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#201A16] font-['Outfit'] group-hover:text-[#A85A32] transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#78716C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#201A16]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-[#57534E] leading-relaxed pr-6 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
