import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { contactInfo, offices } from "../../data/prodeskData";

function Footer() {
  const phoneNumber = contactInfo.phone.replace(/\s/g, "");

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center">
              <img
                src="/logos/prodesk-logo.webp"
                alt="ProDesk IT & Engineering Services"
                width="180"
                height="90"
                loading="lazy"
                decoding="async"
                className="h-auto w-[120px] object-contain"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Technology solutions designed to help businesses build,
              scale and operate with confidence.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 transition-colors duration-200 hover:bg-amber-300"
            >
              Start a project

              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#about"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                About
              </a>

              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Services
              </a>

              <a
                href="#why-prodesk"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Why ProDesk
              </a>

              <a
                href="#contact"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Contact
              </a>

              <a
                href="#location"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Locations
              </a>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Capabilities
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Cloud & DevOps
              </a>

              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                AI & Machine Learning
              </a>

              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Cybersecurity
              </a>

              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Software Engineering
              </a>

              <a
                href="#services"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                Data & Analytics
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get in touch
            </h3>

            <div className="mt-5 space-y-5">
              <a
                href={`tel:${phoneNumber}`}
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="text-sm leading-6 text-white/50 transition-colors group-hover:text-white">
                  {contactInfo.phone}
                </span>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="break-all text-sm leading-6 text-white/50 transition-colors group-hover:text-white">
                  {contactInfo.email}
                </span>
              </a>

              <a
                href="#location"
                className="group flex items-start gap-3"
              >
                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-amber-400"
                />

                <span className="text-sm leading-6 text-white/50 transition-colors group-hover:text-white">
                  {offices.length} locations across India
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 sm:flex sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold text-white">
              Have a technology challenge?
            </p>

            <p className="mt-1 text-sm text-white/40">
              Let&apos;s build the right solution for your business.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300 sm:mt-0"
          >
            Talk to our team
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ProDesk IT. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;