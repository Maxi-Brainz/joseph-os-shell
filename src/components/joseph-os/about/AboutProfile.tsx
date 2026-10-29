import { ProfileIntroduction } from "./ProfileIntroduction";
import { ProfilePortrait } from "./ProfilePortrait";
import { ProfessionalHighlights } from "./ProfessionalHighlights";
import { PersonalSignature } from "./PersonalSignature";

export function AboutProfile() {
  return (
    <div className="about-profile">
      <div className="about-profile-grid">
        <ProfilePortrait />
        <div className="about-profile-copy">
          <ProfileIntroduction />
          <PersonalSignature />
        </div>
      </div>
      <ProfessionalHighlights />
    </div>
  );
}
