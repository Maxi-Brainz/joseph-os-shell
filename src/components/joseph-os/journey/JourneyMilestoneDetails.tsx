import type { JourneyMilestone } from "./journey-data";
import { AcademicProjectHighlight } from "./AcademicProjectHighlight";

export function JourneyMilestoneDetails({ milestone }: { milestone: JourneyMilestone }) {
  return (
    <div id={`journey-${milestone.id}-details`} className="journey-milestone-details" role="region" aria-label={`${milestone.title} details`}>
      {milestone.narrative && <p className="journey-narrative">{milestone.narrative}</p>}
      <div className="journey-entries">
        {milestone.entries.map((entry) => (
          <article key={entry.organization} className="journey-entry">
            <p className="journey-entry-org">{entry.organization}</p>
            <p className="journey-entry-role">
              {entry.role}
              <i aria-hidden="true">·</i>
              {entry.period}
            </p>
            {entry.narrative && <p className="journey-entry-narrative">{entry.narrative}</p>}
            {entry.points.length > 0 && (
              <ul className="journey-entry-points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {entry.note && <p className="journey-entry-note">{entry.note}</p>}
          </article>
        ))}
      </div>
      {milestone.project && <AcademicProjectHighlight project={milestone.project} />}
    </div>
  );
}
