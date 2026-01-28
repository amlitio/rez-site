export function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card shadow-glow p-6 md:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg md:text-xl font-semibold tracking-tight">{title}</h2>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
