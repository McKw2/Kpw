"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images } from "@/lib/images";
import { useCart } from "./CartProvider";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/shop", label: "3D Design Shop", match: (path: string) => path === "/shop" || (path.startsWith("/shop/") && path !== "/shop/cart") },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string, match?: (path: string) => boolean) {
  if (match) return match(pathname);
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] isolate border-b border-stone/60 bg-cream/95 backdrop-blur-md">
      <div className="relative z-[100] mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={images.logo}
            alt="KPW Build"
            className="h-10 w-10 rounded-lg object-contain"
          />
          <div className="leading-tight">
            <span className="block font-serif text-lg text-forest">KPW Build</span>
            <span className="hidden text-xs text-sage sm:block">
              Landscaping & 3D Design
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                isActive(pathname, item.href, item.match)
                  ? "bg-forest text-white"
                  : "text-forest hover:bg-stone"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/shop/cart"
            className={`relative ml-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors ${
              pathname === "/shop/cart"
                ? "bg-forest-light"
                : "bg-amber hover:bg-amber-light"
            }`}
          >
            Cart
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-forest text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-[101] rounded-lg p-2 text-forest md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[90] bg-forest/20 md:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <nav className="relative z-[101] border-t border-stone bg-cream px-4 py-4 md:hidden">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                  isActive(pathname, item.href, item.match)
                    ? "bg-forest text-white"
                    : "text-forest hover:bg-stone"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop/cart"
              className={`mt-2 block rounded-lg px-4 py-3 text-center text-sm font-semibold text-white ${
                pathname === "/shop/cart" ? "bg-forest-light" : "bg-amber"
              }`}
            >
              Cart {itemCount > 0 && `(${itemCount})`}
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}
