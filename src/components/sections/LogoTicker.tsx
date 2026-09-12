export default function LogoTicker() {
  return (
    <section className="py-12 px-6 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p className="text-sm md:text-base font-semibold text-gray-800 mb-8 tracking-wide">
          Trusted by Brands That Think Bigger
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logoipsum placeholders using simple SVGs/Text for demonstration */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-full bg-gray-900 grid place-items-center"><span className="text-white text-xs">L</span></div>
            Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded border-2 border-gray-900 grid place-items-center"><span className="text-gray-900 text-xs">L</span></div>
            Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rotate-45 bg-gray-900 grid place-items-center"><span className="text-white -rotate-45 text-xs">L</span></div>
            Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-tl-lg rounded-br-lg bg-gray-900 grid place-items-center"><span className="text-white text-xs">L</span></div>
            Logoipsum
          </div>
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-full border-4 border-gray-900 grid place-items-center"><span className="text-gray-900 text-xs">L</span></div>
            Logoipsum
          </div>
        </div>
      </div>
    </section>
  );
}
