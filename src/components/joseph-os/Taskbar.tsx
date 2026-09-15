import { Github, Globe2, Search, SquareTerminal, FolderKanban } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SystemTray } from "./SystemTray";
import { useWindowManager } from "./WindowManager";

function JosephMark() { return <span className="joseph-mark" aria-hidden="true"><i/><b/></span>; }

export function Taskbar({ startOpen, onStart, onSearch, onLaunch }: { startOpen: boolean; onStart: () => void; onSearch: () => void; onLaunch: (label: string) => void }) {
  const { windows, activeWindowId } = useWindowManager();
  const shortcuts = [{ label: "Projects", icon: FolderKanban }, { label: "Terminal", icon: SquareTerminal }, { label: "GitHub", icon: Github }, { label: "Browser", icon: Globe2 }];
  return <div className="taskbar-shell"><div className="taskbar-inner"><div className="desktop-status hidden min-w-0 items-center gap-2 text-[10px] text-mist md:flex"><span className="status-dot"/> <span className="truncate">Joseph OS · Desktop ready</span></div><nav className="taskbar-apps" aria-label="Taskbar"><Button variant="taskbar" size="icon" onClick={onStart} aria-pressed={startOpen} aria-label="Open Joseph OS Start menu" title="Start"><JosephMark/></Button><Button variant="taskbar" size="icon" onClick={onSearch} aria-label="Search" title="Search"><Search/></Button><span className="taskbar-divider"/>{shortcuts.map(({ label, icon: Icon }) => { const runningWindow = windows.find((window) => window.title === label); const isActive = runningWindow?.windowId === activeWindowId; return <Button key={label} variant="taskbar" size="icon" className={runningWindow ? "taskbar-running" : undefined} onClick={() => onLaunch(label)} aria-pressed={isActive} aria-label={label} title={runningWindow ? `${label} is open` : label}><Icon/></Button>; })}</nav><SystemTray/></div></div>;
}
