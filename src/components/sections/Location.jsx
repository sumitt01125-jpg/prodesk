import { useEffect, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { offices } from "../../data/prodeskData";

function Location() {
  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const section = document.getElementById("location");

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapReady(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px",
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    activeOffice.address
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeOffice.address
  )}`;

  return (
    <section id="location" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
            Find us
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Two locations. One technology partner.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500">
            Connect with the ProDesk team at one of our offices.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
          <div className="grid lg:grid-cols-[380px_1fr]">
            {/* Office details */}
            <div className="p-7 sm:p-9">
              <div className="flex flex-wrap gap-2">
                {offices.map((office) => (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setActiveOffice(office)}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition-colors duration-200 ${
                      activeOffice.id === office.id
                        ? "bg-slate-950 text-white"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                  >
                    {office.id === "bengaluru" ? "Bengaluru" : "Noida"}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <MapPin size={20} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-950">
                  {activeOffice.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {activeOffice.address}
                </p>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-slate-800"
                >
                  Get directions

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="relative min-h-[360px] overflow-hidden bg-slate-200 lg:min-h-[500px]">
              {mapReady ? (
                <iframe
                  key={activeOffice.id}
                  title={`Map of ${activeOffice.name}`}
                  src={mapUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full border-0"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-slate-200"
                >
                  <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-600">
                    <MapPin size={15} className="text-amber-600" />
                    Loading map
                  </div>
                </div>
              )}

              <div className="pointer-events-none absolute bottom-5 left-5 max-w-[260px] rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />

                  <span className="text-xs font-bold text-slate-900">
                    ProDesk IT
                  </span>
                </div>

                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  {activeOffice.id === "bengaluru"
                    ? "Bengaluru Corporate Office"
                    : "North India Development Center"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;