import { BatteryMedium, Volume2, Wifi } from "lucide-react";
import { Clock } from "./Clock";

export function SystemTray() {
  return (
    <div className="system-tray flex shrink-0 items-center gap-2.5 border-l border-glass-border pl-3 text-mist" aria-label="System tray">
      <Wifi className="h-3.5 w-3.5" aria-label="Network available" />
      <Volume2 className="h-3.5 w-3.5" aria-label="Audio on" />
      <BatteryMedium className="h-4 w-4" aria-label="Battery status" />
      <Clock compact />
    </div>
  );
}
