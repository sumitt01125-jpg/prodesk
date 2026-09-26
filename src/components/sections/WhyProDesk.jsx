import {
  ArrowRight,
  Gauge,
  Lock,
  Layers,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Gauge,
    title: "Built for performance",
    text: "Engineering decisions focus on reliability, maintainability and real-world performance.",
  },
  {
    icon: Lock,
    title: "Security-conscious",
    text: "Security is considered throughout the technology lifecycle rather than added at the end.",
  },
  {
    icon: Layers,
    title: "End-to-end capability",
    text: "Bring product, software, cloud and technology capabilities together under one partner.",
  },
  {
    icon: Users,
    title: "Business-first thinking",
    text: "Technology choices should support the actual business problem, not technology for its own sake.",
  },
];

function WhyProDesk() {
  return (
    <section
      id="why-prodesk"
      className="bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              Why ProDesk
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Less complexity. Better technology decisions.
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-950"
          >
            Start a conversation

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Reasons */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-200 p-7 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"
            >
              <Icon
                size={23}
                strokeWidth={1.8}
                className="text-amber-600"
              />

              <h3 className="mt-7 text-lg font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyProDesk;