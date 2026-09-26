import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  ShieldCheck,
} from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#07090f] text-white"
    >
      {/* Background Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute -left-52 top-40 h-[420px] w-[420px] rounded-full bg-amber-400/[0.04] blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-52 -top-40 h-[500px] w-[500px] rounded-full bg-indigo-500/[0.04] blur-[110px]"
      />

      {/* Hero Container */}
      <div className="relative mx-auto flex min-h-screen max-w-[1440px] items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10 lg:pt-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT SIDE */}
          <div className="max-w-2xl">

            {/* Small Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2 text-xs font-medium text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Technology & engineering partner
            </div>

            {/* Main Heading */}
            <h1 className="text-[clamp(3rem,5.5vw,6rem)] font-medium leading-[0.98] tracking-[-0.055em]">
              Technology,

              <span className="block text-white/90">
                built for what&apos;s
              </span>

              <span className="block text-amber-400">
                next.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-[16px] font-normal leading-7 text-white/50 sm:text-[17px]">
              ProDesk helps businesses design, build and evolve reliable
              digital products across software engineering, cloud, AI and
              security.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-amber-300"
              >
                Discuss your project

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/70 transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Explore capabilities

                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Technology Line */}
            <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-6">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-white/45">
                  Engineering
                </span>
              </div>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="text-xs text-white/45">
                  Cloud
                </span>
              </div>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span className="text-xs text-white/45">
                  AI
                </span>
              </div>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-xs text-white/45">
                  Security
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            aria-hidden="true"
            className="relative mx-auto hidden h-[540px] w-full max-w-[560px] lg:block"
          >
            {/* Main Glow */}
            <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/[0.045] blur-[70px]" />

            {/* Main Card */}
            <div className="absolute inset-[35px] overflow-hidden rounded-[30px] border border-white/[0.09] bg-white/[0.025] shadow-xl shadow-black/20">

              {/* Card Grid */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Card Header */}
              <div className="relative flex items-center justify-between border-b border-white/[0.08] px-6 py-5">
                <div>
                  <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/30">
                    ProDesk / Technology
                  </p>

                  <p className="mt-1.5 text-sm font-medium text-white/75">
                    Digital capabilities
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[9px] font-medium text-white/40">
                    CONNECTED
                  </span>
                </div>
              </div>

              {/* Architecture Area */}
              <div className="relative h-[310px]">

                {/* Horizontal Connection */}
                <div className="absolute left-1/2 top-1/2 h-px w-[300px] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Vertical Connection */}
                <div className="absolute left-1/2 top-1/2 h-[250px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                {/* Diagonal Connections */}
                <div className="absolute left-1/2 top-1/2 h-px w-[210px] -translate-x-1/2 rotate-[32deg] bg-white/[0.06]" />

                <div className="absolute left-1/2 top-1/2 h-px w-[210px] -translate-x-1/2 -rotate-[32deg] bg-white/[0.06]" />

                {/* Center ProDesk */}
                <div className="absolute left-1/2 top-1/2 flex h-[105px] w-[105px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-amber-300/30 bg-amber-400 shadow-[0_0_50px_rgba(251,191,36,0.12)]">
                  <div className="text-center">
                    <p className="text-lg font-semibold tracking-tight text-slate-950">
                      ProDesk
                    </p>

                    <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-950/45">
                      Technology
                    </p>
                  </div>
                </div>

                {/* Software */}
                <div className="absolute left-5 top-12">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0d1018]/95 px-4 py-3 shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                      <Code2 size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/80">
                        Software
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        Engineering
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cloud */}
                <div className="absolute right-5 top-12">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0d1018]/95 px-4 py-3 shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                      <Cloud size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/80">
                        Cloud
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        Infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI */}
                <div className="absolute bottom-10 left-8">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0d1018]/95 px-4 py-3 shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-400/10 text-violet-300">
                      <BrainCircuit size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/80">
                        AI / ML
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        Intelligence
                      </p>
                    </div>
                  </div>
                </div>

                {/* Security */}
                <div className="absolute bottom-10 right-8">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0d1018]/95 px-4 py-3 shadow-lg">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                      <ShieldCheck size={17} />
                    </div>

                    <div>
                      <p className="text-xs font-medium text-white/80">
                        Security
                      </p>

                      <p className="mt-0.5 text-[9px] text-white/30">
                        Protection
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Process */}
              <div className="relative border-t border-white/[0.08] px-6 py-5">
                <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/25">
                  How we approach technology
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <p className="text-xs font-medium text-white/70">
                    Strategy
                  </p>

                  <div className="h-px flex-1 bg-white/[0.08]" />

                  <p className="text-xs font-medium text-white/70">
                    Engineering
                  </p>

                  <div className="h-px flex-1 bg-white/[0.08]" />

                  <p className="text-xs font-medium text-white/70">
                    Scale
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Top Label */}
            <div className="absolute -right-1 top-20 rounded-full border border-white/[0.08] bg-[#0d1018] px-3.5 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />

                <span className="text-[9px] font-medium tracking-wide text-white/45">
                  BUILDING WHAT&apos;S NEXT
                </span>
              </div>
            </div>

            {/* Floating Bottom Label */}
            <div className="absolute -left-1 bottom-24 rounded-full border border-white/[0.08] bg-[#0d1018] px-3.5 py-2 shadow-lg">
              <span className="text-[9px] font-medium tracking-wide text-white/40">
                ENGINEERING × BUSINESS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;