'use client';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Aurora container with GPU acceleration */}
      <div className="absolute inset-0 will-change-transform">
        {/* Primary blue aurora */}
        <div
          className="absolute w-[80%] h-[80%] -top-[20%] -left-[10%] animate-aurora-1 will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(52, 152, 219, 0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'translateZ(0)',
          }}
        />

        {/* Secondary green aurora */}
        <div
          className="absolute w-[70%] h-[70%] -bottom-[10%] -right-[10%] animate-aurora-2 will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(126, 211, 33, 0.12) 0%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'translateZ(0)',
          }}
        />

        {/* Accent cyan aurora */}
        <div
          className="absolute w-[60%] h-[50%] top-[10%] left-[20%] animate-aurora-3 will-change-transform"
          style={{
            background: 'radial-gradient(ellipse 50% 35% at 50% 50%, rgba(133, 193, 233, 0.1) 0%, transparent 70%)',
            filter: 'blur(45px)',
            transform: 'translateZ(0)',
          }}
        />
      </div>

      {/* Static overlays - no animation needed */}
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 40%, transparent 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />
    </div>
  );
}
