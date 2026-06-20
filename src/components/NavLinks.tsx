"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

const nav = [
  { href: "/services", label: "Services" },
  {
    href: "/shop",
    label: "3D Design Shop",
    match: (path: string) =>
      path === "/shop" || (path.startsWith("/shop/") && path !== "/shop/cart"),
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function isNavActive(
  pathname: string,
  href: string,
  match?: (path: string) => boolean
) {
  if (match) return match(pathname);
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function navLinkClass(active: boolean) {
  return `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
    active ? "bg-forest text-white" : "text-forest hover:bg-stone"
  }`;
}

export function CartNavLink({ className = "" }: { className?: string }) {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const active = pathname === "/shop/cart";

  return (
    <Link
      href="/shop/cart"
      className={`relative rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors ${
        active ? "bg-forest-light" : "bg-amber hover:bg-amber-light"
      } ${className}`}
    >
      Cart
      {itemCount > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-forest text-xs text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

export { nav };
