export function getInitialLetter(name: string): string {
  if (!name) return "";
  const initials = name.trim().split(" ");
  return initials.map((word) => word[0]).join("");
}
