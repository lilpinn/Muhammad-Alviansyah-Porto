import Reveal from '@/components/Reveal';

// ✏️ Judul section konsisten: judul + deskripsi (heading bicara sendiri, tanpa kicker).
export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {description && <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">{description}</p>}
    </Reveal>
  );
}
