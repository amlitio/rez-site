import { resume } from "@/lib/resume";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { Timeline } from "@/components/Timeline";

function LinkPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
    >
      {label}
      <span aria-hidden className="text-white/55">↗</span>
    </a>
  );
}

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 md:py-14">
      <header className="card shadow-glow p-7 md:p-9">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-3xl md:text-4xl font-semibold tracking-tight">
              {resume.name}
            </div>
            <div className="mt-2 text-base md:text-lg text-white/75">
              {resume.title}
            </div>
            <p className="mt-4 max-w-2xl text-sm md:text-[15px] text-white/78 leading-relaxed">
              {resume.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {resume.strengths.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <LinkPill href={`mailto:${resume.email}`} label={resume.email} />
            <LinkPill
              href={`tel:${resume.phone.replace(/[^\d+]/g, "")}`}
              label={resume.phone}
            />
            {resume.links.map((l) => (
              <LinkPill key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
        </div>
      </header>

      <div className="mt-7 grid gap-7">
        <Section title="Experience">
          <div className="space-y-8">
            {resume.experience.map((x) => (
              <Timeline
                key={`${x.company}-${x.role}`}
                company={x.company}
                role={x.role}
                bullets={x.bullets}
              />
            ))}
          </div>
        </Section>

        <div className="grid gap-7 md:grid-cols-2">
          <Section title="Education">
            <ul className="space-y-4 text-sm text-white/80">
              {resume.education.map((e) => (
                <li
                  key={e.school}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="font-semibold text-white/90">{e.school}</div>
                  <div className="muted mt-1">{e.degree}</div>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Certifications">
            <ul className="space-y-2 text-sm text-white/80">
              {resume.certifications.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/35 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <footer className="text-center text-xs text-white/55 pb-2">
          <div className="mt-2">Built with Next.js + Tailwind. Deployed on Vercel.</div>
        </footer>
      </div>
    </main>
  );
}
