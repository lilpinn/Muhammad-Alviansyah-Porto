'use client';

import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { useActiveSection } from '@/hooks/useActiveSection';
import { profile } from '@/data/portfolio';
import { asset } from '@/lib/utils';

const LINKS = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'skill', label: 'Skill' },
  { id: 'sertifikat', label: 'Sertifikat' },
  { id: 'proyek', label: 'Proyek' },
  { id: 'kontak', label: 'Kontak' },
];

const IDS = LINKS.map((l) => l.id);

// ✏️ Navbar sticky glassmorphism + scroll-spy + resume download + menu mobile.
export default function Navbar() {
  const active = useActiveSection(IDS);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <nav
        aria-label="Navigasi utama"
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all sm:px-6 ${
          scrolled ? 'glass backdrop-blur-[14px] mx-3 shadow-lg sm:mx-auto' : ''
        }`}
      >
        <a href="#beranda" className="text-lg font-bold tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                aria-current={active === l.id ? 'true' : undefined}
                className={`relative block cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === l.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-300 ${
                    active === l.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={asset(profile.resumeUrl)}
            download
            className="hidden cursor-pointer items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:flex"
          >
            <Download size={16} />
            {profile.resumeLabel}
          </a>
          <button
            type="button"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`glass mx-3 mt-2 overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col p-3">
          {LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === l.id ? 'true' : undefined}
                className={`block cursor-pointer rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  active === l.id ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={asset(profile.resumeUrl)}
              download
              className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Download size={16} />
              {profile.resumeLabel}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
