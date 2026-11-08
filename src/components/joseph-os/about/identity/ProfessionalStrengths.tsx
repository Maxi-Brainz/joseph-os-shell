import { Lightbulb, Megaphone } from "lucide-react";
import { featuredStrength, professionalStrengths } from "./identity-data";

export function ProfessionalStrengths() {
  return (
    <section className="identity-block identity-strengths" aria-labelledby="identity-strengths-title">
      <div className="identity-block-heading">
        <p className="identity-eyebrow">04 / How Joseph works</p>
        <h3 id="identity-strengths-title">Professional strengths</h3>
      </div>
      <article className="identity-featured-strength">
        <span className="identity-strength-icon" aria-hidden="true"><Megaphone /></span>
        <div>
          <p className="identity-applied-category">A defining strength</p>
          <h4>{featuredStrength.title}</h4>
          <p>{featuredStrength.description}</p>
        </div>
      </article>
      <ul className="identity-strength-list">
        {professionalStrengths.map((strength) => (
          <li key={strength}><Lightbulb aria-hidden="true" />{strength}</li>
        ))}
      </ul>
    </section>
  );
}