export function PartnerSection() {
  return (
    <div className="w-full bg-white border-4 border-black rounded-3xl p-6 mt-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
      <h3 className="font-retro text-2xl text-black mb-6 text-center">
        Connect With Watani Stiner
      </h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-sans font-bold text-black mb-2">YouTube Documentary Feature</h4>
          <p className="text-sm text-black mb-1">Cali Faces | A 12-Minute Introduction to Watani Stiner</p>
          <a href="https://youtu.be/xiRnkaa2fnM" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-[#FF76B8]">Watch Documentary</a>
        </div>

        <div>
          <h4 className="font-sans font-bold text-black mb-2">YouTube Official Channel</h4>
          <p className="text-sm text-black mb-1">Watani Stiner | Long-Form Talks & Interviews</p>
          <a href="https://www.youtube.com/@watanistiner4169" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-[#FF76B8]">Visit Channel</a>
        </div>

        <div>
          <h4 className="font-sans font-bold text-black mb-2">YouTube Archive</h4>
          <p className="text-sm text-black mb-1">Still Bars & Real Scars | Curated Public Engagements</p>
          <a href="https://www.youtube.com/@steelbarsandrealscars9011" target="_blank" rel="noopener noreferrer" className="text-sm text-black underline hover:text-[#FF76B8]">View Archive</a>
        </div>

        <div className="pt-4 border-t-2 border-black">
          <h4 className="font-sans font-bold text-black mb-3">Social Media & Press</h4>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="https://www.facebook.com/watani.stiner/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-[#FF76B8]">• Facebook</a>
            <a href="https://www.instagram.com/watani.stiner/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-[#FF76B8]">• Instagram</a>
            <a href="https://www.linkedin.com/in/watani-stiner-3ab327bb/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-[#FF76B8]">• LinkedIn</a>
            <a href="https://sfbayview.com/2017/09/watani-stiner-tending-to-historical-wounds/" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-[#FF76B8]">• SF Bay View</a>
            <a href="https://www.kalw.org/post/healing-past-through-dialogue" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:text-[#FF76B8]">• KALW Radio</a>
          </div>
        </div>

        <div className="pt-6 text-center">
          <blockquote className="text-base text-black italic mb-2 font-serif">"Nonviolence does not negate uncompromising resistance to social forces and structures that deny or limit human freedom."</blockquote>
          <p className="text-sm text-black font-semibold mb-4">— Watani Stiner</p>
          <p className="text-sm text-black italic mb-4">For speaking engagements, interviews, or collaborations</p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@watanistiner.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white px-8 py-4 rounded-full font-sans font-bold text-sm hover:bg-[#DA3901] hover:text-white transition-all shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
            Contact Watani Stiner
          </a>
          <p className="text-sm text-black mt-4">contact@watanistiner.com</p>
        </div>
      </div>
    </div>
  )
}
