import Link from "next/link";
import { company } from "@/lib/data";

import { images } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <img
        src={images.hero}
        alt="Beautiful landscaped garden"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/40" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <span className="mb-4 inline-flex w-fit rounded-full bg-amber/20 px-4 py-1.5 text-sm font-medium text-amber-light backdrop-blur-sm">
          {company.experience} experience · {company.guarantee}
        </span>
        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Transform your outdoor space with expert landscaping
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone/90">
          From fencing and patios to bespoke garden rooms — plus professional 3D
          designs you can buy online and bring your vision to life.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-xl bg-amber px-8 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-amber-light"
          >
            Get a free quote
          </Link>
          <Link
            href="/shop"
            className="rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Browse 3D designs
          </Link>
        </div>
      </div>
    </section>
  );
}
