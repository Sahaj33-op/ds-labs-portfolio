const team = [
  {
    name: "Sahaj",
    role: "AI & Backend Engineering",
    focus: "AI systems, automation, backend engineering, tooling",
    strength: "Designing and shipping complex systems end-to-end, from idea to deployment",
  },
  {
    name: "Divy Viradiya",
    role: "Web Development",
    focus: "Web development, implementation, collaboration",
    strength: "Reliable execution, frontend/backend support, project delivery",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] mb-6">
            The studio.
          </h2>
        </div>

        {/* Studio Description */}
        <div className="max-w-3xl mb-20">
          <p className="text-xl text-[var(--foreground-muted)] leading-relaxed mb-6">
            DS Labs is a small, focused digital studio. We build AI tools, web applications,
            and backend systems for clients who prioritize quality and reliability.
          </p>
          <p className="text-[var(--foreground-muted)] leading-relaxed">
            We&apos;re intentionally selective. Taking on fewer projects means giving each one
            the attention it deserves. No account managers, no handoffs between teams.
            When you work with us, you work directly with the people building your product.
          </p>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-8">
            The Team
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]"
              >
                <div className="mb-6">
                  <h4 className="text-xl font-medium text-[var(--foreground)] mb-1">
                    {member.name}
                  </h4>
                  <p className="text-[var(--foreground-muted)]">{member.role}</p>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-[var(--foreground-subtle)] mb-1">Focus</p>
                    <p className="text-[var(--foreground-muted)]">{member.focus}</p>
                  </div>
                  <div>
                    <p className="text-[var(--foreground-subtle)] mb-1">Strength</p>
                    <p className="text-[var(--foreground-muted)]">{member.strength}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
