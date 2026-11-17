import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Info, Sparkles, X } from 'lucide-react';
import { MENU_ITEMS, MenuItem, CAFE_INFO } from '../data/cafeData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemCounts: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemCounts
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [onlyStudentDeal, setOnlyStudentDeal] = useState<boolean>(false);
  const [onlyPopular, setOnlyPopular] = useState<boolean>(false);
  const [selectedItemDetail, setSelectedItemDetail] = useState<MenuItem | null>(null);
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'kopi', label: 'Specialty Coffee' },
    { id: 'non-kopi', label: 'Tea & Refreshers' },
    { id: 'makanan', label: 'Mains & Bowls' },
    { id: 'snack', label: 'Pastries & Bites' }
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchDesc = item.description.toLowerCase().includes(query);
        const matchTaste = item.tasteNotes ? item.tasteNotes.toLowerCase().includes(query) : false;
        if (!matchName && !matchDesc && !matchTaste) {
          return false;
        }
      }
      // Student deal filter
      if (onlyStudentDeal && !item.isStudentDeal) {
        return false;
      }
      // Popular filter
      if (onlyPopular && !item.popular) {
        return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery, onlyStudentDeal, onlyPopular]);

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleAdd = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedAnimationId(item.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 800);
  };

  return (
    <section id="menu" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E8E0D2]">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
            Menu &amp; Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#201A16] font-['Outfit']">
            Curated Specialty Drinks &amp; Wholesome Halal Dining
          </h2>
          <p className="text-sm sm:text-base text-[#57534E]">
            Crafted fresh daily with clean, premium ingredients. SMPIT Citra Az-Zahra students and teachers enjoy a <span className="font-semibold text-[#A85A32]">{CAFE_INFO.studentDiscountPct}% discount</span>.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-72 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#78716C]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search coffee, matcha, bowl, pastry..."
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-[#D6CEBF] focus:border-[#201A16] rounded-md focus:outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#78716C] hover:text-[#201A16]"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Controls Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F5EFE6] rounded-lg border border-[#E8E0D2]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-white text-[#201A16] shadow-xs font-semibold'
                  : 'text-[#57534E] hover:text-[#201A16]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Quick Attribute Toggles */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOnlyStudentDeal(!onlyStudentDeal)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              onlyStudentDeal
                ? 'bg-[#201A16] text-[#FBF9F5] border-[#201A16]'
                : 'bg-white text-[#57534E] border-[#D6CEBF] hover:border-[#201A16]'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E7D7C1]" />
            <span>Student Deal</span>
          </button>

          <button
            onClick={() => setOnlyPopular(!onlyPopular)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap flex items-center gap-1.5 ${
              onlyPopular
                ? 'bg-[#201A16] text-[#FBF9F5] border-[#201A16]'
                : 'bg-white text-[#57534E] border-[#D6CEBF] hover:border-[#201A16]'
            }`}
          >
            <span>Popular Picks</span>
          </button>
        </div>
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#F5EFE6]/40 rounded-xl border border-[#E8E0D2] p-8">
          <p className="text-sm font-medium text-[#201A16]">No items found for "{searchQuery}"</p>
          <p className="text-xs text-[#78716C] mt-1">Try switching categories or clearing your search keywords.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
              setOnlyStudentDeal(false);
              setOnlyPopular(false);
            }}
            className="mt-4 px-4 py-2 text-xs font-medium text-[#201A16] bg-white border border-[#D6CEBF] rounded-md hover:bg-[#F3EFE6]"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const countInCart = cartItemCounts[item.id] || 0;
            const isJustAdded = addedAnimationId === item.id;
            const discountedPrice = item.isStudentDeal
              ? item.price * (1 - CAFE_INFO.studentDiscountPct / 100)
              : item.price;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItemDetail(item)}
                className="group bg-white rounded-xl border border-[#E8E0D2] hover:border-[#D6CEBF] hover:shadow-md transition-all overflow-hidden flex flex-col justify-between cursor-pointer relative"
              >
                {/* Food & Beverage Photo Header */}
                <div className="relative h-44 sm:h-48 w-full bg-[#F5EFE6] overflow-hidden">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-[#78716C] bg-gradient-to-br from-[#F5EFE6] to-[#E8E0D2]">
                      <span className="text-3xl">☕</span>
                      <span className="text-[10px] uppercase font-semibold text-[#A85A32] mt-1">House of Laraga</span>
                    </div>
                  )}

                  {/* Top Overlay Badge for Tag */}
                  {item.tag && (
                    <div className="absolute top-3 left-3 bg-[#201A16]/85 backdrop-blur-xs text-[#E7D7C1] text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                      {item.tag}
                    </div>
                  )}

                  {/* Student Discount Badge */}
                  {item.isStudentDeal && (
                    <div className="absolute bottom-3 right-3 bg-[#4E6B56] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>15% Student Deal</span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top line metadata without pills */}
                    <div className="flex items-center justify-between text-xs text-[#78716C] mb-2">
                      <span className="uppercase tracking-wider font-semibold text-[#A85A32]">
                        {item.category === 'kopi'
                          ? 'Coffee'
                          : item.category === 'non-kopi'
                          ? 'Drink'
                          : item.category === 'makanan'
                          ? 'Meal'
                          : 'Snack'}
                      </span>
                      {item.calories && (
                        <span className="font-mono text-[11px] text-[#A8A29E]">{item.calories}</span>
                      )}
                    </div>

                    {/* Item Title & Price */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-base font-bold text-[#201A16] font-['Outfit'] group-hover:text-[#A85A32] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <div className="text-right shrink-0">
                        <span className="text-sm font-bold text-[#201A16] font-mono tabular-nums block">
                          {formatIDR(item.price)}
                        </span>
                        {item.isStudentDeal && (
                          <span className="text-[11px] text-[#4E6B56] font-mono tabular-nums block">
                            Student: {formatIDR(discountedPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#57534E] leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    {/* Tasting notes */}
                    {item.tasteNotes && (
                      <div className="text-[11px] text-[#78716C] italic mb-4 line-clamp-1">
                        "{item.tasteNotes}"
                      </div>
                    )}
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between">
                    <span className="text-[11px] text-[#78716C] flex items-center gap-1 group-hover:text-[#201A16] transition-colors">
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </span>

                    <button
                      onClick={(e) => handleAdd(item, e)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all ${
                        isJustAdded
                          ? 'bg-[#4E6B56] text-white'
                          : countInCart > 0
                          ? 'bg-[#F5EFE6] text-[#201A16] border border-[#D6CEBF]'
                          : 'bg-[#201A16] text-[#FBF9F5] hover:bg-[#342A24]'
                      }`}
                      aria-label={`Add ${item.name} to order bag`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : countInCart > 0 ? (
                        <>
                          <Plus className="w-3 h-3 text-[#A85A32]" />
                          <span>Order ({countInCart})</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Item Detail Modal */}
      {selectedItemDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#E8E0D2] shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            
            {/* Modal Image Header */}
            <div className="relative h-48 bg-[#F5EFE6] overflow-hidden">
              {selectedItemDetail.imageUrl ? (
                <img
                  src={selectedItemDetail.imageUrl}
                  alt={selectedItemDetail.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-[#78716C] p-6 text-center bg-gradient-to-br from-[#F5EFE6] to-[#E8E0D2]">
                  <span className="text-3xl mb-2">☕</span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">House of Laraga Specialty</p>
                  <p className="text-sm font-bold text-[#201A16] font-['Outfit'] mt-1">{selectedItemDetail.name}</p>
                </div>
              )}
              
              <button
                onClick={() => setSelectedItemDetail(null)}
                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-[#201A16] hover:bg-white shadow-xs"
                aria-label="Close item detail"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#A85A32] uppercase tracking-wider mb-1">
                    {selectedItemDetail.category} · {selectedItemDetail.tag || 'Specialty'}
                  </div>
                  <h3 className="text-xl font-bold text-[#201A16] font-['Outfit']">
                    {selectedItemDetail.name}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold font-mono text-[#201A16]">
                    {formatIDR(selectedItemDetail.price)}
                  </div>
                  {selectedItemDetail.isStudentDeal && (
                    <div className="text-xs text-[#4E6B56] font-mono">
                      Student Price: {formatIDR(selectedItemDetail.price * 0.85)}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                {selectedItemDetail.description}
              </p>

              {/* Detail list without pill */}
              <div className="p-3.5 bg-[#F5EFE6]/60 rounded-lg border border-[#E8E0D2] space-y-2 text-xs">
                {selectedItemDetail.tasteNotes && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#78716C]">Flavor Profile:</span>
                    <span className="font-medium text-[#201A16]">{selectedItemDetail.tasteNotes}</span>
                  </div>
                )}
                {selectedItemDetail.calories && (
                  <div className="flex items-center justify-between">
                    <span className="text-[#78716C]">Estimated Energy:</span>
                    <span className="font-mono text-[#201A16]">{selectedItemDetail.calories}</span>
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <span className="text-[#78716C]">Halal Certification:</span>
                  <span className="font-semibold text-[#4E6B56]">100% Halal MUI / BPJPH</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setSelectedItemDetail(null)}
                  className="w-1/3 py-2.5 text-xs font-medium text-[#57534E] hover:text-[#201A16] border border-[#D6CEBF] rounded-md text-center"
                >
                  Close
                </button>
                <button
                  onClick={(e) => {
                    handleAdd(selectedItemDetail, e);
                    setSelectedItemDetail(null);
                  }}
                  className="w-2/3 py-2.5 text-xs font-semibold text-white bg-[#201A16] hover:bg-[#342A24] rounded-md flex items-center justify-center gap-2 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Order Bag</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};
