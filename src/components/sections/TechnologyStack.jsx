const technologies = [
  {
    name: "AWS",
    logo: "https://cdn.simpleicons.org/amazonwebservices",
    fallback: "AWS",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.simpleicons.org/tensorflow",
    fallback: "TF",
  },
  {
    name: "SAP",
    logo: "https://cdn.simpleicons.org/sap",
    fallback: "SAP",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn.simpleicons.org/googlecloud",
    fallback: "GC",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn.simpleicons.org/microsoftazure",
    fallback: "AZ",
  },
  {
    name: "React",
    logo: "https://cdn.simpleicons.org/react",
    fallback: "R",
  },
  {
    name: "Cisco",
    logo: "https://cdn.simpleicons.org/cisco",
    fallback: "CS",
  },
  {
    name: "Python",
    logo: "https://cdn.simpleicons.org/python",
    fallback: "PY",
  },
  {
    name: "Ericsson",
    logo: "https://cdn.simpleicons.org/ericsson",
    fallback: "ER",
  },
  {
    name: "TCS",
    logo: "https://cdn.simpleicons.org/tcs",
    fallback: "TCS",
  },
  {
    name: "Salesforce",
    logo: "https://cdn.simpleicons.org/salesforce",
    fallback: "SF",
  },
  {
    name: "Accenture",
    logo: "https://cdn.simpleicons.org/accenture",
    fallback: "AC",
  },
  {
    name: "Spark Minda",
    logo: "https://cdn.simpleicons.org/sparkminda",
    fallback: "SM",
  },
  {
    name: "Motherson",
    logo: "https://cdn.simpleicons.org/motherson",
    fallback: "MS",
  },
  {
    name: "Siemens",
    logo: "https://cdn.simpleicons.org/siemens",
    fallback: "SI",
  },
  {
    name: "Bosch",
    logo: "https://cdn.simpleicons.org/bosch",
    fallback: "BS",
  },
];

function TechnologyLogo({ technology }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center">
      <img
        src={technology.logo}
        alt={`${technology.name} logo`}
        width="30"
        height="30"
        loading="lazy"
        decoding="async"
        className="h-7 w-7 object-contain opacity-70 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
        onError={(event) => {
          event.currentTarget.style.display = "none";

          const fallback = event.currentTarget.nextElementSibling;

          if (fallback) {
            fallback.style.display = "flex";
          }
        }}
      />

      <span className="hidden items-center justify-center text-[9px] font-bold text-white/45">
        {technology.fallback}
      </span>
    </div>
  );
}

function TechnologyStack() {
  return (
    <section className="bg-[#050507] py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
            Technology ecosystem
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Technology stack
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
            Modern technologies and enterprise platforms powering the
            solutions we build.
          </p>
        </div>

        {/* Technology List */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-16 lg:gap-y-14">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="group flex items-center justify-center gap-3 transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Logo */}
              <TechnologyLogo technology={technology} />

              {/* Name */}
              <div>
                <p className="text-sm font-medium text-white/55 transition-colors duration-300 group-hover:text-white">
                  {technology.name}
                </p>

                <div className="mt-1 h-px w-4 bg-white/10 transition-all duration-300 group-hover:w-7 group-hover:bg-amber-400/60" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-16 flex max-w-lg items-center gap-4">
          <span className="h-px flex-1 bg-white/[0.07]" />

          <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.28em] text-white/20">
            Always evolving
          </span>

          <span className="h-px flex-1 bg-white/[0.07]" />
        </div>
      </div>
    </section>
  );
}

export default TechnologyStack;