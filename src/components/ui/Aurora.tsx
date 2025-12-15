'use client';

import { useEffect, useRef } from 'react';

interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  className?: string;
}

export default function Aurora({
  colorStops = ['#1f5f94', '#2a7ab8', '#ff8c1a', '#1f5f94'],
  amplitude = 1.0,
  blend = 0.5,
  className = '',
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    let time = 0;
    const animate = () => {
      time += 0.003;

      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      ctx.clearRect(0, 0, width, height);

      // Create multiple aurora layers
      for (let layer = 0; layer < 3; layer++) {
        const layerOffset = layer * 0.5;
        const layerAmplitude = amplitude * (1 - layer * 0.2);

        ctx.globalAlpha = blend * (1 - layer * 0.25);

        const gradient = ctx.createLinearGradient(
          0,
          height * 0.3,
          width,
          height * 0.7
        );

        colorStops.forEach((color, index) => {
          const position = index / (colorStops.length - 1);
          const wave = Math.sin(time * 2 + position * Math.PI * 2 + layerOffset) * 0.1;
          gradient.addColorStop(Math.max(0, Math.min(1, position + wave)), color);
        });

        ctx.fillStyle = gradient;

        ctx.beginPath();
        ctx.moveTo(0, height);

        const segments = 100;
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments) * width;
          const baseY = height * 0.5;
          const wave1 = Math.sin(time + (i / segments) * Math.PI * 2 + layerOffset) * height * 0.15 * layerAmplitude;
          const wave2 = Math.sin(time * 1.5 + (i / segments) * Math.PI * 4 + layerOffset) * height * 0.08 * layerAmplitude;
          const wave3 = Math.sin(time * 0.7 + (i / segments) * Math.PI + layerOffset) * height * 0.1 * layerAmplitude;
          const y = baseY + wave1 + wave2 + wave3;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [colorStops, amplitude, blend]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
