"use client";

import Link from "next/link";
import { formatPrice, type Product } from "@/lib/data";
import { useCart } from "./CartProvider";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/shop/${product.slug}`} className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-forest px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>
        {product.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-amber px-3 py-1 text-xs font-semibold text-white">
            Popular
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif text-lg text-forest group-hover:text-amber">
            {product.title}
          </h3>
        </Link>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/70 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-serif text-xl text-forest">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => addItem(product.slug)}
            className="rounded-lg bg-forest px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-forest-light"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
