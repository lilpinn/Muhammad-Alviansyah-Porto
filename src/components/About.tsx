import { Award, Briefcase, Code2, GraduationCap } from 'lucide-react';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { certificates, experiences, profile, projects, skills } from '@/data/portfolio';

// ✏️ About: bio + highlight statistik (auto-hitung dari data).
export default function About() {
  const stats = [
    { icon: Code2, label: 'Proyek', value: projects.length },
    { icon: Award, label: 'Sertifikat', value: certificates.length },
    { icon: Briefcase, label: 'Skill', value: skills.length },
    {
      icon: GraduationCap,
      label: 'Pengalaman',
      value: `${new Date().getFullYear() - 2020}+`,
    },
  ];

  return (
    <section id="tentang" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading


          title="Siapa Saya"
          description="Ringkasan perjalanan, minat, dan angka penting di balik karya saya."
        />

        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">
            {profile.about}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="lift glass glow-border flex flex-col items-center rounded-2xl p-6 text-center">
                <s.icon size={28} className="mb-3 text-primary" aria-hidden="true" />
                <span className="text-3xl font-extrabold">{s.value}</span>
                <span className="mt-1 text-sm text-muted-foreground">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
