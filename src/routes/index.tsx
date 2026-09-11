import { createFileRoute } from "@tanstack/react-router";
import { Desktop } from "@/components/joseph-os/Desktop";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Joseph OS — Developer Portfolio" },
      { name: "description", content: "Joseph Ogakwu's cinematic interactive developer portfolio and personal operating system." },
      { property: "og:title", content: "Joseph OS — Developer Portfolio" },
      { property: "og:description", content: "Build, create, and explore Joseph Ogakwu's interactive personal operating system." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <Desktop />;
}
