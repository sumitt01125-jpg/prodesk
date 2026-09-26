const stats = [
  {
    value: "15+",
    label: "Years of engineering excellence",
  },
  {
    value: "300+",
    label: "Enterprise-grade projects delivered",
  },
  {
    value: "100%",
    label: "On-time delivery",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-8 text-center first:pt-0 last:pb-0 sm:px-8 sm:py-4"
            >
              <p className="text-4xl font-semibold tracking-tight sm:text-5xl">
                {stat.value}
              </p>

              <p className="mx-auto mt-4 max-w-[220px] text-sm font-medium uppercase leading-6 tracking-wide text-amber-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;