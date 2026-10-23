import { SocialIcon } from '@/components/BrandIcons';
import { profile } from '@/data/portfolio';

// ✏️ Footer: copyright + sosial media.
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-between">
        <div>
          <p className="font-bold">
            {profile.name}
            <span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            © {year} — Dibuat dengan Next.js &amp; Tailwind CSS
          </p>
        </div>

        <div className="flex gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <SocialIcon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
