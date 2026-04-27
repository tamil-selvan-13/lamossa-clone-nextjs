'use client';

export default function FloatingBlur() {
  const blurs = [0.0625, 0.125, 0.25, 0.5, 1, 2, 4, 8];
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[80px] pointer-events-none z-40 overflow-hidden">
      {blurs.map((blur, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            maskImage: `linear-gradient(to top, black ${i * 12.5}%, transparent ${(i + 1) * 12.5}%)`,
            WebkitMaskImage: `linear-gradient(to top, black ${i * 12.5}%, transparent ${(i + 1) * 12.5}%)`,
          }}
        />
      ))}
    </div>
  );
}
