import { useCallback, useEffect, useRef, useState } from "react";
import { applications } from "./os-data";
import { DesktopIcon } from "./DesktopIcon";
import { MiniTerminalWidget, InspirationWidget, DateTimeWidget, SystemMonitorWidget, BuildingWidget, QuickActionsWidget } from "./Widgets";
import { StartMenu } from "./StartMenu";
import { Search } from "./Search";
import { Taskbar } from "./Taskbar";
import wallpaper from "@/assets/joseph-os-wallpaper.jpg";
import { applicationIdFromLabel } from "./application-registry";
import { WindowLayer, WindowManagerProvider, useWindowManager } from "./WindowManager";

export function Desktop() {
  return <WindowManagerProvider><DesktopWorkspace /></WindowManagerProvider>;
}

function DesktopWorkspace() {
  const [selected, setSelected] = useState<string | null>(null);
  const [startOpen, setStartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const workspaceRef = useRef<HTMLElement>(null);
  const { openApplication, windows } = useWindowManager();
  const launch = useCallback((label: string) => {
    setStartOpen(false); setSearchOpen(false);
    const appId = applicationIdFromLabel(label);
    if (appId) {
      openApplication(appId);
      return;
    }
    const special = label === "Dark Mode" ? "Joseph OS is already using its cinematic dark environment." : `${label} is prepared for a future Joseph OS phase.`;
    setNotice(special); window.setTimeout(() => setNotice(null), 2600);
  }, [openApplication]);
  useEffect(() => {
    const shortcuts = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setStartOpen(false); setSearchOpen(true); }
      if (event.key === "Escape") { setStartOpen(false); setSearchOpen(false); setSelected(null); }
    };
    window.addEventListener("keydown", shortcuts); return () => window.removeEventListener("keydown", shortcuts);
  }, []);

  return <main ref={workspaceRef} className="desktop" onClick={() => setSelected(null)} style={{ backgroundImage: `url(${wallpaper})` }}>
    <div className="desktop-atmosphere" aria-hidden="true"/>
    <section className="desktop-icons" aria-label="Desktop applications">{applications.map((app) => <DesktopIcon key={app.id} app={app} selected={selected === app.id} onSelect={() => setSelected(app.id)} onLaunch={() => launch(app.label)}/>)}</section>
    <div className="terminal-position"><MiniTerminalWidget/></div>
    <section className="desktop-identity" aria-label="Joseph OS"><div className="brand-monogram"><span>J</span><span>O</span></div><h1>JOSEPH OS</h1><p>BUILD <i/> CREATE <i/> IMPACT</p></section>
    <div className="motto" aria-label="Deus Vult"><span>Deus Vult</span><i/><b/></div>
    <aside className="right-widgets" aria-label="Desktop widgets"><InspirationWidget/><DateTimeWidget/><SystemMonitorWidget/><BuildingWidget/><QuickActionsWidget onAction={launch}/></aside>
    <WindowLayer/>
    {notice && <div className="system-notice" role="status"><span className="status-dot"/><p>{notice}</p></div>}
    <Search open={searchOpen} onClose={() => setSearchOpen(false)} onLaunch={launch}/>
    <StartMenu open={startOpen} onClose={() => setStartOpen(false)} onSearch={() => { setStartOpen(false); setSearchOpen(true); }} onLaunch={launch}/>
    <Taskbar startOpen={startOpen} onStart={() => { setSearchOpen(false); setStartOpen((value) => !value); }} onSearch={() => { setStartOpen(false); setSearchOpen(true); }} onLaunch={launch}/>
  </main>;
}
