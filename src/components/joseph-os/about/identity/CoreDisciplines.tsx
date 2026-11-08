import { coreDisciplines } from "./identity-data";

export function CoreDisciplines() {
  return (
    <section className="identity-block" aria-labelledby="identity-disciplines-title">
      <div className="identity-block-heading">
        <p className="identity-eyebrow">01 / What Joseph works across</p>
        <h3 id="identity-disciplines-title">Core disciplines</h3>
      </div>
      <ul className="identity-disciplines">
        {coreDisciplines.map((discipline) => (
          <li key={discipline.number} className="identity-discipline">
            <span className="identity-discipline-number">{discipline.number}</span>
            <div>
              <h4>{discipline.title}</h4>
              <p>{discipline.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}