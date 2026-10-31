export type JourneyMilestoneKind = "academic" | "professional" | "training";

export type JourneyEntry = {
  organization: string;
  role: string;
  period: string;
  narrative?: string;
  points: string[];
  note?: string;
};

export type AcademicProject = {
  title: string;
  context: string;
  dataset: string;
  results: { label: string; value: string }[];
  disclaimer: string;
};

export type JourneyMilestone = {
  id: string;
  kind: JourneyMilestoneKind;
  periodLabel: string;
  title: string;
  subtitle: string;
  summary: string;
  narrative?: string;
  entries: JourneyEntry[];
  project?: AcademicProject;
};

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: "dotmac",
    kind: "professional",
    periodLabel: "2022–2023",
    title: "Technical beginnings",
    subtitle: "Dotmac Technologies Ltd.",
    summary: "An ISP internship in radio engineering that grew into leading the Radio Engineering Team.",
    narrative:
      "Joseph’s first sustained exposure to real-world infrastructure. Working at an internet service provider, he progressed from radio engineering internship duties to leading the Radio Engineering Team — learning how connectivity is planned, installed and kept running in the field.",
    entries: [
      {
        organization: "Dotmac Technologies Ltd.",
        role: "Radio Engineering Intern, progressing to leading the Radio Engineering Team",
        period: "2022–2023 · approximately six months",
        points: [
          "Air Fibre installations and maintenance",
          "Radio network engineering",
          "Field installation and technical operations",
          "Assisting with fibre-optic installations and configurations",
          "Supporting connectivity infrastructure",
        ],
      },
    ],
  },
  {
    id: "university",
    kind: "academic",
    periodLabel: "2024",
    title: "Academic foundation",
    subtitle: "Federal University Wukari",
    summary: "B.Sc. Computer Science, graduated 2024 — including a final-year machine learning research project.",
    narrative:
      "Joseph’s Computer Science education provided the formal foundation for his interests in software development, computing, problem-solving and technology — the base everything since has built on.",
    entries: [
      {
        organization: "Federal University Wukari, Taraba State, Nigeria",
        role: "Bachelor of Science (B.Sc.) in Computer Science",
        period: "Graduated 2024",
        points: [],
      },
    ],
    project: {
      title: "Chronic Kidney Disease Prediction Using a Hybrid LDA and Artificial Neural Network Approach",
      context:
        "Joseph’s final-year research applied a hybrid machine learning approach to the prediction of chronic kidney disease, comparing an Artificial Neural Network with Linear Discriminant Analysis.",
      dataset: "UCI Chronic Kidney Disease dataset — 400 instances, 25 attributes",
      results: [
        { label: "Artificial Neural Network · reported accuracy", value: "99.00%" },
        { label: "Linear Discriminant Analysis · reported accuracy", value: "96.25%" },
      ],
      disclaimer:
        "Reported results from this academic project — not independently validated clinical performance, and not a clinically approved diagnostic tool.",
    },
  },
  {
    id: "professional-growth",
    kind: "professional",
    periodLabel: "2024–Present",
    title: "Professional growth",
    subtitle: "Four concurrent responsibilities",
    summary: "Four parallel Head of IT roles across IT operations, advocacy, media and agritech.",
    narrative:
      "From 2024, Joseph has carried four concurrent Head of IT responsibilities. These are parallel commitments within a shared period — distinct experiences running side by side, not a sequence of jobs.",
    entries: [
      {
        organization: "CSGGG",
        role: "Head of IT",
        period: "2024–Present",
        points: [
          "IT operations",
          "Website and digital infrastructure management",
          "Technology support for programmes and organizational activities",
          "Technical guidance and digital systems",
        ],
      },
      {
        organization: "ASDGEPI — Ambassadors for Sustainable Development Goals and Ecosystem Preservation Initiative",
        role: "Head of IT",
        period: "2024–Present",
        points: [
          "Website and IT management",
          "Digital infrastructure",
          "Technology support for SDG and climate-related campaigns",
          "Event and outreach technology support",
          "Advocacy tools and digital communication",
        ],
        note: "Joseph also serves as a Climate Change and SDGs Ambassador within this work.",
      },
      {
        organization: "CSO Media Integrated Ltd.",
        role: "Head of IT",
        period: "2024–Present",
        points: [
          "Digital and media systems",
          "IT infrastructure",
          "Website and publishing workflows",
          "Technical support for digital media operations",
        ],
        note: "Supported media platforms include CSONews24 and CSONEWSWATCH Magazine — platforms within CSO Media, not separate employers. Joseph managed these responsibilities independently.",
      },
      {
        organization: "Agrovestors Farm Tech Ltd.",
        role: "Head of IT and Board Member",
        period: "2024–Present",
        narrative: "Bringing technology into agriculture through practical digital solutions, connected systems and innovation.",
        points: [
          "IT and website management",
          "Digital platform development",
          "Technology strategy and product development",
          "Supporting innovation in agritech — IoT, AI and sustainable farming",
        ],
        note: "Product initiatives include IntelliFeed360, IntelliCrop360 and IntelliFly360.",
      },
    ],
  },
  {
    id: "century",
    kind: "professional",
    periodLabel: "Post-graduation",
    title: "Broadening experience",
    subtitle: "Century Information Systems",
    summary: "An internship after graduation, while awaiting NYSC.",
    narrative: "An opportunity to broaden Joseph’s practical digital and creative experience.",
    entries: [
      {
        organization: "Century Information Systems",
        role: "Internship",
        period: "Post-graduation · while awaiting NYSC",
        points: [
          "Frontend landing-page development",
          "Design and graphics",
          "Social media and content management",
        ],
      },
    ],
  },
  {
    id: "nitda-ncair",
    kind: "training",
    periodLabel: "2026–Present",
    title: "Continuing development",
    subtitle: "NITDA · NCAIR Embedded Systems Training",
    summary: "Ongoing embedded systems training at NITDA’s National Centre for Artificial Intelligence and Robotics.",
    narrative:
      "Joseph’s learning continued after university: an ongoing exploration of embedded systems and hardware–software integration.",
    entries: [
      {
        organization:
          "National Information Technology Development Agency (NITDA) — National Centre for Artificial Intelligence and Robotics (NCAIR)",
        role: "Embedded Systems Training",
        period: "2026–Present · ongoing programme",
        points: ["Embedded systems", "Python programming"],
        note: "Ongoing technical training, not employment — and not a completed certification.",
      },
    ],
  },
];
