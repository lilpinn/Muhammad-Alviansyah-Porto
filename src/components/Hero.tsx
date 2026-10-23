'use client';

import { Download, Mail, MapPin } from 'lucide-react';
import { SocialIcon } from '@/components/BrandIcons';
import Magnetic from '@/components/Magnetic';
import Reveal from '@/components/Reveal';
import { useTyping } from '@/hooks/useTyping';
import { profile } from '@/data/portfolio';
import { asset } from '@/lib/utils';

// ✏️ Hero: typing effect, CTA, sosial media, frame foto profil.
export default function Hero() {
  const typed = useTyping(profile.typingProfessions);

  return (
    <section id="beranda" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--primary)_0%,transparent_55%)] opacity-15"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Halo, saya
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {profile.name.split(' ').map((word, i) => (
              <span
                key={word}
                className="kinetic-word mr-3"
                style={{ animationDelay: `${120 + i * 110}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="mt-4 min-h-9 text-xl font-semibold sm:text-2xl">
            Saya{' '}
            <span className="caret pr-1 text-primary">{typed}</span>
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">{profile.bio}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Magnetic>
              <a
                href="#kontak"
                className="cursor-pointer rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35"
              >
                Hubungi Saya
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={asset(profile.resumeUrl)}
                download
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-border px-6 py-3 font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <Download size={18} />
                {profile.resumeLabel}
              </a>
            </Magnetic>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-accent" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex cursor-pointer items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail size={15} className="text-accent" />
              {profile.email}
            </a>
          </div>

          <div className="mt-6 flex gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
              >
                <SocialIcon name={s.icon} size={20} />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/40 to-accent/40 blur-2xl"
            />
            <div className="animate-float overflow-hidden rounded-[2rem] border-4 border-background bg-muted shadow-2xl">
              {/* ✏️ EDIT: timpa public/images/profile.svg (atau ganti jadi .jpg di data/portfolio.ts) */}
              <img
                src={asset(profile.photo)}
                alt={`Foto profil ${profile.name}`}
                width={420}
                height={420}
                className="h-auto w-72 object-cover sm:w-80 lg:w-[26rem]"
              />
            </div>
            <div className="glass absolute -right-3 -bottom-4 rounded-2xl px-4 py-2.5 text-sm font-semibold shadow-lg">
              <span className="text-primary">●</span> Tersedia untuk proyek
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
