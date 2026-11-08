import { useState } from "react";
import { ChevronDown, RadioTower } from "lucide-react";
import { Button } from "@/components/ui/button";
import { appliedAreas } from "./identity-data";

export function AppliedExperience() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  return (
    <section className="identity-block" aria-labelledby="identity-applied-title">
      <div className="identity-block-heading">
        <p className="identity-eyebrow">03 / Engineering beyond the stack</p>
        <h3 id="identity-applied-title">Applied experience</h3>
      </div>
      <ul className="identity-applied-list">
        {appliedAreas.map((area, index) => {
          const expanded = expandedArea === area.title;
          const detailsId = `identity-applied-details-${index}`;
          return (
            <li className="identity-applied-item" key={area.title}>
              <p className="identity-applied-category">{area.category}</p>
              <h4>{area.title}</h4>
              <p className="identity-applied-description">{area.description}</p>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="identity-context-toggle"
                aria-expanded={expanded}
                aria-controls={detailsId}
                onClick={() => setExpandedArea(expanded ? null : area.title)}
              >
                <RadioTower aria-hidden="true" />
                Journey context
                <ChevronDown className={expanded ? "identity-context-chevron identity-context-chevron-open" : "identity-context-chevron"} aria-hidden="true" />
              </Button>
              {expanded && <p id={detailsId} className="identity-applied-context">{area.journeyContext}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}