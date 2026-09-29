// Light backgrounds with dark text, so the initials are always readable.
const badgeColors = [
  "bg-sky text-ink",
  "bg-highlight text-ink",
  "bg-emerald-100 text-emerald-900",
  "bg-rose-100 text-rose-900",
  "bg-violet-100 text-violet-900",
];

// Picks a color from the name, so each student keeps the same color on every render.
function getBadgeColor(name) {
  const total = [...name].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return badgeColors[total % badgeColors.length];
}

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function StudentCard({ name, id, program, year, email }) {
  const color = getBadgeColor(name);

  return (
    <article className="flex gap-4 rounded-xl border border-ink/10 bg-white p-5 shadow-sm">
      <div
        aria-hidden="true"
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold ${color}`}
      >
        {getInitials(name)}
      </div>

      <div className="min-w-0">
        <h3 className="font-display text-lg font-bold leading-tight">{name}</h3>
        <p className="text-sm text-slate-text">ID {id}</p>

        <p className="mt-3 text-sm font-semibold">{program}</p>
        <p className="text-sm text-slate-text">{year}</p>

        <a
          href={`mailto:${email}`}
          className="mt-3 block truncate text-sm font-semibold text-ink-soft underline decoration-highlight decoration-2 underline-offset-4 hover:bg-highlight/40"
        >
          {email}
        </a>
      </div>
    </article>
  );
}