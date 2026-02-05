const reasons = [
  {
    title: "Execution-focused",
    description:
      "We ship working software, not decks. Every project has clear deliverables and timelines we actually meet.",
  },
  {
    title: "Real systems, real users",
    description:
      "Our projects are built for production. We test with real use cases and iterate based on actual feedback.",
  },
  {
    title: "Quality over volume",
    description:
      "We take on fewer projects to give each one proper attention. No rushing, no cutting corners.",
  },
  {
    title: "Clear communication",
    description:
      "You'll always know where your project stands. Regular updates, honest timelines, no surprises.",
  },
];

export function WhyDSLabs() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">
            Why DS Labs
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] mb-6">
            A different kind
            <br />
            <span className="text-[var(--foreground-muted)]">of studio.</span>
          </h2>
          <p className="text-[var(--foreground-muted)]">
            We&apos;re selective about the projects we take on. When we commit, we deliver.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-[var(--border)] flex items-center justify-center text-[var(--foreground-muted)] text-sm font-medium">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                  {reason.title}
                </h3>
                <p className="text-[var(--foreground-muted)] leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
