import React from "react";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  variant = "rectangular",
  width,
  height,
  className = "",
  style,
  ...props
}: SkeletonProps) {
  const variantClasses = {
    text: "h-4 w-full rounded",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  };

  const inlineStyles: React.CSSProperties = {
    ...style,
    width: width !== undefined ? width : style?.width,
    height: height !== undefined ? height : style?.height,
  };

  return (
    <div
      aria-hidden="true"
      style={inlineStyles}
      className={`animate-pulse bg-slate-200/80 ${variantClasses[variant]} ${className}`}
      {...props}
    />
  );
}
