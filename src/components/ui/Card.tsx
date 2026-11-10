import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({
  className = "",
  interactive = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white text-slate-900 shadow-card transition-all duration-200 ${
        interactive
          ? "hover:border-primary-300 hover:shadow-card-hover cursor-pointer"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-5 sm:p-6 pb-3 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className = "",
  children,
  as: Component = "h3",
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  return (
    <Component
      className={`font-semibold text-lg text-slate-900 tracking-tight ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function CardDescription({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-slate-500 mt-1 leading-normal ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-5 sm:p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`p-5 sm:p-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
