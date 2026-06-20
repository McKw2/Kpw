import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import QuoteForm from "@/components/QuoteForm";
import { getService, services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative h-[50vh] min-h-[400px]">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/50 to-forest/30" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-12 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="mb-4 inline-flex w-fit items-center text-sm text-stone/80 hover:text-white"
          >
            ← All services
          </Link>
          <h1 className="font-serif text-4xl text-white sm:text-5xl">{service.title}</h1>
          <p className="mt-2 max-w-xl text-lg text-stone/90">{service.tagline}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl text-forest">About this service</h2>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                {service.description}
              </p>

              <h3 className="mt-10 font-serif text-xl text-forest">What&apos;s included</h3>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-foreground/80">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-sage"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {service.slug === "garden-design" && (
                <div className="mt-10 rounded-2xl border border-amber/30 bg-amber/10 p-6">
                  <h3 className="font-serif text-lg text-forest">
                    Prefer to buy a design online?
                  </h3>
                  <p className="mt-2 text-sm text-foreground/70">
                    Browse our 3D design shop for ready-made packages you can purchase
                    instantly — or commission a custom site-specific design.
                  </p>
                  <Link
                    href="/shop"
                    className="mt-4 inline-flex rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-white hover:bg-amber-light"
                  >
                    Visit the shop
                  </Link>
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-stone bg-cream p-8">
              <h3 className="font-serif text-xl text-forest">Get a quote</h3>
              <p className="mt-2 text-sm text-foreground/70">
                Tell us about your {service.title.toLowerCase()} project and we&apos;ll
                get back to you with a free estimate.
              </p>
              <div className="mt-6">
                <QuoteForm service={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stone/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-forest">Other services</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-forest group-hover:text-amber">
                    {s.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
