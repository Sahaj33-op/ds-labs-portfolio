export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Studio Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--success)]"></span>
          <span className="text-sm text-[var(--foreground-muted)]">
            Available for select projects
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-[var(--foreground)]">
          We build software
          <br />
          <span className="text-[var(--foreground-muted)]">that works.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl mx-auto mb-12">
          DS Labs is a selective digital studio specializing in AI tools, web applications,
          and backend systems. We partner with clients who value quality over speed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-4 bg-[var(--accent)] text-[var(--background)] rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-colors w-full sm:w-auto text-center"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="px-8 py-4 border border-[var(--border)] text-[var(--foreground)] rounded-lg font-medium hover:bg-[var(--border-subtle)] transition-colors w-full sm:w-auto text-center"
          >
            View Work
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[var(--foreground-muted)] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
