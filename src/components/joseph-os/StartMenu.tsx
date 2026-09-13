import { LogOut, Power, Search, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "./GlassPanel";
import { applications } from "./os-data";

export function StartMenu({ open, onClose, onSearch, onLaunch }: { open: boolean; onClose: () => void; onSearch: () => void; onLaunch: (label: string) => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (!open) return;
    const close = (event: MouseEvent) => { if (panelRef.current && !panelRef.current.contains(event.target as Node)) onClose(); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("mousedown", close); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("mousedown", close); document.removeEventListener("keydown", escape); };
  }, [open, onClose]);
  if (!open) return null;
  const visible = applications.filter((app) => app.label.toLowerCase().includes(query.toLowerCase()));
  return <GlassPanel ref={panelRef} className="start-menu" role="dialog" aria-label="Joseph OS Start menu"><Button variant="startSearch" className="start-search" onClick={onSearch}><Search/><span className="min-w-0 flex-1 text-left text-[11px]">Search Joseph OS</span><kbd>⌘ K</kbd></Button><div className="px-5 pt-4"><div className="flex items-center justify-between"><p className="start-heading">Pinned</p><span className="preview-badge">Phase 1</span></div><div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-5">{visible.slice(0,10).map((app) => { const Icon=app.icon; return <Button key={app.id} variant="startApp" onClick={() => onLaunch(app.label)} className="h-[66px] flex-col gap-1 px-1"><span className={`app-icon app-icon-${app.tone} h-8 w-8`}><Icon/></span><span className="max-w-full truncate text-[9px]">{app.label}</span></Button>; })}</div><div className="mt-4 border-t border-glass-border pt-3"><p className="start-heading">Recommended</p><div className="mt-2 grid gap-1 sm:grid-cols-2"><Button variant="recommendation" className="recommendation" onClick={() => onLaunch("ViaSanctorum")}><span className="project-dot project-dot-1"/><span><strong>ViaSanctorum</strong><small>Project preview</small></span></Button><Button variant="recommendation" className="recommendation" onClick={() => onLaunch("Resume")}><span className="project-dot project-dot-2"/><span><strong>Resume</strong><small>Application placeholder</small></span></Button></div></div></div><div className="start-footer"><div className="flex min-w-0 items-center gap-2"><div className="profile-mark">JO</div><div className="min-w-0"><p className="truncate text-[11px] font-medium">Joseph Ogakwu</p><p className="text-[9px] text-mist">Developer • Builder</p></div></div><div className="flex shrink-0 gap-1"><Button variant="iconGlass" size="icon" onClick={() => onLaunch("Settings")} aria-label="Settings"><Settings/></Button><Button variant="iconGlass" size="icon" onClick={() => onLaunch("Sign out")} aria-label="Sign out"><LogOut/></Button><Button variant="iconGlass" size="icon" onClick={() => onLaunch("Power")} aria-label="Power"><Power/></Button></div></div></GlassPanel>;
}
