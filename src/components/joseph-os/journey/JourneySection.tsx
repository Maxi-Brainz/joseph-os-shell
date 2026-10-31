import { JourneyTimeline } from "./JourneyTimeline";
import { journeyMilestones } from "./journey-data";

export function JourneySection() {
  return (
    <div className="journey">
      <p className="journey-intro">
        A chronological view of Joseph’s journey — academic foundations, hands-on engineering,
        professional leadership and continuing learning. Select a milestone to explore its details.
      </p>
      <JourneyTimeline milestones={journeyMilestones} />
    </div>
  );
}
