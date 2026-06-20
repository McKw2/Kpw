import type { Metadata } from "next";
import ShopCatalog from "./ShopCatalog";

export const metadata: Metadata = {
  title: "3D Design Shop",
  description:
    "Buy professional 3D garden designs online — patio plans, garden room renders, master plans, and custom site-specific designs.",
};

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

      <ShopCatalog />

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
