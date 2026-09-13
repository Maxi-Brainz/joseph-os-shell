import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { AppDefinition } from "./os-data";

export function DesktopIcon({ app, selected, onSelect, onLaunch }: {
  app: AppDefinition;
  selected: boolean;
  onSelect: () => void;
  onLaunch: () => void;
}) {
  const Icon = app.icon;
  return (
    <Button
      variant="desktop"
      className={cn("group h-[68px] w-[86px] flex-col gap-1.5 px-1 py-1.5", selected && "desktop-icon-selected")}
      onClick={(event) => { event.stopPropagation(); onSelect(); }}
      onDoubleClick={(event) => { event.stopPropagation(); onLaunch(); }}
      onKeyDown={(event) => { if (event.key === "Enter") onLaunch(); }}
      aria-label={`${app.label}. Double-click to open`}
      title={`${app.label} — double-click to open`}
    >
      <span className={cn("app-icon", `app-icon-${app.tone}`)}><Icon strokeWidth={1.65} /></span>
      <span className="desktop-icon-label max-w-full truncate text-[10px] font-medium text-foreground/90">{app.label}</span>
    </Button>
  );
}
