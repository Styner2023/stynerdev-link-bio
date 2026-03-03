"use client"

import { X, DollarSign } from "lucide-react"

  const donationOptions = [
  {
    name: "Cash App - Support The Work",
    url: "https://cash.app/$StynerStiner",
    color: "#00D632"
  },
  {
    name: "Venmo - Support The Work",
    url: "https://venmo.com/u/StynerDev",
    color: "#008CFF"
  },
  {
    name: "PayPal - Support The Work",
    url: "https://www.paypal.com/ncp/payment/728DHD57AN4KN",
    color: "#0070BA"
  },
  {
    name: "PayPal - Preserve Legacy",
    url: "https://www.paypal.com/ncp/payment/66AZ7WMWBK43C",
    color: "#0070BA"
  },
  {
    name: "PayPal - Book Watani",
    url: "https://www.paypal.com/ncp/payment/7BTNRNMHYUATE",
    color: "#0070BA"
  }
]

export function DonationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ backgroundImage: "url('https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/images/6.wangjianglou-park-chengdu-sichuan-china-2026-01-05-05-57-12-utc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={onClose}>
      <div className="relative bg-white border-4 border-black rounded-3xl p-6 max-w-md w-full shadow-[12px_12px_0px_rgba(0,0,0,1)] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="absolute inset-0 opacity-20">
          <img src="https://pub-734cbe666a1846e4bfad1adc1574fe7a.r2.dev/images/6.wangjianglou-park-chengdu-sichuan-china-2026-01-05-05-57-12-utc.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-retro text-2xl text-black">Support The Work</h2>
          <button onClick={onClose} className="text-black hover:text-[#DA3901]">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <p className="text-black mb-6 text-center">Help fund platform development</p>
        
        <div className="space-y-3">
          {donationOptions.map((option) => (
            <a
              key={option.name}
              href={option.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-black text-white rounded-2xl p-4 hover:bg-[#DA3901] transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                <span className="font-bold text-lg">{option.name}</span>
              </div>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}
