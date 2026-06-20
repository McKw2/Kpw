import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: `Get a free quote from ${company.name}. Serving ${company.area}.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl">Get a free quote</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone/90">
            Tell us about your project and we&apos;ll get back to you with a no-obligation estimate.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-2xl text-forest">Contact details</h2>
              <ul className="mt-6 space-y-4">
                <li>
                  <span className="block text-sm font-medium text-sage">Email</span>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-lg text-forest hover:text-amber"
                  >
                    {company.email}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-sage">Phone</span>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="text-lg text-forest hover:text-amber"
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-sage">Mobile</span>
                  <a
                    href={`tel:${company.mobile.replace(/\s/g, "")}`}
                    className="text-lg text-forest hover:text-amber"
                  >
                    {company.mobile}
                  </a>
                </li>
                <li>
                  <span className="block text-sm font-medium text-sage">Service area</span>
                  <span className="text-lg text-forest">{company.area}</span>
                </li>
              </ul>

              <div className="mt-10 rounded-2xl border border-amber/30 bg-amber/10 p-6">
                <p className="text-sm text-foreground/80">
                  We accept cash and card payments — making it easier than ever to pay for your
                  landscaping project.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-stone bg-cream p-8">
              <h2 className="font-serif text-xl text-forest">Request your free quote</h2>
              <p className="mt-2 text-sm text-foreground/70">
                Fill in the form below and we&apos;ll be in touch shortly.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
