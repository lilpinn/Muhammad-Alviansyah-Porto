import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { asset } from '@/lib/utils';
import { profile } from '@/data/portfolio';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

// ✏️ EDIT: metadata SEO — judul, deskripsi, URL produksi
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://usernameanda.github.io'),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.bio,
  keywords: ['portfolio', 'developer', 'full-stack', 'Next.js', 'React', profile.name],
  authors: [{ name: profile.name }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: '/',
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    siteName: `${profile.name} Portfolio`,
    // ✏️ EDIT: ganti gambar OG (public/images/og-image.png)
    images: [{ url: asset('/images/og-image.png'), width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    images: [asset('/images/og-image.png')],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1220' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
