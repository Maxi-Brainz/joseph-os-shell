import { Activity, FolderKanban, Gauge, HardDrive, MemoryStick, Rocket, Settings, Sun, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "./GlassPanel";
import { Clock } from "./Clock";

const metrics = [
  { label: "CPU", value: 28, icon: Gauge },
  { label: "Memory", value: 46, icon: MemoryStick },
  { label: "Storage", value: 63, icon: HardDrive },
];

export function MiniTerminalWidget() {
  return <GlassPanel className="mini-terminal hidden w-[250px] p-4 lg:block"><p className="font-mono text-[10px] text-signal">joseph@joseph-os:~$</p><p className="mt-2 font-mono text-[11px] text-foreground">Better things take time<span className="terminal-cursor">_</span></p></GlassPanel>;
}

export function InspirationWidget() {
  return <GlassPanel className="inspiration-widget w-[230px] p-4"><div className="flex gap-3"><div className="quote-mark">“</div><div><p className="text-xs leading-relaxed text-foreground/85">The future depends on what you build today.</p><p className="mt-2 text-[10px] text-mist">Daily inspiration</p></div></div></GlassPanel>;
}

export function DateTimeWidget() {
  return <GlassPanel className="w-[230px] p-4"><div className="mb-1 flex items-center justify-between"><span className="text-[10px] uppercase text-mist">Local system time</span><Sun className="h-4 w-4 text-horizon" /></div><Clock /></GlassPanel>;
}

export function SystemMonitorWidget() {
  return <GlassPanel className="w-[230px] p-3.5"><div className="flex items-center justify-between"><p className="widget-title"><Activity /> System monitor</p><span className="preview-badge">Demo</span></div><div className="mt-3 grid grid-cols-3 gap-2">{metrics.map(({ label, value, icon: Icon }) => <div className="metric" key={label}><Icon className="h-3.5 w-3.5 text-signal"/><span className="text-xs font-semibold">{value}%</span><span className="text-[9px] text-mist">{label}</span></div>)}</div><div className="monitor-chart mt-3" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="mt-2 flex justify-between text-[9px] text-mist"><span>Network visualization</span><span>Preview data</span></div></GlassPanel>;
}

export function BuildingWidget() {
  const items = [
    { name: "ViaSanctorum", status: "In workspace" },
    { name: "IntelliFeed360", status: "Project entry" },
    { name: "FastTrack Faith", status: "Project entry" },
  ];
  return <GlassPanel className="building-widget w-[230px] p-3.5"><div className="flex items-center justify-between"><p className="widget-title"><Rocket /> Currently building</p><span className="preview-badge">Preview</span></div><div className="mt-3 space-y-2.5">{items.map((item, index) => <div key={item.name} className="project-entry"><span className={`project-dot project-dot-${index + 1}`}/><div className="min-w-0"><p className="truncate text-[11px] font-medium">{item.name}</p><p className="text-[9px] text-mist">{item.status}</p></div></div>)}</div></GlassPanel>;
}

export function QuickActionsWidget({ onAction }: { onAction: (label: string) => void }) {
  const actions = [{ label: "Open Projects", target: "Projects", icon: FolderKanban }, { label: "Open Terminal", target: "Terminal", icon: TerminalSquare }, { label: "Open Settings", target: "Settings", icon: Settings }];
  return <GlassPanel className="quick-actions-widget w-[230px] p-3.5"><p className="widget-title">Quick actions</p><div className="mt-3 grid grid-cols-3 gap-2">{actions.map(({label, target, icon: Icon}) => <Button key={label} variant="widget" onClick={() => onAction(target)} className="h-[58px] flex-col gap-1 px-1" title={label}><Icon/><span className="text-[9px] leading-tight">{label.replace("Open ", "")}</span></Button>)}</div></GlassPanel>;
}
