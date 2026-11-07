import { philosophyIntroduction } from "./philosophy-data";

export function PhilosophyIntroduction() {
  return (
    <header className="philosophy-introduction">
      <p className="philosophy-eyebrow">{philosophyIntroduction.eyebrow}</p>
      <h3>{philosophyIntroduction.statement}</h3>
      <p className="philosophy-introduction-copy">{philosophyIntroduction.description}</p>
    </header>
  );
}