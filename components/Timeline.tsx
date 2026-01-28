export function Timeline({
  company,
  role,
  bullets
}: {
  company: string;
  role: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full bg-white/70" />
      <div className="absolute left-[4px] top-6 bottom-0 w-px bg-white/10" />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <div className="text-base font-semibold">{company}</div>
        <div className="text-sm text-white/75">{role}</div>
      </div>

      <ul className="mt-3 space-y-2 text-sm text-white/78">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
