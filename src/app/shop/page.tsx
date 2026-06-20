import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "3D Design Shop",
  description:
    "Buy professional 3D garden designs online — patio plans, garden room renders, master plans, and custom site-specific designs.",
};

const categories = [...new Set(products.map((p) => p.category))];

export default function ShopPage() {
  return (
    <>
      <section className="bg-forest py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-sage-light">
            KPW Design Store
          </span>
          <h1 className="mt-2 font-serif text-4xl sm:text-5xl">3D Design Shop</h1>
          <p className="mt-4 max-w-2xl text-lg text-stone/90">
            Professional garden designs and 3D visualisations — the same quality we use
            on our build projects, now available to purchase online. Perfect for DIY
            builds or sharing with your contractor.
          </p>
        </div>
      </section>

      <section className="border-b border-stone bg-cream py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
          <span className="rounded-full bg-forest px-4 py-1.5 text-xs font-semibold text-white">
            All
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-stone-dark bg-white px-4 py-1.5 text-xs font-medium text-forest"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Browse designs"
            description="Add items to your cart and checkout — we'll follow up with payment details and delivery of your design files."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone/50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl text-forest">Need something bespoke?</h2>
          <p className="mt-4 text-foreground/70">
            Our Custom Site-Specific Design package includes a consultation, unlimited
            revisions within scope, and build-ready specifications tailored to your plot.
          </p>
        </div>
      </section>
    </>
  );
}
