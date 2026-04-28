type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = "center", light }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`${align === "center" ? "justify-center" : ""} flex`}>
          <span className={light ? "pill-light" : "pill"}>{eyebrow}</span>
        </div>
      )}
      <h2
        className={`heading-display mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-white/70" : "text-navy-900/70"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
