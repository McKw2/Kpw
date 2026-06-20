import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { images } from "@/lib/images";
import {
  company,
  processSteps,
  products,
  services,
} from "@/lib/data";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      <Hero />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Everything your garden needs"
            description="From boundary fencing to full garden transformations — delivered with over two decades of expertise across Scotland."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center rounded-xl bg-forest px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why KPW Build"
            title="Trusted by homeowners across Lanarkshire"
            description="We combine reliability, licensed craftsmanship, and a commitment to quality that keeps our clients coming back."
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Reliable & Trustworthy",
                text: "With over 20 years in the industry, there isn't a job we can't handle — from small repairs to full overhauls.",
              },
              {
                title: "Licensed Professionals",
                text: "Our team are licensed landscaping professionals with a passion for outdoor spaces and continuous improvement.",
              },
              {
                title: "Quality Guaranteed",
                text: `We stand behind every project with a ${company.guarantee}, working meticulously until you're fully satisfied.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <h3 className="font-serif text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                label="Our Process"
                title="From vision to finished garden"
                description="Whether you need a full build or just a design to hand to your contractor, we guide you through every stage."
              />
              <div className="space-y-6">
                {processSteps.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                      {step.step}
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-forest">{step.title}</h3>
                      <p className="mt-1 text-sm text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={images.process}
                alt="Garden design planning"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Work"
            title="Recent projects"
            description="A selection of landscaping, paving, and garden room projects completed across Scotland."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {images.gallery.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`KPW Build project ${i + 1}`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="3D Design Shop"
            title="Buy professional garden designs online"
            description="Browse ready-to-use 3D design packages or commission a custom plan — the same quality visuals we use on our build projects."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center rounded-xl bg-amber px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-amber-light"
            >
              Visit the shop
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-forest">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-16">
                <h2 className="font-serif text-3xl text-white sm:text-4xl">
                  Ready to start your project?
                </h2>
                <p className="mt-4 text-stone/90">
                  Get a free, no-obligation quote for landscaping work — or browse our
                  3D design shop to plan your garden from home.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-xl bg-amber px-8 py-4 text-sm font-semibold text-white hover:bg-amber-light"
                  >
                    Get a free quote
                  </Link>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="rounded-xl border border-white/30 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    Call {company.phone}
                  </a>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0">
                <img
                  src={images.ctaGardenRoom}
                  alt="Garden room project"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
