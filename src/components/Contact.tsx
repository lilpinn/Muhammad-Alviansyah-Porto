'use client';

import { useState, type FormEvent } from 'react';
import { Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { useToast } from '@/components/Toast';
import { contactConfig, profile } from '@/data/portfolio';

type Status = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ✏️ Contact: form Web3Forms + copy email (toast) + info kontak.
export default function Contact() {
  const { toast } = useToast();
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [serverError, setServerError] = useState('');

  function validate(fields: { name: string; email: string; message: string }) {
    const e: typeof errors = {};
    if (!fields.name.trim()) e.name = 'Nama wajib diisi.';
    if (!EMAIL_RE.test(fields.email)) e.email = 'Format email tidak valid.';
    if (fields.message.trim().length < 10) e.message = 'Pesan minimal 10 karakter.';
    return e;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const fields = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      message: String(data.get('message') ?? ''),
    };

    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Tanpa access key = simulasi sukses (ganti setelah daftar web3forms.com)
    if (!contactConfig.web3FormsAccessKey) {
      setStatus('loading');
      setTimeout(() => {
        setStatus('success');
        toast('Pesan terkirim (mode simulasi — isi access key Web3Forms)');
        form.reset();
      }, 700);
      return;
    }

    setStatus('loading');
    setServerError('');
    try {
      const res = await fetch(contactConfig.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactConfig.web3FormsAccessKey,
          subject: `Pesan baru dari ${fields.name} — Portofolio`,
          from_name: profile.name,
          ...fields,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        toast('Pesan berhasil dikirim!');
        form.reset();
      } else {
        throw new Error(json.message || 'Gagal mengirim');
      }
    } catch (err) {
      setStatus('error');
      setServerError(err instanceof Error ? err.message : 'Terjadi kesalahan, coba lagi.');
      toast('Gagal mengirim pesan', 'info');
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      toast('Email disalin ke clipboard!');
    } catch {
      toast('Gagal menyalin email', 'info');
    }
  }

  const info = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    ...(profile.phone
      ? [{ icon: Phone, label: 'Telepon', value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, '')}` }]
      : []),
    { icon: MapPin, label: 'Lokasi', value: profile.location, href: '' },
  ];

  const inputClass = (bad?: string) =>
    `w-full rounded-xl border bg-card px-4 py-3 text-sm transition-colors outline-none focus:border-primary ${
      bad ? 'border-red-500' : 'border-border'
    }`;

  return (
    <section id="kontak" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading


          title="Hubungi Saya"
          description="Punya ide proyek atau peluang kerja? Kirim pesan, saya balas secepatnya."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Info kontak */}
          <Reveal className="lg:col-span-2">
            <div className="glass h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold">Informasi Kontak</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Terhubung lewat kanal berikut atau salin email saya.
              </p>

              <ul className="mt-6 space-y-4">
                {info.map((it) => (
                  <li key={it.label} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <it.icon size={18} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs text-muted-foreground">{it.label}</p>
                      {it.href ? (
                        <a
                          href={it.href}
                          className="cursor-pointer font-medium transition-colors hover:text-primary"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <p className="font-medium">{it.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={copyEmail}
                className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <Copy size={16} />
                Copy Email
              </button>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="glass space-y-4 rounded-2xl p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Nama <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    onBlur={(e) => setErrors((p) => ({ ...p, name: e.target.value.trim() ? undefined : 'Nama wajib diisi.' }))}
                    className={inputClass(errors.name)}
                    placeholder="Nama lengkap Anda"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    onBlur={(e) =>
                      setErrors((p) => ({
                        ...p,
                        email: EMAIL_RE.test(e.target.value) ? undefined : 'Format email tidak valid.',
                      }))
                    }
                    className={inputClass(errors.email)}
                    placeholder="nama@email.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Pesan <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  aria-invalid={!!errors.message}
                  onBlur={(e) =>
                    setErrors((p) => ({
                      ...p,
                      message:
                        e.target.value.trim().length >= 10
                          ? undefined
                          : 'Pesan minimal 10 karakter.',
                    }))
                  }
                  className={inputClass(errors.message)}
                  placeholder="Ceritakan proyek atau kebutuhan Anda..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {status === 'error' && serverError && (
                <p role="alert" className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  {serverError}
                </p>
              )}
              {status === 'success' && (
                <p role="status" className="rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-600 dark:text-emerald-400">
                  Terima kasih! Pesan Anda sudah diterima.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={17} />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
