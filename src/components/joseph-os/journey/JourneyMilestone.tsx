import { ChevronDown } from "lucide-react";
import type { JourneyMilestone } from "./journey-data";
import { JourneyMilestoneDetails } from "./JourneyMilestoneDetails";

const kindLabels = {
  academic: "Academic",
  professional: "Professional",
  training: "Training",
} as const;

export function JourneyMilestone({
  milestone,
  expanded,
  onToggle,
}: {
  milestone: JourneyMilestone;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <li className={`journey-milestone journey-milestone-${milestone.kind}${expanded ? " journey-milestone-expanded" : ""}`}>
      <span className="journey-node" aria-hidden="true" />
      <button
        type="button"
        className="journey-milestone-summary"
        aria-expanded={expanded}
        aria-controls={`journey-${milestone.id}-details`}
        onClick={onToggle}
      >
        <span className="journey-milestone-period">{milestone.periodLabel}</span>
        <span className="journey-milestone-heading">
          <b>{milestone.title}</b>
          <span>{milestone.subtitle}</span>
        </span>
        <span className="journey-milestone-kind">{kindLabels[milestone.kind]}</span>
        <ChevronDown className="journey-chevron" aria-hidden="true" />
      </button>
      {expanded && <JourneyMilestoneDetails milestone={milestone} />}
    </li>
  );
}
