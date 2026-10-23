'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Github } from '@/components/BrandIcons';
import Modal from '@/components/Modal';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/portfolio';
import { asset } from '@/lib/utils';

// ✏️ Projects: filter kategori + tag tech + link GitHub/Live + modal detail.
export default function Projects() {
  const [filter, setFilter] = useState('Semua');
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);

  const categories = useMemo(() => ['Semua', ...new Set(projects.map((p) => p.category))], []);
  const filtered = useMemo(
    () => (filter === 'Semua' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="proyek" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="proyek-heading"
          eyebrow="Karya"
          title="Proyek Pilihan"
          description="Klik kartu untuk detail lengkap, teknologi, dan link terkait."
        />

        <Reveal className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setSelected(p)}
                aria-label={`Lihat detail proyek ${p.title}`}
                className="lift glass group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl text-left"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {/* ✏️ EDIT: timpa file gambar di public/images/ (project-1.svg dst) */}
                  <img
                    src={asset(p.image)}
                    alt={`Thumbnail ${p.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {p.featured && (
                    <span className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-amber-300 backdrop-blur">
                      <Star size={12} fill="currentColor" />
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {p.category}
                  </span>
                  <h3 className="font-bold">{p.title}</h3>
                  <p className="mt-1.5 line-clamp-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} title={selected?.title ?? ''}>
        {selected && (
          <div className="space-y-4">
            <img
              src={asset(selected.image)}
              alt={`Thumbnail ${selected.title}`}
              className="w-full rounded-xl border border-border bg-muted"
            />
            <p className="leading-relaxed text-muted-foreground">{selected.detail}</p>

            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Teknologi
              </h4>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {selected.githubUrl && (
                <a
                  href={selected.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  <Github size={16} />
                  Kode Sumber
                </a>
              )}
              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
