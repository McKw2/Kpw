"use client";

import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { formatPrice } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, total, updateQuantity, removeItem, getProduct } = useCart();

  const productList = items
    .map((item) => {
      const product = getProduct(item.slug);
      return product ? `${product.title} x${item.quantity} (${formatPrice(product.price * item.quantity)})` : null;
    })
    .filter(Boolean)
    .join(", ");

  if (items.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h1 className="font-serif text-3xl text-forest">Your cart is empty</h1>
          <p className="mt-4 text-foreground/70">
            Browse our 3D design packages and add items to get started.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex rounded-xl bg-forest px-8 py-4 text-sm font-semibold text-white hover:bg-forest-light"
          >
            Browse the shop
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl text-forest sm:text-4xl">Your cart</h1>

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            {items.map((item) => {
              const product = getProduct(item.slug);
              if (!product) return null;
              return (
                <div
                  key={item.slug}
                  className="flex gap-4 rounded-2xl border border-stone bg-white p-4 shadow-sm"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="font-serif text-lg text-forest hover:text-amber"
                    >
                      {product.title}
                    </Link>
                    <p className="text-sm text-foreground/70">{formatPrice(product.price)} each</p>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-dark text-forest hover:bg-stone"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-lg border border-stone-dark text-forest hover:bg-stone"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-forest">
                          {formatPrice(product.price * item.quantity)}
                        </span>
                        <button
                          type="button"
                          onClick={() => removeItem(item.slug)}
                          className="text-sm text-red-600 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="rounded-2xl bg-forest p-6 text-white">
              <div className="flex items-center justify-between">
                <span className="text-lg">Total</span>
                <span className="font-serif text-2xl">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-stone bg-cream p-8">
            <h2 className="font-serif text-xl text-forest">Complete your order</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Submit your details and we&apos;ll send payment instructions and begin your
              design delivery.
            </p>
            <div className="mt-6">
              <QuoteForm productList={productList} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
