import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { contactInfo } from "../../data/prodeskData";

function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-3xl bg-slate-950">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                Start a conversation
              </p>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
                Have a business challenge worth solving?
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
                Share what you are building, improving or trying to solve.
                The ProDesk team can help you explore the next step.
              </p>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-colors duration-200 hover:bg-amber-300"
              >
                Send an enquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="border-t border-white/10 p-8 sm:p-12 lg:border-l lg:border-t-0">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  Contact
                </p>

                <div className="mt-7 space-y-5">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-3 text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    <Phone
                      size={18}
                      strokeWidth={1.8}
                      className="text-amber-400"
                    />
                    {contactInfo.phone}
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="group flex items-center gap-3 text-sm text-white/75 transition-colors duration-200 hover:text-white"
                  >
                    <Mail
                      size={18}
                      strokeWidth={1.8}
                      className="text-amber-400"
                    />
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="mt-12 border-t border-white/10 pt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  Business hours
                </p>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Monday – Friday
                  <br />
                  09:00 AM – 06:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;