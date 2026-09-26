function Testimonials() {
  return (
    <section
      id="build"
      className="bg-slate-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
          Let&apos;s build
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">
          Have a technology challenge?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
          Tell ProDesk what you are trying to solve and start a conversation
          with the team.
        </p>

        <a
          href="#contact"
          className="mt-8 inline-flex rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-colors duration-200 hover:bg-amber-300"
        >
          Contact ProDesk
        </a>
      </div>
    </section>
  );
}

export default Testimonials;