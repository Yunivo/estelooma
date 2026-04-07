import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showArrow?: boolean;
};

const variants = {
  primary:
    "bg-champagne text-charcoal hover:bg-champagne/70 transition-colors duration-200",
  secondary:
    "border border-charcoal/20 text-charcoal hover:border-gold hover:text-gold transition-colors duration-200",
};

function ArrowIcon() {
  return (
    <span className="ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-white transition-colors duration-200 group-hover:bg-white/30">
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.5 8h9M8.5 4l4 4-4 4" />
      </svg>
    </span>
  );
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  showArrow = false,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-between rounded-full ${showArrow ? "pl-6 pr-2 py-2" : "px-6 py-3"} text-sm font-semibold ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowIcon />}
    </button>
  );
}
