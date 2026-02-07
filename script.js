// --------------------------
// Caesar Cipher
// --------------------------
function caesarEncrypt(text, shift) {
  const s = ((shift % 26) + 26) % 26;
  let out = "";

  for (const ch of text) {
    const code = ch.charCodeAt(0);

    // A-Z
    if (code >= 65 && code <= 90) {
      out += String.fromCharCode(((code - 65 + s) % 26) + 65);
    }
    // a-z
    else if (code >= 97 && code <= 122) {
      out += String.fromCharCode(((code - 97 + s) % 26) + 97);
    }
    // other chars
    else {
      out += ch;
    }
  }
  return out;
}

function caesarDecrypt(text, shift) {
  return caesarEncrypt(text, -shift);
}

// DOM elements
const plain = document.getElementById("plain");
const shiftInput = document.getElementById("shift");
const result = document.getElementById("result");

const encryptBtn = document.getElementById("encryptBtn");
const decryptBtn = document.getElementById("decryptBtn");

// Buttons
encryptBtn.addEventListener("click", () => {
  const s = Number(shiftInput.value) || 0;
  result.value = caesarEncrypt(plain.value, s);
});

decryptBtn.addEventListener("click", () => {
  const s = Number(shiftInput.value) || 0;
  result.value = caesarDecrypt(plain.value, s);
});

// --------------------------
// Demo Link (GitHub Pages)
// --------------------------
const openDemoBtn = document.getElementById("openDemoBtn");

openDemoBtn.addEventListener("click", () => {
  const link = document.getElementById("demoLink").value.trim();

  if (!link.startsWith("http")) {
    alert("Please set a valid GitHub Pages link in the code (demoLink value).");
    return;
  }

  window.open(link, "_blank");
});

// --------------------------
// Tabs (History / Theory / Application)
// --------------------------
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tabContent");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});
