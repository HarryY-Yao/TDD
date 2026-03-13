export function reverseString(s) {
  let reversed = "";
  for (const char of s) {
    reversed = char + reversed;
  }
  return reversed;
}
