"use client";

import { useState } from "react";
import { company } from "@/lib/data";

type Props = {
  service?: string;
  productList?: string;
};

export default function QuoteForm({ service, productList }: Props) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const message = data.get("message");

    const subject = encodeURIComponent(
      productList ? "3D Design Shop Order Enquiry" : "Free Quote Request"
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n${service ? `Service: ${service}\n` : ""}${productList ? `Products: ${productList}\n` : ""}\nMessage:\n${message}`
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/10 p-8 text-center">
        <h3 className="font-serif text-xl text-forest">Thank you!</h3>
        <p className="mt-2 text-sm text-foreground/70">
          Your email client should open shortly. If it doesn&apos;t, email us at{" "}
          <a href={`mailto:${company.email}`} className="font-semibold text-forest underline">
            {company.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-forest">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-stone-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-forest">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-stone-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-forest">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full rounded-lg border border-stone-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-forest">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full rounded-lg border border-stone-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-xl bg-forest px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-forest-light sm:w-auto"
      >
        {productList ? "Send order enquiry" : "Request free quote"}
      </button>
    </form>
  );
}
