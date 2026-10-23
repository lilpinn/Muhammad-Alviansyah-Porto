'use client';

import { useMemo, useState } from 'react';
import { BadgeCheck, ExternalLink, Maximize2 } from 'lucide-react';
import Modal from '@/components/Modal';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { certificates } from '@/data/portfolio';
import { asset } from '@/lib/utils';

// ✏️ Sertifikat: grid + filter kategori + modal preview gambar.
export default function Certificates() {
  const [filter, setFilter] = useState('Semua');
  const [selected, setSelected] = useState<(typeof certificates)[number] | null>(null);

  const categories = useMemo(() => ['Semua', ...new Set(certificates.map((c) => c.category))], []);
  const filtered = useMemo(
    () => (filter === 'Semua' ? certificates : certificates.filter((c) => c.category === filter)),
    [filter],
  );

  return (
    <section id="sertifikat" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading


          title="Sertifikat"
          description="Klik kartu untuk melihat pratinjau sertifikat lebih besar."
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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => setSelected(cert)}
                aria-label={`Lihat sertifikat ${cert.name}`}
                className="lift glass glow-border group block h-full w-full cursor-pointer rounded-2xl overflow-hidden text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {/* ✏️ EDIT: timpa file gambar di public/images/ (cert-1.svg dst) */}
                  <img
                    src={asset(cert.image)}
                    alt={`Sertifikat ${cert.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute right-3 bottom-3 flex h-9 w-9 items-center justify-center rounded-lg bg-black/55 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    <Maximize2 size={16} />
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-1 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <BadgeCheck size={14} />
                    {cert.issuer}
                  </div>
                  <h3 className="font-bold">{cert.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{cert.date}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Modal open={selected !== null} onClose={() => setSelected(null)} title={selected?.name ?? ''}>
        {selected && (
          <div className="space-y-4">
            <img
              src={asset(selected.image)}
              alt={`Sertifikat ${selected.name}`}
              className="w-full rounded-xl border border-border bg-muted"
            />
            <dl className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Penerbit</dt>
                <dd className="font-semibold">{selected.issuer}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Tanggal</dt>
                <dd className="font-semibold">{selected.date}</dd>
              </div>
              {selected.credentialId && (
                <div>
                  <dt className="text-muted-foreground">Credential ID</dt>
                  <dd className="font-mono text-xs">{selected.credentialId}</dd>
                </div>
              )}
              <div>
                <dt className="text-muted-foreground">Kategori</dt>
                <dd className="font-semibold">{selected.category}</dd>
              </div>
            </dl>
            {selected.verifyUrl && (
              <a
                href={selected.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <ExternalLink size={15} />
                Verifikasi Sertifikat
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
