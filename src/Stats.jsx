const STATS = [
  { value: "15+", label: "Years of experience" },
  { value: "10,000+", label: "Happy clients worldwide" },
  { value: "100%", label: "Custom designs" },
];

export default function Stats({ className = "" }) {
  return (
    <section className={`stats-band ${className}`.trim()} aria-label="Bhuvi’s Designers at a glance">
      <div className="wrap">
        <ul className="stats">
          {STATS.map(({ value, label }) => (
            <li key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
