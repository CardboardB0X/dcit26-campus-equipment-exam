export default function CourseCard({
  code,
  title,
  instructor,
  units,
  schedule,
  description,
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
      <div className="flex items-center justify-between bg-ink px-5 py-3">
        <span className="font-display text-sm font-bold tracking-wide text-highlight">
          {code}
        </span>
        <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white">
          {units} {units === 1 ? "unit" : "units"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-tight">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-slate-text">{description}</p>

        <dl className="mt-4 space-y-1 border-t border-ink/10 pt-3 text-sm">
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 text-slate-text">Instructor</dt>
            <dd className="font-semibold">{instructor}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-20 shrink-0 text-slate-text">Schedule</dt>
            <dd className="font-semibold">{schedule}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
