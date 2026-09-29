import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";

export default function NotFound() {
  return (
    <section>
      <PageHeader
        title="Page not found"
        description="This address doesn't match any page in the portal."
      />
      <Link
        to="/"
        className="inline-block rounded-md bg-ink px-5 py-3 font-semibold text-white hover:bg-ink-soft"
      >
        Go to Home
      </Link>
    </section>
  );
}
