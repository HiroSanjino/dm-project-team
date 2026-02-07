// Caesar Cipher
function caesar(text, shift) {
  let result = "";
  for (let ch of text) {
    let code = ch.charCodeAt(0);
    if (code >= 65 && code <= 90)
      result += String.fromCharCode((code - 65 + shift + 26) % 26 + 65);
    else if (code >= 97 && code <= 122)
      result += String.fromCharCode((code - 97 + shift + 26) % 26 + 97);
    else result += ch;
  }
  return result;
}

encryptBtn.onclick = () =>
  (result.value = caesar(plain.value, +shift.value));

decryptBtn.onclick = () =>
  (result.value = caesar(plain.value, -shift.value));

// Demo link
openDemoBtn.onclick = () =>
  window.open(demoLink.value, "_blank");

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tabContent").forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

// Theme toggle
const themeBtn = document.getElementById("themeToggle");
const saved = localStorage.getItem("theme") || "light";
setTheme(saved);

function setTheme(mode) {
  document.body.classList.toggle("dark", mode === "dark");
  localStorage.setItem("theme", mode);
  themeBtn.textContent = mode === "dark" ? "☀️ Light" : "🌙 Dark";
}

themeBtn.onclick = () =>
  setTheme(document.body.classList.contains("dark") ? "light" : "dark");
