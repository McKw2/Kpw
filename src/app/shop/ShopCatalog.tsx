"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/data";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ShopCatalog() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((product) => product.category === active);

  return (
    <>
      <section className="border-b border-stone bg-cream py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                active === cat
                  ? "bg-forest text-white"
                  : "border border-stone-dark bg-white text-forest hover:bg-stone"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Browse designs"
            description="Add items to your cart and checkout — we'll follow up with payment details and delivery of your design files."
          />
          {filtered.length === 0 ? (
            <p className="text-center text-foreground/70">
              No designs in this category yet.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
