import Link from "next/link";
import { images } from "@/lib/images";
import { CartNavLink } from "./NavLinks";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/shop", label: "3D Design Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone/60 bg-cream shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
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

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-forest transition-colors hover:bg-stone"
            >
              {item.label}
            </Link>
          ))}
          <CartNavLink className="ml-2" />
        </nav>

        {/* Mobile — CSS-only menu toggle (works even if JavaScript fails) */}
        <div className="relative md:hidden">
          <input type="checkbox" id="mobile-nav-toggle" className="peer sr-only" />
          <div className="flex items-center gap-2">
            <CartNavLink className="px-3 py-2 text-xs" />
            <label
              htmlFor="mobile-nav-toggle"
              className="cursor-pointer rounded-lg border border-stone-dark bg-white p-2 text-forest"
            >
              <svg
                className="h-6 w-6 peer-checked:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>

          <nav
            className="absolute left-0 right-0 top-full z-50 hidden border-t border-stone bg-cream px-4 py-3 shadow-md peer-checked:block"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-forest hover:bg-stone"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
