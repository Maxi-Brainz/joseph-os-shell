import { useEffect, useState } from "react";

function useLocalDate() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return now;
}

export function getGreeting(hour: number) {
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function Clock({ compact = false }: { compact?: boolean }) {
  const now = useLocalDate();
  const time = now?.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }) ?? "--:--";
  const date = now?.toLocaleDateString([], compact
    ? { day: "2-digit", month: "2-digit", year: "numeric" }
    : { weekday: "long", day: "numeric", month: "long" }) ?? "Loading date";

  if (compact) {
    return <div className="text-right text-[11px] leading-4"><time>{time}</time><span className="block text-mist">{date}</span></div>;
  }

  return (
    <div>
      <p className="text-[11px] font-medium text-mist">{date}</p>
      <time className="mt-2 block font-display text-4xl font-light text-foreground">{time}</time>
      <p className="mt-2 text-sm text-horizon">{now ? getGreeting(now.getHours()) : "Welcome"}, Joseph.</p>
      <p className="mt-0.5 text-xs text-mist">Keep building.</p>
    </div>
  );
}
