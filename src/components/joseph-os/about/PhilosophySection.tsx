import { FaithConvictionPrinciple } from "./FaithConvictionPrinciple";
import { PhilosophyConnection } from "./PhilosophyConnection";
import { PhilosophyIntroduction } from "./PhilosophyIntroduction";
import { PurposePrinciple } from "./PurposePrinciple";

export function PhilosophySection() {
  return (
    <div className="philosophy">
      <PhilosophyIntroduction />
      <div className="philosophy-principles">
        <PurposePrinciple />
        <FaithConvictionPrinciple />
      </div>
      <PhilosophyConnection />
    </div>
  );
}