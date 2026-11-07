export type PhilosophyPrinciple = {
  number: string;
  title: string;
  paragraphs: string[];
};

export const philosophyIntroduction = {
  eyebrow: "A personal framework",
  statement: "Build with purpose. Live with conviction.",
  description: "Purpose gives direction to what Joseph builds; faith and conviction help ground the person doing the building.",
};

export const purposePrinciple: PhilosophyPrinciple = {
  number: "01",
  title: "Build with Purpose",
  paragraphs: [
    "I believe technology should do more than impress people. It should solve problems, improve experiences and create meaningful value.",
    "When I build, I want to understand the purpose behind the idea. I enjoy exploring how technology can be applied practically, whether through software, digital systems, infrastructure or emerging technologies.",
    "For me, building with purpose means looking beyond the code and thinking about the people, problems and possibilities behind what we create.",
  ],
};

export const faithPrinciple: PhilosophyPrinciple = {
  number: "02",
  title: "Faith & Conviction",
  paragraphs: [
    "I believe that what guides us internally matters just as much as what we achieve externally.",
    "Faith and conviction remind me to remain grounded in what I believe, to approach life with intention and to let my principles influence the decisions I make.",
    "For me, conviction is not simply about what I say I believe. It is about allowing those beliefs to shape how I live, how I approach challenges and how I pursue the things that matter.",
  ],
};

export const philosophyConnection = {
  eyebrow: "The connecting thought",
  statement: "Purpose gives direction to what we build. Faith and conviction help ground the person doing the building.",
};