import type { LucideIcon } from "lucide-react";

export function PlaceholderApplication({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="placeholder-application">
      <div className="placeholder-application-mark">
        <Icon />
      </div>
      <div>
        <p className="placeholder-kicker">Joseph OS application</p>
        <h2>{title}</h2>
        <p className="placeholder-copy">
          The full {title} experience is coming in a future phase.
        </p>
      </div>
    </div>
  );
}