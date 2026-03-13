export function capitalize(s) {
  const res = s !== "" ? s[0].toUpperCase() + s.slice(1) : "";
  return res;
}
