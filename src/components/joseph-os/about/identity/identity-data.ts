export type IdentityDiscipline = {
  number: string;
  title: string;
  description: string;
};

export type IdentityTechnologyGroup = {
  title: string;
  technologies: string[];
};

export type AppliedArea = {
  category: "Hands-on experience" | "Project exposure";
  title: string;
  description: string;
  journeyContext: string;
};

export const identityIntroduction = {
  eyebrow: "Technical identity",
  title: "Technology, built for practical use.",
  description:
    "Joseph works across software, connectivity, digital products and technology communication — bringing together engineering practice and ideas that serve real needs.",
};

export const coreDisciplines: IdentityDiscipline[] = [
  {
    number: "01",
    title: "Software Development",
    description: "Building websites, web applications, digital platforms and functional software experiences.",
  },
  {
    number: "02",
    title: "IT Infrastructure & Networking",
    description: "Work across ISP environments, radio engineering, Air Fibre, network infrastructure and fibre-optic technology.",
  },
  {
    number: "03",
    title: "Digital Innovation",
    description: "Exploring technology-driven solutions, digital products and applications across different industries.",
  },
  {
    number: "04",
    title: "Technology Communication",
    description: "Public speaking, advocacy and explaining technical ideas with clarity.",
  },
];

export const technologyGroups: IdentityTechnologyGroup[] = [
  { title: "Frontend Development", technologies: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { title: "Backend & Databases", technologies: ["Node.js", "MySQL", "MongoDB"] },
  { title: "CMS & Content Platforms", technologies: ["WordPress", "Sanity"] },
];

export const appliedAreas: AppliedArea[] = [
  {
    category: "Hands-on experience",
    title: "Radio, ISP & connectivity",
    description: "Radio engineering and RF systems, ISP and Air Fibre infrastructure, fibre-optic technology, and field installation support.",
    journeyContext: "Connected to Joseph’s ISP and radio-engineering work at Dotmac Technologies.",
  },
  {
    category: "Hands-on experience",
    title: "Websites & media systems",
    description: "Website and digital platform management, alongside the technology systems used in media and content workflows.",
    journeyContext: "Reflected in the Head of IT responsibilities documented in Journey, including CSO Media Integrated Ltd.",
  },
  {
    category: "Project exposure",
    title: "Agritech & emerging technology",
    description: "Agrovestors product initiatives include IntelliFeed360, IntelliCrop360 and IntelliFly360. IoT and AI-oriented applications are areas of exploration, not claims of advanced expertise.",
    journeyContext: "Product initiatives and agritech work are documented in the Journey section.",
  },
];

export const featuredStrength = {
  title: "Public Speaking & Advocacy",
  description: "Communicating ideas in public, advocating for technology, and making technical topics easier to understand.",
};

export const professionalStrengths = [
  "Problem-solving & analytical thinking",
  "Technical communication",
  "Creative thinking & digital product development",
  "Continuous learning & adaptability",
];