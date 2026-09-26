import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Palette,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Reliable cloud infrastructure, automation and deployment workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description:
      "AI systems and automation designed around practical business problems.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Security-conscious engineering for applications, systems and data.",
  },
  {
    icon: Code2,
    title: "Software Engineering",
    description:
      "Modern applications and backend systems built for long-term reliability.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Data solutions that help teams understand operations and make decisions.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Clear, usable digital experiences built around real user needs.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            What we do
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Technology capabilities built around your business.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            From product engineering to cloud, AI and security, bring the right
            technical capabilities together without unnecessary complexity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-lg hover:shadow-slate-900/[0.04] sm:p-7"
            >
              <div className="absolute left-6 right-6 top-0 h-px bg-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-7 sm:right-7" />

              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-amber-400 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-slate-950">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-6 text-base font-bold tracking-[-0.015em] text-slate-950 sm:text-lg">
                {title}
              </h3>

              <p className="mt-2.5 max-w-sm text-sm leading-6 text-slate-500">
                {description}
              </p>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors duration-200 group-hover:text-slate-700">
                  Explore
                </span>

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-slate-950 group-hover:bg-slate-950 group-hover:text-white">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;