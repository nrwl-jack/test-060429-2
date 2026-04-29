import { THEME } from "@repo/config";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      style={{
        background: THEME.primary,
        color: "white",
        border: "none",
        borderRadius: 6,
        padding: "0.6em 1.2em",
        cursor: "pointer",
        fontSize: "1em",
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Card({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        border: `1px solid ${THEME.primary}`,
        borderRadius: 8,
        padding: "1rem",
        background: "rgba(100, 108, 255, 0.05)",
      }}
    >
      {children}
    </div>
  );
}
