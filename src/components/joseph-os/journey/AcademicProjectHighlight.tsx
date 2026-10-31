import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { AcademicProject } from "./journey-data";

export function AcademicProjectHighlight({ project }: { project: AcademicProject }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="journey-project">
      <button type="button" className="journey-project-toggle" aria-expanded={open} aria-controls="journey-academic-project-details" onClick={() => setOpen((current) => !current)}>
        <span>Final-year research project</span>
        <b>{project.title}</b>
        <ChevronDown className="journey-chevron" aria-hidden="true" />
      </button>
      {open && (
        <div id="journey-academic-project-details" className="journey-project-details">
          <p>{project.context}</p>
          <p className="journey-project-dataset">{project.dataset}</p>
          <ul className="journey-project-results">
            {project.results.map((result) => (
              <li key={result.label}>
                <b>{result.value}</b>
                <span>{result.label}</span>
              </li>
            ))}
          </ul>
          <p className="journey-project-note">{project.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
