import { ArrowRight, CircleCheck, Lightbulb } from "lucide-react";
import { purposePrinciple } from "./philosophy-data";

export function PurposePrinciple() {
  return (
    <article className="philosophy-principle philosophy-principle-purpose" aria-labelledby="philosophy-purpose-title">
      <div className="philosophy-principle-index" aria-hidden="true">{purposePrinciple.number}</div>
      <div className="philosophy-principle-copy">
        <p className="philosophy-eyebrow">Principle one</p>
        <h4 id="philosophy-purpose-title">{purposePrinciple.title}</h4>
        <div className="philosophy-paragraphs">
          {purposePrinciple.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="philosophy-purpose-motif" aria-hidden="true">
          <span><Lightbulb /><i>Idea</i></span>
          <ArrowRight className="philosophy-motif-arrow" />
          <span><CircleCheck /><i>Meaningful value</i></span>
        </div>
      </div>
    </article>
  );
}