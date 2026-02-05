const projects = [
  {
    title: "StudySage",
    description: "AI-powered study assistant that works offline and online",
    problem: "Students needed a way to study efficiently without constant internet access",
    outcome: "OCR processing, quiz generation, smart summaries, and PDF analysis in one tool",
    tech: ["Python", "OCR", "AI/ML", "PDF Processing"],
    github: "https://github.com/Sahaj33-op/StudySage-Offline-Online-AI-Note-Assistant",
    featured: true,
  },
  {
    title: "SkillWise",
    description: "AI learning-path generator from resume to roadmap",
    problem: "Career changers struggled to identify skill gaps and learning priorities",
    outcome: "Analyzes resumes and generates personalized skill development roadmaps",
    tech: ["Python", "AI/ML", "Resume Parsing", "Career Mapping"],
    github: "https://github.com/Sahaj33-op/SkillWise",
    featured: true,
  },
  {
    title: "Minecraft Server Manager",
    description: "Cross-platform server management for PC and mobile",
    problem: "Running Minecraft servers required technical knowledge and constant monitoring",
    outcome: "Unified system for managing servers on Windows, Linux, Mac, and Android (Termux)",
    tech: ["Python", "Shell", "Termux", "Cross-Platform"],
    github: "https://github.com/Sahaj33-op/MSM-minecraft-server-manager-win-linux-mac",
    githubTermux: "https://github.com/Sahaj33-op/MSM-minecraft-server-manager-termux",
    featured: true,
  },
  {
    title: "Hypixel SkyBlock Extractor",
    description: "Profile data extraction and analysis tool",
    problem: "Players needed a way to analyze and track their game progression data",
    outcome: "Automated profile extraction with stat analysis and progress tracking",
    tech: ["Python", "API Integration", "Data Analysis"],
    github: "https://github.com/Sahaj33-op/Hypixel-SkyBlock-Profile-Extractor",
    featured: false,
  },
  {
    title: "ServerPulse",
    description: "Lightweight server monitoring and alerting",
    problem: "Small teams needed simple uptime monitoring without complex setup",
    outcome: "Real-time server health monitoring with instant notifications",
    tech: ["Python", "Monitoring", "Alerts", "REST API"],
    github: "https://github.com/Sahaj33-op/ServerPulse",
    featured: false,
  },
];

export function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 bg-[var(--background-secondary)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--foreground-subtle)] mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--foreground)] mb-6">
            Projects we&apos;re
            <br />
            <span className="text-[var(--foreground-muted)]">proud of.</span>
          </h2>
          <p className="text-[var(--foreground-muted)]">
            A curated selection of systems we&apos;ve designed and shipped. Each project solved a real problem.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--foreground-subtle)] transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-medium text-[var(--foreground)]">
                        {project.title}
                      </h3>
                      <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--border)] text-[var(--foreground-muted)]">
                        Featured
                      </span>
                    </div>
                    <p className="text-lg text-[var(--foreground-muted)] mb-4">
                      {project.description}
                    </p>
                    <p className="text-[var(--foreground-subtle)] mb-6">
                      <span className="text-[var(--foreground-muted)]">Problem:</span> {project.problem}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full border border-[var(--border)] text-[var(--foreground-muted)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-[var(--border)] rounded-lg text-[var(--foreground)] hover:bg-[var(--border)] transition-colors shrink-0"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--foreground-subtle)] transition-colors"
              >
                <h3 className="text-xl font-medium text-[var(--foreground)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--foreground-muted)] mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-xs rounded-full border border-[var(--border)] text-[var(--foreground-subtle)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
