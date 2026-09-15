import type { LucideIcon } from "lucide-react";
import {
  BookOpenText,
  BrainCircuit,
  BriefcaseBusiness,
  ContactRound,
  FileText,
  FolderKanban,
  Settings,
  SquareTerminal,
  UserRound,
} from "lucide-react";

export type ApplicationId = "about" | "projects" | "skills" | "experience" | "resume" | "blog" | "terminal" | "contact" | "settings";

export type AppDefinition = {
  id: ApplicationId;
  label: string;
  hint: string;
  icon: LucideIcon;
  tone: "cyan" | "gold" | "violet" | "green" | "blue";
};

export const applications: AppDefinition[] = [
  { id: "about", label: "About Joseph", hint: "Profile preview", icon: UserRound, tone: "cyan" },
  { id: "projects", label: "Projects", hint: "Project library", icon: FolderKanban, tone: "gold" },
  { id: "skills", label: "Skills", hint: "Technical toolkit", icon: BrainCircuit, tone: "violet" },
  { id: "experience", label: "Experience", hint: "Career timeline", icon: BriefcaseBusiness, tone: "gold" },
  { id: "resume", label: "Resume", hint: "Professional record", icon: FileText, tone: "blue" },
  { id: "blog", label: "Blog", hint: "Notes and ideas", icon: BookOpenText, tone: "violet" },
  { id: "terminal", label: "Terminal", hint: "Command interface", icon: SquareTerminal, tone: "green" },
  { id: "contact", label: "Contact", hint: "Get in touch", icon: ContactRound, tone: "blue" },
  { id: "settings", label: "Settings", hint: "System preferences", icon: Settings, tone: "cyan" },
];
