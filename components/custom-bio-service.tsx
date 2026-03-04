export function CustomBioService() {
  return (
    <section className="w-full mt-12 mb-8 relative">
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -bottom-8 left-0 w-32 h-32 md:w-40 md:h-40 scale-x-[-1] scale-y-[-1]" />
      <img src="/img/decorative-branches/bb_embroidery-01.png" alt="Decorative Branch" className="absolute -bottom-8 right-0 w-32 h-32 md:w-40 md:h-40 scale-y-[-1]" />
      <div className="bg-white border-4 border-black rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-[4px_4px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_rgba(0,0,0,1)] text-center">
        <h2 className="font-retro text-2xl md:text-3xl lg:text-4xl text-black mb-4 md:mb-6">Like This Link Bio?</h2>
        
        <div className="text-black font-sans space-y-3 md:space-y-4 mb-6 md:mb-8 max-w-md mx-auto">
          <p className="text-sm md:text-base leading-relaxed">
            I build custom link bio pages just like this one. Full design control, custom fonts, images, and backend management.
          </p>
          <p className="text-sm md:text-base leading-relaxed font-bold text-black bg-yellow-100 px-4 py-3 rounded-lg border-4 border-black">
            No recurring fees. No Linktree dependency. Your own branded digital hub.
          </p>
          <ul className="text-xs md:text-sm leading-relaxed list-none space-y-2 font-semibold">
            <li>✓ Custom design & branding</li>
            <li>✓ Full control over fonts, colors, images</li>
            <li>✓ Your own backend & database</li>
            <li>✓ No monthly subscription fees</li>
            <li>✓ Fully responsive on all devices</li>
          </ul>
        </div>

        <a 
          href="https://mail.google.com/mail/u/0/?fs=1&to=contact@styner.dev&tf=cm" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-sans font-bold text-xs md:text-sm hover:bg-[#DA3901] hover:text-white transition-all shadow-[2px_2px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] md:hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
        >
          Get Your Custom Link Bio
        </a>
      </div>
    </section>
  )
}
