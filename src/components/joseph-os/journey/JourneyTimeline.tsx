import { useState } from "react";
import type { JourneyMilestone as JourneyMilestoneData } from "./journey-data";
import { JourneyMilestone } from "./JourneyMilestone";

export function JourneyTimeline({ milestones }: { milestones: JourneyMilestoneData[] }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <ol className="journey-timeline">
      {milestones.map((milestone) => (
        <JourneyMilestone
          key={milestone.id}
          milestone={milestone}
          expanded={expandedId === milestone.id}
          onToggle={() => setExpandedId((current) => (current === milestone.id ? null : milestone.id))}
        />
      ))}
    </ol>
  );
}
