import { Search as SearchIcon, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { GlassPanel } from "./GlassPanel";
import { applications } from "./os-data";

export function Search({ open, onClose, onLaunch }: { open: boolean; onClose: () => void; onLaunch: (label: string) => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (open) window.setTimeout(() => inputRef.current?.focus(), 80); else setQuery(""); }, [open]);
  const results = useMemo(() => applications.filter((app) => app.label.toLowerCase().includes(query.toLowerCase())), [query]);
  if (!open) return null;
   return <div className="overlay-layer" onMouseDown={onClose}><GlassPanel className="search-shell" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Joseph OS search"><div className="search-input-row"><SearchIcon/><input ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === "Escape") onClose(); }} placeholder="Search apps, projects, commands, or content…" aria-label="Search Joseph OS"/><Button variant="iconGlass" size="icon" onClick={onClose} aria-label="Close search"><X/></Button></div><div className="px-3 pb-3"><div className="mb-2 flex items-center justify-between px-2"><p className="text-[10px] uppercase text-mist">Applications</p><span className="preview-badge">Phase 2</span></div><div className="grid grid-cols-2 gap-1 sm:grid-cols-3">{results.map((app) => { const Icon = app.icon; return <Button key={app.id} variant="searchResult" onClick={() => onLaunch(app.label)} className="h-auto justify-start px-3 py-2.5"><span className={`app-icon app-icon-${app.tone} h-8 w-8`}><Icon/></span><span className="min-w-0 text-left"><strong className="block truncate text-[11px]">{app.label}</strong><small className="block truncate text-[9px] text-mist">{app.hint}</small></span></Button>; })}</div>{results.length === 0 && <p className="py-7 text-center text-xs text-mist">No Phase 2 launchers match that search.</p>}</div></GlassPanel></div>;
}
