import { philosophyConnection } from "./philosophy-data";

export function PhilosophyConnection() {
  return (
    <footer className="philosophy-connection">
      <p className="philosophy-eyebrow">{philosophyConnection.eyebrow}</p>
      <p>{philosophyConnection.statement}</p>
    </footer>
  );
}