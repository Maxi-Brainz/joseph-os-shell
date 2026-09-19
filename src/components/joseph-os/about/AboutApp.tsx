import { Compass, Fingerprint, Lightbulb, Route, UserRound, type LucideIcon } from "lucide-react";
import { useRef, useState, type RefObject } from "react";
import { Button } from "@/components/ui/button";
import type { ApplicationComponentProps } from "../application-registry";

type AboutSectionId = "overview" | "journey" | "philosophy" | "identity";

type AboutSectionDefinition = {
  id: AboutSectionId;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const aboutSections: AboutSectionDefinition[] = [
  {
    id: "overview",
    label: "Overview",
    eyebrow: "Profile overview",
    title: "The person behind Joseph OS.",
    description: "Personal introduction and core statement coming in the next milestone.",
    icon: UserRound,
  },
  {
    id: "journey",
    label: "Journey",
    eyebrow: "Path & milestones",
    title: "A journey still being documented.",
    description: "Joseph’s education, technical journey, and career development will be introduced here.",
    icon: Route,
  },
  {
    id: "philosophy",
    label: "Philosophy",
    eyebrow: "Principles & practice",
    title: "Build. Create. Impact.",
    description: "A concise perspective on technology, creativity, impact, and continuous learning will live here.",
    icon: Lightbulb,
  },
  {
    id: "identity",
    label: "Identity",
    eyebrow: "Professional identity",
    title: "Direction with purpose.",
    description: "Professional identity, areas of interest, and future direction are reserved for a later milestone.",
    icon: Fingerprint,
  },
];

function AboutHeader() {
  return (
    <header className="about-header">
      <span className="about-header-mark" aria-hidden="true"><UserRound /></span>
      <div className="about-header-copy">
        <p>Personal system profile</p>
        <h1>About Joseph</h1>
        <span>A closer look at the person behind Joseph OS.</span>
      </div>
      <span className="about-header-index" aria-hidden="true">PROFILE / 01</span>
    </header>
  );
}

function AboutNavigation({ activeSection, onSelect }: { activeSection: AboutSectionId; onSelect: (id: AboutSectionId) => void }) {
  return (
    <nav className="about-navigation" aria-label="About Joseph sections">
      <p className="about-navigation-label">Explore</p>
      <div className="about-navigation-list">
        {aboutSections.map((section, index) => {
          const Icon = section.icon;
          const active = section.id === activeSection;
          return (
            <Button
              key={section.id}
              variant="ghost"
              className="about-navigation-item"
              aria-current={active ? "page" : undefined}
              onClick={() => onSelect(section.id)}
            >
              <span className="about-navigation-number">{String(index + 1).padStart(2, "0")}</span>
              <Icon />
              <span>{section.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}

function AboutSection({ section, sectionRef }: { section: AboutSectionDefinition; sectionRef: RefObject<HTMLElement | null> }) {
  const Icon = section.icon;
  return (
    <section ref={sectionRef} id={`about-${section.id}`} className="about-section" aria-labelledby={`about-${section.id}-title`}>
      <div className="about-section-heading">
        <span className="about-section-icon" aria-hidden="true"><Icon /></span>
        <div>
          <p>{section.eyebrow}</p>
          <h2 id={`about-${section.id}-title`}>{section.label}</h2>
        </div>
      </div>
      <div className="about-section-body">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
        <span>Content reserved for Phase 3B</span>
      </div>
    </section>
  );
}

function AboutContent({ activeSection, sectionRefs, onScroll }: { activeSection: AboutSectionId; sectionRefs: Record<AboutSectionId, RefObject<HTMLElement | null>>; onScroll: () => void }) {
  return (
    <div className="about-content" onScroll={onScroll} tabIndex={0} aria-label="About Joseph content">
      <div className="about-content-track">
        {aboutSections.map((section) => (
          <AboutSection key={section.id} section={section} sectionRef={sectionRefs[section.id]} />
        ))}
      </div>
      <span className="sr-only" aria-live="polite">Showing {activeSection}</span>
    </div>
  );
}

export function AboutApp({ title: _title, icon: _icon }: ApplicationComponentProps) {
  const [activeSection, setActiveSection] = useState<AboutSectionId>("overview");
  const overviewRef = useRef<HTMLElement>(null);
  const journeyRef = useRef<HTMLElement>(null);
  const philosophyRef = useRef<HTMLElement>(null);
  const identityRef = useRef<HTMLElement>(null);
  const sectionRefs: Record<AboutSectionId, RefObject<HTMLElement | null>> = {
    overview: overviewRef,
    journey: journeyRef,
    philosophy: philosophyRef,
    identity: identityRef,
  };

  const selectSection = (id: AboutSectionId) => {
    setActiveSection(id);
    sectionRefs[id].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateActiveSection = () => {
    const ordered = aboutSections
      .map(({ id }) => ({ id, top: Math.abs(sectionRefs[id].current?.offsetTop ?? Number.MAX_SAFE_INTEGER) }))
      .sort((a, b) => a.top - b.top);
    const contentTop = sectionRefs.overview.current?.parentElement?.parentElement?.scrollTop ?? 0;
    const current = aboutSections
      .map(({ id }) => ({ id, distance: Math.abs((sectionRefs[id].current?.offsetTop ?? 0) - contentTop - 18) }))
      .sort((a, b) => a.distance - b.distance)[0];
    if (ordered.length && current) setActiveSection(current.id);
  };

  return (
    <div className="about-app">
      <AboutHeader />
      <div className="about-workspace">
        <AboutNavigation activeSection={activeSection} onSelect={selectSection} />
        <AboutContent activeSection={activeSection} sectionRefs={sectionRefs} onScroll={updateActiveSection} />
      </div>
    </div>
  );
}