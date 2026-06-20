"use client";

import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="mb-8 inline-flex items-center text-sm text-sage hover:text-forest"
        >
          ← Back to shop
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <span className="rounded-full bg-stone px-3 py-1 text-xs font-medium text-forest">
              {product.category}
            </span>
            <h1 className="mt-4 font-serif text-3xl text-forest sm:text-4xl">
              {product.title}
            </h1>
            <p className="mt-2 font-serif text-3xl text-amber">
              {formatPrice(product.price)}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              {product.longDescription}
            </p>

            <h2 className="mt-8 font-serif text-lg text-forest">What&apos;s included</h2>
            <ul className="mt-4 space-y-2">
              {product.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-sage"
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
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => addItem(product.slug)}
                className="rounded-xl bg-forest px-8 py-4 text-sm font-semibold text-white hover:bg-forest-light"
              >
                Add to cart
              </button>
              <Link
                href="/shop/cart"
                className="rounded-xl border border-stone-dark px-8 py-4 text-sm font-semibold text-forest hover:bg-stone"
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
