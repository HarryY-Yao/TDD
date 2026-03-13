export function caesarCipher(s, n) {
  const shift = n % 26;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      code += shift;
      if (code > 90) {
        code -= 26;
      } else if (code < 65) {
        code += 26;
      }
    } else if (code >= 97 && code <= 122) {
      code += shift;
      if (code > 122) {
        code -= 26;
      } else if (code < 97) {
        code += 26;
      }
    }
    res += String.fromCharCode(code);
  }
  return res;
}
