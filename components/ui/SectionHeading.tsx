export default function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  light = false,
}: {
  title: string;
  subtitle?: string;
  alignment?: "center" | "left";
  light?: boolean;
}) {
  const align = alignment === "center" ? "items-center text-center" : "items-start text-left";
  const titleColor = light ? "text-champagne" : "text-charcoal dark:text-champagne";
  const subtitleColor = light ? "text-champagne/70" : "text-charcoal/60 dark:text-champagne/60";

  return (
    <div className={`flex flex-col ${align} mb-12`}>
      <h2 className={`text-2xl font-light tracking-tight md:text-3xl lg:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base md:text-lg ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
