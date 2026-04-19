'use client';

const logos = [
  'Acme Corp',
  'Quantum',
  'APEX',
  'Celestial',
];

// Quadruple the array to ensure perfectly seamless scrolling without ever running out of elements
const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

export default function LogoMarquee() {
  return (
    <section className="py-28 bg-white overflow-hidden select-none">
      <div className="w-full max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        
        {/* 1. The Label */}
        <div 
          className="flex-shrink-0 whitespace-nowrap text-[18px] font-medium" 
          style={{ color: 'rgb(64, 64, 64)', fontFamily: 'Inter, sans-serif' }}
        >
          Trusted by top founders.
        </div>

        {/* 2. The Ticker Container */}
        <div 
          className="relative flex-grow w-full overflow-hidden"
          style={{ 
            maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 6%, rgb(0,0,0) 35%, rgb(0,0,0) 65%, rgba(0,0,0,0) 94%)', 
            WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0) 6%, rgb(0,0,0) 35%, rgb(0,0,0) 65%, rgba(0,0,0,0) 94%)' 
          }}
        >
          {/* 4. Animation applied to track */}
          <div className="flex w-max animate-marquee">
            {duplicatedLogos.map((text, i) => (
              <div key={i} className="flex-shrink-0 pr-[40px] flex items-center justify-center">
                {/* 3. The Logos */}
                <span 
                  className="text-2xl font-bold uppercase tracking-[0.1em]"
                  style={{ color: 'rgb(93, 99, 111)', fontFamily: 'Satoshi, sans-serif' }}
                >
                  {text}
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
          /* Smooth, continuous animation applied to the flex track */
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
}