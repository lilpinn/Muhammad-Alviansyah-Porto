'use client';

import { skills } from '@/data/portfolio';

// ✏️ Marquee: strip teknologi berjalan — jeda saat hover, statis saat reduced-motion.
export default function Marquee() {
  const items = [...skills.map((s) => s.name), 'Git & GitHub', 'REST API', 'CI/CD'];

  const Group = ({ ariaHidden }: { ariaHidden?: boolean }) => (
    <div className="marquee-group" aria-hidden={ariaHidden || undefined}>
      {items.map((name) => (
        <span
          key={name + String(ariaHidden)}
          className="mx-3 flex items-center gap-3 rounded-full border border-border bg-card/60 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {name}
        </span>
      ))}
    </div>
  );

  return (
    <div className="marquee overflow-hidden border-y border-border py-4" aria-label="Daftar teknologi">
      <div className="marquee-track">
        <Group />
        <Group ariaHidden />
      </div>
    </div>
  );
}
