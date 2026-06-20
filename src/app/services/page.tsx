import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { company, processSteps, services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Professional landscaping services in Scotland — fencing, patios, garden rooms, driveways, and CAD garden design.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-sage-light">
            What we do
          </span>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl">Our Services</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone/90">
            Comprehensive landscaping and outdoor construction across {company.area}.
            Every project is approached with care, precision, and eco-friendly practices.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How we work"
            title="Our proven process"
            description="From the first site visit to the final planting, we keep you informed and involved at every stage."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-stone bg-white p-6 text-center shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 font-serif text-lg text-forest">{step.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-forest">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Get in touch for a free consultation — we&apos;ll help you find the right
            solution for your garden and budget.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-amber px-8 py-4 text-sm font-semibold text-white hover:bg-amber-light"
          >
            Request a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
