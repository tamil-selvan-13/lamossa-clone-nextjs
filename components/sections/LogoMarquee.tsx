'use client';

const logos = [
  { text: 'Acme Corp', font: 'Satoshi, sans-serif' },
  { text: 'Quantum', font: 'Switzer, sans-serif' },
  { text: 'APEX', font: 'Chillax, sans-serif' },
  { text: 'Celestial', font: 'Satoshi, sans-serif' },
];

const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoMarquee() {
  return (
    <section className="py-[80px] bg-white overflow-hidden select-none">
      <div className="w-full max-w-[1240px] mx-auto px-[24px] flex flex-col md:flex-row items-center gap-[40px]">
        
        {/* 1. The Label */}
        <h5 
          className="flex-shrink-0 whitespace-nowrap text-[18px] font-bold" 
          style={{ color: 'rgb(64, 64, 64)', fontFamily: 'Satoshi, sans-serif' }}
        >
          Trusted by top founders.
        </h5>

        {/* 2. The Ticker Container */}
        <div 
          className="relative flex-grow w-full overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 6%, rgb(0,0,0) 35%, rgb(0,0,0) 65%, rgba(0,0,0,0) 94%)', 
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 6%, rgb(0,0,0) 35%, rgb(0,0,0) 65%, rgba(0,0,0,0) 94%)' 
          }}
        >
          <div className="flex w-max animate-marquee items-center">
            {duplicatedLogos.map((logo, i) => (
              <div key={i} className="flex-shrink-0 pr-[40px] flex items-center justify-center gap-2">
                <div className="w-[24px] h-[24px] opacity-100 flex items-center justify-center">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="6" fill="rgb(93, 99, 111)" fillOpacity="0.2"/>
                      <circle cx="12" cy="12" r="4" fill="rgb(93, 99, 111)"/>
                   </svg>
                </div>
                <span 
                  className="text-[20px] font-bold tracking-tight"
                  style={{ color: 'rgb(93, 99, 111)', fontFamily: logo.font }}
                >
                  {logo.text}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } 
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}