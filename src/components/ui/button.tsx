import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "editorial";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium transition-all duration-200 ease-editorial focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-strong disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            // Variants
            "rounded-sm bg-ink text-canvas hover:bg-accent":
              variant === "primary",
            "rounded-sm border border-hairline bg-transparent text-ink hover:border-strong hover:bg-surface/60":
              variant === "ghost",
            "link-editorial px-0 py-0.5 text-ink hover:text-accent":
              variant === "editorial",

            // Sizes (berlaku untuk primary & ghost)
            "h-9 px-3.5 text-xs": size === "sm" && variant !== "editorial",
            "h-11 px-5 text-sm": size === "md" && variant !== "editorial",
            "h-12 px-6 text-base": size === "lg" && variant !== "editorial",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";