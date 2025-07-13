// 🌙 Toggle Dark Mode
const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// ✍️ Typing Effect Hero Section
const typedText = document.querySelector('.typed-text');
const words = ["Data Analyst"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1000;

function type() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay);
  }
}

// 🚀 On Page Load
document.addEventListener("DOMContentLoaded", function () {
  // 🔠 Typing effect start
  if (words.length) setTimeout(type, newWordDelay);

  // 📊 Animate Technical Skill horizontal bars
  document.querySelectorAll('.skill-bar-container').forEach(bar => {
    const level = parseInt(bar.getAttribute('data-percent'));
    const filledBar = bar.querySelector('.skill-bar');
    filledBar.style.width = `${level}%`;
  });
  
  // 🔵 Animate Circular Personal Skill
  document.querySelectorAll('.circle-skill').forEach(circle => {
    const value = circle.getAttribute('data-percent');
    const circlePath = circle.querySelector('circle:nth-child(2)');
    const offset = 314 - (314 * value) / 100;
    circlePath.style.strokeDashoffset = offset;
  });
});