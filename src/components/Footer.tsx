import Link from "next/link";
import { company } from "@/lib/data";
import { images } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="mt-auto bg-forest text-stone">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <img
                src={images.logo}
                alt="KPW Build"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <span className="font-serif text-xl text-white">{company.name}</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-stone/90">
              Eco-friendly, quality landscaping trusted across {company.area}.
              Over {company.experience} of experience with a {company.guarantee} on our work.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/shop" className="hover:text-white">3D Design Shop</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${company.mobile.replace(/\s/g, "")}`} className="hover:text-white">
                  {company.mobile}
                </a>
              </li>
              <li className="pt-2 text-stone/80">{company.area}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-stone/70 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>We accept cash and card payments.</p>
        </div>
      </div>
    </footer>
  );
}
