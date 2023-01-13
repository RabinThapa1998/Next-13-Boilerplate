import type { IButtonProps } from "@types";

export function Button({
  children,
  size = "medium",
  variant = "primary",
}: IButtonProps) {
  if (size === "medium") {
    if (variant === "primary") {
      return <button className="btn-primary">{children}</button>;
    } else {
      return <button className="px-4 py-2 bg-blue-500">{children}</button>;
    }
  } else {
    return <button>{children}</button>;
  }
}
