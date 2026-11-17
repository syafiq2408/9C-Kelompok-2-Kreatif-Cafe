import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose
}) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('SMPIT Citra Az-Zahra Student');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('2026-11-16');
  const [time, setTime] = useState('11:00');
  const [guests, setGuests] = useState('3-5');
  const [purpose, setPurpose] = useState('Group Study / Independent Learning');
  const [specialRequest, setSpecialRequest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    let text = `*TABLE & STUDY SPACE RESERVATION FORM*\n`;
    text += `*HOUSE OF LARAGA - SMPIT CITRA AZ-ZAHRA*\n`;
    text += `----------------------------------------\n`;
    text += `*Full Name:* ${name}\n`;
    text += `*Category:* ${role}\n`;
    text += `*WhatsApp:* ${phone}\n`;
    text += `*Purpose:* ${purpose}\n`;
    text += `*Schedule:* ${date} at ${time} WIB\n`;
    text += `*Party Size:* ${guests} guests\n`;
    if (specialRequest.trim()) {
      text += `*Special Notes:* ${specialRequest.trim()}\n`;
    }
    text += `----------------------------------------\n`;
    text += `Please confirm table availability at House of Laraga. Thank you.`;

    const waUrl = `https://wa.me/6281262615222?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-[#E8E0D2] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="p-5 border-b border-[#E8E0D2] bg-[#FBF9F5] flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#A85A32]">
              Table &amp; Study Space Reservation
            </div>
            <h3 className="text-base font-bold text-[#201A16] font-['Outfit'] mt-0.5">
              House of Laraga · SMPIT Citra Az-Zahra
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#78716C] hover:text-[#201A16] rounded-md"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#F5EFE6] text-[#4E6B56] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-[#201A16] font-['Outfit']">
              Reservation Request Sent!
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-sm mx-auto">
              Your table reservation details have opened in WhatsApp for the House of Laraga team. We will promptly verify table availability for you.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#201A16] rounded-md hover:bg-[#342A24]"
            >
              Back to Main Page
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#78716C] font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[#78716C] font-medium mb-1">Attendee Category</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                >
                  <option value="SMPIT Citra Az-Zahra Student">SMPIT Citra Az-Zahra Student</option>
                  <option value="Faculty / Teaching Staff">Faculty / Teaching Staff</option>
                  <option value="Parent / Guardian">Parent / Guardian</option>
                  <option value="School Committee Member">School Committee Member</option>
                  <option value="Campus Visitor">Campus Visitor</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#78716C] font-medium mb-1">Active WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+62 812-xxxx-xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[#78716C] font-medium mb-1">Number of Guests</label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                >
                  <option value="1-2">1 - 2 Guests (Individual Workstation)</option>
                  <option value="3-5">3 - 5 Guests (Discussion Table)</option>
                  <option value="6-10">6 - 10 Guests (Communal Table + Whiteboard)</option>
                  <option value=">10">&gt; 10 Guests (Committee Meeting / Special Event)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[#78716C] font-medium mb-1">Planned Date (Monday - Friday)</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-[#78716C] font-medium mb-1">Arrival Time (10:00 AM - 10:00 PM)</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#78716C] font-medium mb-1">Purpose of Visit</label>
              <select
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
              >
                <option value="Group Study / Independent Learning">Group Study / Independent Learning</option>
                <option value="Parenting / Committee Meeting">Parenting / Committee Meeting</option>
                <option value="Student Project Guidance">Student Project Guidance</option>
                <option value="Teacher Work Session">Teacher Work Session</option>
                <option value="Casual / Student Pickup Waiting">Casual / Student Pickup Waiting</option>
              </select>
            </div>

            <div>
              <label className="block text-[#78716C] font-medium mb-1">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g., Table near wall outlets, would like drinks served upon arrival..."
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-[#D6CEBF] rounded-md focus:border-[#201A16] focus:outline-hidden"
              />
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-1/3 py-2.5 text-[#57534E] hover:text-[#201A16] border border-[#D6CEBF] rounded-md text-center font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-2/3 py-2.5 font-semibold text-white bg-[#201A16] hover:bg-[#342A24] rounded-md flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Reservation Request</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
