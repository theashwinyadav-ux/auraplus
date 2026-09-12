export default function LogoTicker() {
  return (
    <section className="py-6 px-6 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <p className="text-sm md:text-base font-semibold text-gray-500 mb-2 tracking-wide relative z-10">
          Trusted by Brands That Think Bigger
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all duration-500 mix-blend-multiply relative z-0">
          <img src="/images/logo-reelify.png" alt="Reelify Media" className="h-20 md:h-24 w-auto object-contain -mx-6 -my-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          <img src="/images/logo-adplick.png" alt="Adplick Media" className="h-40 md:h-48 w-auto object-contain -mx-12 -my-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          <img src="/images/logo-grow2viral.png" alt="Grow2Viral" className="h-6 md:h-7 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
          <img src="/images/logo-dewall.png" alt="deWall Ads" className="h-20 md:h-24 w-auto object-contain -mx-6 -my-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </section>
  );
}
