'use client';

import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { skills } from '@/data/portfolio';
import type { SkillCategory } from '@/types/portfolio';

const CATEGORIES: ('Semua' | SkillCategory)[] = ['Semua', 'Frontend', 'Backend', 'Database', 'Tools'];

const CAT_COLOR: Record<SkillCategory, string> = {
  Frontend: 'bg-primary/10 text-primary',
  Backend: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Database: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
  Tools: 'bg-accent/10 text-accent',
};

// ✏️ Skills: grid kartu + badge kategori + indikator level keahlian.
export default function Skills() {
  const [filter, setFilter] = useState<'Semua' | SkillCategory>('Semua');
  const filtered = useMemo(
    () => (filter === 'Semua' ? skills : skills.filter((s) => s.category === filter)),
    [filter],
  );

  return (
    <section id="skill" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="skill-heading"
          eyebrow="Kemampuan"
          title="Skills & Teknologi"
          description="Teknologi yang saya kuasai beserta perkiraan level penguasaan."
        />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 70}>
              <div className="lift glass h-full rounded-2xl p-5">
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className="font-semibold">{s.name}</h3>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${CAT_COLOR[s.category]}`}>
                    {s.category}
                  </span>
                </div>
                {s.description && (
                  <p className="mb-4 text-sm text-muted-foreground">{s.description}</p>
                )}
                <div
                  className="h-2 w-full overflow-hidden rounded-full bg-muted"
                  role="progressbar"
                  aria-valuenow={s.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Level ${s.name}`}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
                <p className="mt-1.5 text-right text-xs text-muted-foreground">{s.level}%</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
