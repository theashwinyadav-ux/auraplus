"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar as CalendarIcon, Clock, User, Mail, Building2, CheckCircle2, Loader2 } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Date/Time, 2: Details, 3: Success
  const [loading, setLoading] = useState(false);

  // Form State
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  // Listen to URL hash to open/close modal
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#book") {
        setIsOpen(true);
        setStep(1);
        // Reset form
        setSelectedDate("");
        setSelectedTime("");
        setFormData({ name: "", email: "", company: "" });
      } else {
        setIsOpen(false);
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const closeModal = () => {
    window.location.hash = "";
    setIsOpen(false);
  };

  // Generate next 5 business days for the mock calendar
  const getNextDays = () => {
    const days = [];
    let date = new Date();
    while (days.length < 5) {
      date.setDate(date.getDate() + 1);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
        days.push(new Date(date));
      }
    }
    return days;
  };
  const availableDays = getNextDays();
  const timeSlots = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "05:00 PM"];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, date: selectedDate, time: selectedTime }),
      });
      
      if (response.ok) {
        setStep(3); // Success
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Book a Call</h3>
                <p className="text-sm text-gray-500 mt-1">Schedule a time to discuss your brand's growth.</p>
              </div>
              <button onClick={closeModal} className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-900 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <CalendarIcon className="w-4 h-4 text-[#f06a23]" /> Select a Day
                  </h4>
                  <div className="grid grid-cols-5 gap-2 mb-8">
                    {availableDays.map((date, i) => {
                      const dateString = date.toDateString();
                      return (
                        <button
                          key={i}
                          onClick={() => setSelectedDate(dateString)}
                          className={`flex flex-col items-center justify-center py-3 rounded-xl border transition-all ${
                            selectedDate === dateString 
                              ? "bg-[#f06a23] border-[#f06a23] text-white shadow-md shadow-orange-500/20" 
                              : "border-gray-200 hover:border-[#f06a23] text-gray-600 hover:bg-orange-50"
                          }`}
                        >
                          <span className="text-xs uppercase tracking-wider font-semibold opacity-80">
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </span>
                          <span className="text-lg font-bold mt-1">
                            {date.getDate()}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedDate && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-[#f06a23]" /> Select a Time
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {timeSlots.map((time, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 rounded-lg border text-sm font-medium transition-all ${
                              selectedTime === time
                                ? "bg-gray-900 border-gray-900 text-white shadow-md"
                                : "border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-10 flex justify-end">
                    <button 
                      onClick={() => setStep(2)}
                      disabled={!selectedDate || !selectedTime}
                      className="px-6 py-3 bg-[#f06a23] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleBooking} className="animate-in fade-in slide-in-from-right-4 duration-500">
                  <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl mb-6 flex justify-between items-center">
                    <div>
                      <p className="text-xs text-orange-600 font-semibold uppercase tracking-wider mb-1">Selected Time</p>
                      <p className="text-gray-900 font-medium">{selectedDate} at {selectedTime}</p>
                    </div>
                    <button type="button" onClick={() => setStep(1)} className="text-sm text-orange-600 font-medium hover:underline">Edit</button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f06a23]/20 focus:border-[#f06a23] outline-none transition-all" placeholder="John Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f06a23]/20 focus:border-[#f06a23] outline-none transition-all" placeholder="john@company.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company / Brand (Optional)</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#f06a23]/20 focus:border-[#f06a23] outline-none transition-all" placeholder="Your Brand Name" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-3">
                    <button type="button" onClick={() => setStep(1)} className="px-6 py-3 text-gray-600 font-semibold hover:bg-gray-100 rounded-xl transition-colors">
                      Back
                    </button>
                    <button type="submit" disabled={loading} className="px-6 py-3 bg-[#f06a23] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
                      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                      {loading ? "Confirming..." : "Confirm Booking"}
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
                  <p className="text-gray-500 max-w-sm mb-8">
                    We've sent a calendar invitation to <span className="font-medium text-gray-900">{formData.email}</span>. We look forward to speaking with you!
                  </p>
                  <button onClick={closeModal} className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
