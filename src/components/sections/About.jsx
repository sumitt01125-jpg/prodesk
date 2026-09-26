import { ArrowUpRight, Check } from "lucide-react";

const points = [
  "Business-focused technology consulting",
  "Engineering across modern software platforms",
  "Security, scalability and maintainability from the start",
];

function About() {
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-10">
        {/* Visual */}
        <div className="relative min-h-[430px] overflow-hidden rounded-3xl bg-slate-950 p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-30"
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
          </div>

          <div className="relative flex h-full flex-col justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
              ProDesk IT
            </span>

            <div>
              <p className="max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                Technology should solve complexity,
                <span className="text-amber-400">
                  {" "}
                  not create more of it.
                </span>
              </p>
            </div>

            <div className="flex items-end justify-between">
              <span className="text-sm text-white/40">
                Engineering • Design • Delivery
              </span>

              <span className="text-5xl font-bold text-white/10">
                01
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            About ProDesk
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            A technology partner for ambitious businesses.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500">
            ProDesk IT works with businesses to solve technology challenges
            through software engineering, modern platforms and digital
            transformation.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <Check size={13} strokeWidth={2.5} />
                </span>

                <p className="text-sm font-medium leading-6 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-800"
          >
            Talk to our team
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;