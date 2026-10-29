const highlights = [
  "Computer Science",
  "Software Development",
  "IT Infrastructure",
  "Digital Innovation",
];

export function ProfessionalHighlights() {
  return (
    <div className="about-profile-highlights">
      <p>Professional highlights</p>
      <ul className="about-profile-highlight-list">
        {highlights.map((highlight, index) => (
          <li key={highlight} className="about-profile-highlight">
            <span aria-hidden="true" />
            <b>{highlight}</b>
            <i>{String(index + 1).padStart(2, "0")}</i>
          </li>
        ))}
      </ul>
    </div>
  );
}
