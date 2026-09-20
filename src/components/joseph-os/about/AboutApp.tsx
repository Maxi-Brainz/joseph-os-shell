import { Fingerprint, Lightbulb, Route, UserRound, type LucideIcon } from "lucide-react";
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

function AboutContent({ activeSection, contentRef, sectionRefs, onScroll }: { activeSection: AboutSectionId; contentRef: RefObject<HTMLDivElement | null>; sectionRefs: Record<AboutSectionId, RefObject<HTMLElement | null>>; onScroll: () => void }) {
  return (
    <div ref={contentRef} className="about-content" onScroll={onScroll} tabIndex={0} aria-label="About Joseph content">
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
  const contentRef = useRef<HTMLDivElement>(null);
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
    const content = contentRef.current;
    const section = sectionRefs[id].current;
    if (!content || !section) return;
    content.scrollTo({ top: section.offsetTop - 18, behavior: "smooth" });
  };

  const updateActiveSection = () => {
    const content = contentRef.current;
    if (!content) return;
    const atBottom = content.scrollTop + content.clientHeight >= content.scrollHeight - 8;
    const current = atBottom
      ? aboutSections.at(-1)
      : [...aboutSections].reverse().find(({ id }) => (sectionRefs[id].current?.offsetTop ?? Number.MAX_SAFE_INTEGER) <= content.scrollTop + 36);
    if (current) setActiveSection(current.id);
  };

  return (
    <div className="about-app">
      <AboutHeader />
      <div className="about-workspace">
        <AboutNavigation activeSection={activeSection} onSelect={selectSection} />
        <AboutContent activeSection={activeSection} contentRef={contentRef} sectionRefs={sectionRefs} onScroll={updateActiveSection} />
      </div>
    </div>
  );
}