import { AppliedExperience } from "./AppliedExperience";
import { CoreDisciplines } from "./CoreDisciplines";
import { IdentityIntroduction } from "./IdentityIntroduction";
import { ProfessionalStrengths } from "./ProfessionalStrengths";
import { TechnologyStack } from "./TechnologyStack";

export function IdentitySection() {
  return (
    <div className="identity-profile">
      <IdentityIntroduction />
      <CoreDisciplines />
      <TechnologyStack />
      <AppliedExperience />
      <ProfessionalStrengths />
    </div>
  );
}