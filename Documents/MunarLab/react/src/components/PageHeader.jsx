export default function PageHeader({ title, description }) {
  return (
    <header className="mb-8 max-w-2xl">
      <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-lg text-slate-text">{description}</p>
      )}
    </header>
  );
}
