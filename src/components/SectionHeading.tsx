import Reveal from '@/components/Reveal';

// ✏️ Judul section konsisten: eyebrow + judul + deskripsi.
export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 id={id} className="text-3xl font-bold sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
