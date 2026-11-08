import { technologyGroups } from "./identity-data";

export function TechnologyStack() {
  return (
    <section className="identity-block" aria-labelledby="identity-stack-title">
      <div className="identity-block-heading">
        <p className="identity-eyebrow">02 / Tools in the stack</p>
        <h3 id="identity-stack-title">Technology stack</h3>
      </div>
      <div className="identity-stack-groups">
        {technologyGroups.map((group, index) => (
          <section className="identity-stack-group" key={group.title} aria-labelledby={`identity-stack-group-${index}`}>
            <h4 id={`identity-stack-group-${index}`}>{group.title}</h4>
            <ul className="identity-technology-list">
              {group.technologies.map((technology) => (
                <li className="identity-technology" key={technology}>{technology}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}