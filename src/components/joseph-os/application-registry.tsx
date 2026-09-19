import type { ComponentType } from "react";
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
import { applications as desktopApplications, type ApplicationId } from "./os-data";
import { AboutApp } from "./about/AboutApp";
import { PlaceholderApplication } from "./placeholder-apps";

export type { ApplicationId } from "./os-data";

export type ApplicationComponentProps = {
  title: string;
  icon: LucideIcon;
};

export type ApplicationDefinition = {
  id: ApplicationId;
  name: string;
  icon: LucideIcon;
  defaultWidth: number;
  defaultHeight: number;
  minWidth: number;
  minHeight: number;
  resizable: boolean;
  component: ComponentType<ApplicationComponentProps>;
};

const icons: Record<ApplicationId, LucideIcon> = {
  about: UserRound,
  projects: FolderKanban,
  skills: BrainCircuit,
  experience: BriefcaseBusiness,
  resume: FileText,
  blog: BookOpenText,
  terminal: SquareTerminal,
  contact: ContactRound,
  settings: Settings,
};

const dimensions: Record<ApplicationId, Pick<ApplicationDefinition, "defaultWidth" | "defaultHeight" | "minWidth" | "minHeight">> = {
  about: { defaultWidth: 620, defaultHeight: 430, minWidth: 360, minHeight: 250 },
  projects: { defaultWidth: 700, defaultHeight: 470, minWidth: 400, minHeight: 280 },
  skills: { defaultWidth: 640, defaultHeight: 430, minWidth: 380, minHeight: 260 },
  experience: { defaultWidth: 680, defaultHeight: 470, minWidth: 400, minHeight: 280 },
  resume: { defaultWidth: 650, defaultHeight: 460, minWidth: 390, minHeight: 280 },
  blog: { defaultWidth: 680, defaultHeight: 470, minWidth: 400, minHeight: 280 },
  terminal: { defaultWidth: 680, defaultHeight: 420, minWidth: 400, minHeight: 250 },
  contact: { defaultWidth: 580, defaultHeight: 400, minWidth: 350, minHeight: 240 },
  settings: { defaultWidth: 600, defaultHeight: 410, minWidth: 360, minHeight: 250 },
};

export const applicationRegistry = desktopApplications.reduce<Record<ApplicationId, ApplicationDefinition>>((registry, app) => {
  registry[app.id] = {
    id: app.id,
    name: app.label,
    icon: icons[app.id],
    ...dimensions[app.id],
    resizable: true,
    component: app.id === "about" ? AboutApp : PlaceholderApplication,
  };
  return registry;
}, {} as Record<ApplicationId, ApplicationDefinition>);

export function applicationIdFromLabel(label: string) {
  const app = Object.values(applicationRegistry).find((entry) => entry.name === label);
  return app?.id;
}