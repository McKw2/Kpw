type Props = {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 max-w-2xl ${alignClass}`}>
      {label && (
        <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-sage">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl text-forest sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-foreground/70">
          {description}
        </p>
      )}
    </div>
  );
}
