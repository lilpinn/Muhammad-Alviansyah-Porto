'use client';

import { useEffect, useRef, type ReactNode } from 'react';

// ✏️ Magnetic: tombol/elemen tarik sedikit ke arah kursor (hanya pointer halus).
export default function Magnetic({
  children,
  strength = 0.25,
  className = '',
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy);
      const radius = Math.max(r.width, r.height) * 0.9 + 60;
      if (dist < radius) {
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else {
        el.style.transform = 'translate(0, 0)';
      }
    };
    const onLeave = () => {
      el.style.transform = 'translate(0, 0)';
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic ${className}`}>
      {children}
    </div>
  );
}
