import { identityIntroduction } from "./identity-data";

export function IdentityIntroduction() {
  return (
    <header className="identity-introduction">
      <p className="identity-eyebrow">{identityIntroduction.eyebrow}</p>
      <h3>{identityIntroduction.title}</h3>
      <p className="identity-introduction-copy">{identityIntroduction.description}</p>
    </header>
  );
}