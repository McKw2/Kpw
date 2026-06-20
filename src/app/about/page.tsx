import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/data";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${company.name} — over ${company.experience} of eco-friendly landscaping in Scotland.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl sm:text-5xl">About KPW Build</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone/90">
            Eco-friendly, quality landscaping that our clients across Lanarkshire appreciate and trust.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-forest">Who we are</h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                From small neighbourhood gardens to sprawling lawns and commercial spaces,
                we approach every project with care and meticulous detail. We believe in
                building lasting relationships with our clients, getting to know them and
                their personal style so that we can best bring their vision to life.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                With over {company.experience} experience, KPW Build has built a reputation
                of reliability and value. We are the go-to landscaping service in the
                North Lanarkshire area, creating beautiful outdoor spaces with our
                signature touch.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={images.about}
                alt="KPW Build landscaping work"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { stat: "20+", label: "Years experience" },
              { stat: "15yr", label: "Work guarantee" },
              { stat: "100%", label: "Licensed team" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <span className="font-serif text-4xl text-forest">{item.stat}</span>
                <p className="mt-2 text-sm text-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-serif text-3xl text-forest">Let&apos;s work together</h2>
          <p className="mt-4 text-foreground/70">
            Whether you need a full garden build or a 3D design to plan ahead, we&apos;re here to help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-amber px-8 py-4 text-sm font-semibold text-white hover:bg-amber-light"
            >
              Get a quote
            </Link>
            <Link
              href="/shop"
              className="rounded-xl border border-stone-dark px-8 py-4 text-sm font-semibold text-forest hover:bg-stone"
            >
              Browse designs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
