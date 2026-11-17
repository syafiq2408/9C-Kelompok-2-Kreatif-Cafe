import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Copy, Check, Sparkles } from 'lucide-react';
import { MenuItem, CAFE_INFO } from '../data/cafeData';

export interface CartItem {
  item: MenuItem;
  quantity: number;
  note?: string;
}

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQty: number) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onClearCart
}) => {
  const [isStudentOrStaff, setIsStudentOrStaff] = useState<boolean>(true);
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState<string>('Table 4');
  const [customerName, setCustomerName] = useState<string>('');
  const [pickupTime, setPickupTime] = useState<string>('Lunch Break (12:15 PM)');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const formatIDR = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const subtotal = cartItems.reduce(
    (sum, ci) => sum + ci.item.price * ci.quantity,
    0
  );

  const discountAmount = isStudentOrStaff ? Math.round(subtotal * (CAFE_INFO.studentDiscountPct / 100)) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount);
  const totalItemCount = cartItems.reduce((sum, ci) => sum + ci.quantity, 0);

  // Generate WhatsApp formatted text
  const generateOrderMessage = () => {
    let msg = `*HOUSE OF LARAGA - SMPIT CITRA AZ-ZAHRA ORDER*\n`;
    msg += `----------------------------------------\n`;
    msg += `*Customer Name:* ${customerName.trim() || 'Citra Az-Zahra Guest'}\n`;
    msg += `*Order Type:* ${orderType === 'dine-in' ? `Dine-in (${tableNumber})` : `Takeaway (${pickupTime})`}\n`;
    msg += `*Status:* ${isStudentOrStaff ? 'SMPIT Citra Az-Zahra Student / Faculty (15% Off)' : 'General Visitor'}\n`;
    msg += `----------------------------------------\n`;
    msg += `*Order Items:*\n`;
    cartItems.forEach((ci, idx) => {
      msg += `${idx + 1}. ${ci.item.name} x${ci.quantity} = ${formatIDR(ci.item.price * ci.quantity)}\n`;
    });
    msg += `----------------------------------------\n`;
    msg += `*Subtotal:* ${formatIDR(subtotal)}\n`;
    if (isStudentOrStaff) {
      msg += `*Student & Staff Discount (15%):* -${formatIDR(discountAmount)}\n`;
    }
    msg += `*TOTAL DUE:* ${formatIDR(grandTotal)}\n`;
    msg += `----------------------------------------\n`;
    msg += `Please confirm order details and payment method (QRIS / Cash at counter). Thank you!`;
    return msg;
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(generateOrderMessage());
    const waUrl = `https://wa.me/6281262615222?text=${text}`;
    window.open(waUrl, '_blank');
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(generateOrderMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#E8E0D2] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#E8E0D2] flex items-center justify-between bg-[#FBF9F5]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#A85A32]" />
              <h2 className="text-base font-bold text-[#201A16] font-['Outfit']">
                Order Bag ({totalItemCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#78716C] hover:text-[#201A16] rounded-md hover:bg-[#F3EFE6] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body / Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#F5EFE6] text-[#78716C] flex items-center justify-center mx-auto text-xl">
                  🛒
                </div>
                <p className="text-sm font-semibold text-[#201A16]">Your order bag is empty</p>
                <p className="text-xs text-[#78716C] max-w-xs mx-auto">
                  Select your favorite specialty coffee, iced matcha, or fresh pastry from the menu.
                </p>
                <button
                  onClick={onClose}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-[#201A16] rounded-md hover:bg-[#342A24]"
                >
                  Browse Menu Now
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between text-xs text-[#78716C] pb-2 border-b border-[#F5EFE6]">
                  <span>Selected Items</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-700 hover:underline text-[11px]"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-3">
                  {cartItems.map((ci) => (
                    <div
                      key={ci.item.id}
                      className="p-3 bg-[#FBF9F5] rounded-lg border border-[#E8E0D2] flex items-center justify-between gap-3 text-xs"
                    >
                      {/* Image Thumbnail */}
                      {ci.item.imageUrl && (
                        <img
                          src={ci.item.imageUrl}
                          alt={ci.item.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-md object-cover border border-[#E8E0D2] shrink-0"
                        />
                      )}

                      <div className="space-y-0.5 flex-1 min-w-0">
                        <div className="font-semibold text-[#201A16] font-['Outfit'] text-sm truncate">
                          {ci.item.name}
                        </div>
                        <div className="text-[11px] text-[#78716C]">
                          {formatIDR(ci.item.price)} each
                        </div>
                        <div className="font-mono font-medium text-[#201A16]">
                          Total: {formatIDR(ci.item.price * ci.quantity)}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-1.5 bg-white border border-[#D6CEBF] rounded-md p-1">
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, ci.quantity - 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#57534E] hover:text-[#201A16]"
                          aria-label="Decrease quantity"
                        >
                          {ci.quantity === 1 ? <Trash2 className="w-3 h-3 text-red-600" /> : <Minus className="w-3 h-3" />}
                        </button>
                        <span className="font-mono font-bold text-xs w-5 text-center tabular-nums">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.item.id, ci.quantity + 1)}
                          className="w-5 h-5 flex items-center justify-center text-[#57534E] hover:text-[#201A16]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Options */}
                <div className="pt-4 border-t border-[#E8E0D2] space-y-3 text-xs">
                  
                  {/* Student Discount Toggle */}
                  <div
                    onClick={() => setIsStudentOrStaff(!isStudentOrStaff)}
                    className="p-3 rounded-lg border border-[#D6CEBF] bg-[#F5EFE6]/60 cursor-pointer flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#A85A32]" />
                      <div>
                        <span className="font-semibold text-[#201A16] block">
                          SMPIT Citra Az-Zahra Student &amp; Faculty
                        </span>
                        <span className="text-[11px] text-[#78716C]">
                          Automatic {CAFE_INFO.studentDiscountPct}% discount for school members
                        </span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isStudentOrStaff}
                      onChange={() => {}}
                      className="w-4 h-4 accent-[#201A16]"
                    />
                  </div>

                  {/* Dine in or Takeaway */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setOrderType('dine-in')}
                      className={`py-2 px-3 rounded-md border text-center transition-colors ${
                        orderType === 'dine-in'
                          ? 'border-[#201A16] bg-[#201A16] text-white font-semibold'
                          : 'border-[#D6CEBF] bg-white text-[#57534E]'
                      }`}
                    >
                      Dine-In
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('takeaway')}
                      className={`py-2 px-3 rounded-md border text-center transition-colors ${
                        orderType === 'takeaway'
                          ? 'border-[#201A16] bg-[#201A16] text-white font-semibold'
                          : 'border-[#D6CEBF] bg-white text-[#57534E]'
                      }`}
                    >
                      Takeaway
                    </button>
                  </div>

                  {/* Customer details input */}
                  <div className="space-y-2">
                    <div>
                      <label className="block text-[11px] font-medium text-[#78716C] mb-1">
                        Customer Name:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., Farhan (8A) / Ms. Sari"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                      />
                    </div>

                    {orderType === 'dine-in' ? (
                      <div>
                        <label className="block text-[11px] font-medium text-[#78716C] mb-1">
                          Table / Study Area Number:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Table 3 / Communal Desk"
                          value={tableNumber}
                          onChange={(e) => setTableNumber(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-[11px] font-medium text-[#78716C] mb-1">
                          Estimated Pickup Time:
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., 12:30 PM / During recess"
                          value={pickupTime}
                          onChange={(e) => setPickupTime(e.target.value)}
                          className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Breakdown */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-[#E8E0D2] bg-[#FBF9F5] space-y-3">
              <div className="space-y-1.5 text-xs text-[#57534E]">
                <div className="flex items-center justify-between">
                  <span>Order Subtotal</span>
                  <span className="font-mono tabular-nums">{formatIDR(subtotal)}</span>
                </div>
                {isStudentOrStaff && (
                  <div className="flex items-center justify-between text-[#4E6B56]">
                    <span>Student &amp; Faculty Discount (15%)</span>
                    <span className="font-mono tabular-nums">-{formatIDR(discountAmount)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#E8E0D2] flex items-center justify-between text-sm font-bold text-[#201A16]">
                  <span>Total Due</span>
                  <span className="font-mono tabular-nums text-base">{formatIDR(grandTotal)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#201A16] hover:bg-[#342A24] rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs group"
                >
                  <Send className="w-4 h-4 text-[#E7D7C1] group-hover:translate-x-0.5 transition-transform" />
                  <span>Send Order to Barista via WhatsApp</span>
                </button>

                <button
                  onClick={handleCopySummary}
                  className="w-full py-2 px-3 text-xs font-medium text-[#57534E] hover:text-[#201A16] bg-white border border-[#D6CEBF] rounded-md transition-colors flex items-center justify-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#4E6B56]" />
                      <span>Order Summary Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Order Summary (Text)</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-[#78716C] text-center pt-1">
                Payments accepted via QRIS or cash directly at the counter.
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
