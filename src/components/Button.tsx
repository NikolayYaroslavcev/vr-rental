"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-aurora-teal text-[#0a1a2a] border border-aurora-teal hover:bg-aurora-teal/90 hover:border-aurora-teal/90 active:scale-[0.97]",
  secondary:
    "bg-transparent text-white/70 border border-white/15 hover:border-white/30 hover:text-polar-white active:scale-[0.97]",
  ghost:
    "bg-transparent text-white/70 hover:text-polar-white hover:bg-white/5 active:scale-[0.97]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-11 px-6 text-[12px] gap-2 rounded-[20px]",
  md: "h-12 px-8 text-[12px] gap-2.5 rounded-[20px]",
  lg: "h-14 px-10 text-[12px] gap-3 rounded-[20px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", icon, className, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center uppercase cursor-pointer",
          "transition-all duration-200 ease-[var(--ease-out-strong)]",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora-teal/80",
          "disabled:opacity-30 disabled:pointer-events-none",
          "will-change-transform",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        style={{
          fontFamily: "var(--font-label)",
          letterSpacing: "0.16em",
          fontWeight: 500,
        }}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
