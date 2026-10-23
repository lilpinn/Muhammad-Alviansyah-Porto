import { Briefcase, Building2, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { experiences } from '@/data/portfolio';

const TYPE_META = {
  work: { icon: Briefcase, color: 'text-primary', bg: 'bg-primary/10' },
  education: { icon: GraduationCap, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
  organization: { icon: Building2, color: 'text-accent', bg: 'bg-accent/10' },
} as const;

// ✏️ Timeline vertikal interaktif: pengalaman kerja / pendidikan / organisasi.
export default function Experience() {
  return (
    <section id="pengalaman" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          id="pengalaman-heading"
          eyebrow="Perjalanan"
          title="Pengalaman & Pendidikan"
          description="Riwayat singkat karier, studi, dan organisasi."
        />

        <ol className="relative space-y-8 border-l-2 border-border pl-8 sm:pl-10">
          {experiences.map((exp, i) => {
            const meta = TYPE_META[exp.type];
            const Icon = meta.icon;
            return (
              <Reveal key={`${exp.title}-${i}`} delay={i * 70}>
                <li className="relative">
                  <span
                    className={`absolute -left-[2.35rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card sm:-left-[2.85rem]`}
                    aria-hidden="true"
                  >
                    <Icon size={16} className={meta.color} />
                  </span>

                  <article className="lift glass rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold">{exp.title}</h3>
                        <p className="text-sm font-medium text-primary">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${meta.bg} ${meta.color}`}
                      >
                        {exp.start} — {exp.end}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((p, j) => (
                        <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
