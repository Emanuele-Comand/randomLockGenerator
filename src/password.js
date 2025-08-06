const CHAR_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?/~`",
};

function buildCharSet({ useUpper, useLower, useNumbers, useSymbols }) {
  let chars = "";
  if (useUpper) chars += CHAR_SETS.uppercase;
  if (useLower) chars += CHAR_SETS.lowercase;
  if (useNumbers) chars += CHAR_SETS.numbers;
  if (useSymbols) chars += CHAR_SETS.symbols;

  if (chars.length === 0) {
    chars = Object.values(CHAR_SETS).join("");
  }
  return chars;
}

export function createPassword(length, chars) {
  let pw = "";
  for (let i = 0; i < length; i++) {
    pw += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return pw;
}

export default function initPassword(length, options = {}) {
  const chars = buildCharSet(options);
  const pwd = createPassword(length, chars);
  document.getElementById("password-text").textContent = pwd;
}
