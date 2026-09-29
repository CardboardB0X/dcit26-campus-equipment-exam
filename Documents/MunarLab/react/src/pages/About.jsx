import PageHeader from "../components/PageHeader.jsx";

const routes = [
  { path: "/", page: "Home" },
  { path: "/students", page: "Students" },
  { path: "/courses", page: "Courses" },
  { path: "/about", page: "About" },
];

export default function About() {
  return (
    <section>
      <PageHeader
        title="About this portal"
        description="A small project that shows how React Router, reusable components, and Tailwind CSS work together."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold">What it does</h2>
          <p className="mt-2 text-slate-text">
            The portal lists students and courses. Each list is built by
            passing data to one reusable card component, so a change to the
            card updates every card on the page.
          </p>
        </div>

        <div className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold">Pages and URLs</h2>
          <ul className="mt-3 divide-y divide-ink/10 text-sm">
            {routes.map((route) => (
              <li key={route.path} className="flex justify-between py-2">
                <span className="font-semibold">{route.page}</span>
                <code className="rounded bg-sky px-2 py-0.5">{route.path}</code>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
