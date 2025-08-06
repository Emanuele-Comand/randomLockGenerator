export function createPassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUWVXYZabcdefghijklmnopqrstuwvxyz0123456789!@#$%^&*()_";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function initPassword(length = 16) {
  const pwd = createPassword(length);
  document.getElementById("password-text").textContent = pwd;
}
