import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-hbg disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-gold hover:bg-gold-light text-hbg rounded-full shadow-lg hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98]",
    secondary:
      "bg-surface hover:bg-card text-primary border border-hborder rounded-full hover:border-gold/30",
    outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-hbg rounded-full",
    ghost:
      "text-secondary hover:text-primary hover:bg-surface rounded-full",
  };

  const sizes = {
    sm: "text-sm px-5 py-2.5 gap-1.5",
    md: "text-base px-7 py-3.5 gap-2",
    lg: "text-lg px-9 py-5 gap-2",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
