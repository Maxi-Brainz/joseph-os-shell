import { createFileRoute } from "@tanstack/react-router";
import { Desktop } from "@/components/joseph-os/Desktop";

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

function Index() {
  return <Desktop />;
}
