import { faithPrinciple } from "./philosophy-data";

export function FaithConvictionPrinciple() {
  return (
    <article className="philosophy-principle philosophy-principle-faith" aria-labelledby="philosophy-faith-title">
      <div className="philosophy-principle-index" aria-hidden="true">{faithPrinciple.number}</div>
      <div className="philosophy-principle-copy">
        <p className="philosophy-eyebrow">Principle two</p>
        <h4 id="philosophy-faith-title">{faithPrinciple.title}</h4>
        <div className="philosophy-paragraphs">
          {faithPrinciple.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="philosophy-personal-signature"><span aria-hidden="true">✠</span> DEUS VULT</p>
      </div>
    </article>
  );
}