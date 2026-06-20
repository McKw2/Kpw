import Link from "next/link";
import type { Service } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  fence: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16M8 6v12M16 6v12" />
    </svg>
  ),
  patio: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l9-9 9 9M5 10v10h14V10" />
    </svg>
  ),
  room: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
    </svg>
  ),
  landscape: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3c-4 6-8 8-8 13a8 8 0 1016 0c0-5-4-7-8-13z" />
    </svg>
  ),
  driveway: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8M8 11h8M8 15h8M4 5h16v14H4z" />
    </svg>
  ),
  design: (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 20h16M4 4h16v16H4z" />
    </svg>
  ),
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group overflow-hidden rounded-2xl border border-stone bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <span className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
            {icons[service.icon]}
          </span>
          <h3 className="font-serif text-xl">{service.title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="mb-3 text-sm text-sage">{service.tagline}</p>
        <p className="text-sm leading-relaxed text-foreground/80 line-clamp-2">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-semibold text-forest group-hover:text-amber">
          View service
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
