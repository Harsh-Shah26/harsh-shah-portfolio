// Profile image slider
const profileImages = [
  "assets/images/profile1.jpeg",
  "assets/images/profile2.jpeg",
  "assets/images/profile3.png",
  // "assets/images/profile4.png",
  // "assets/images/profile5.jpeg"
];

let currentSlide = 0;
const profileSlider = document.getElementById("profileSlider");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  currentSlide = (index + profileImages.length) % profileImages.length;
  profileSlider.style.opacity = "0";

  setTimeout(() => {
    profileSlider.src = profileImages[currentSlide];
    profileSlider.style.opacity = "1";
  }, 180);

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentSlide);
  });
}

function changeSlide(step) {
  showSlide(currentSlide + step);
}

setInterval(() => changeSlide(1), 12000);

// Active navbar while scrolling
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 90;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// Footer typing animation: writes text, deletes, then starts again
const footerText = "Made with ❤️ by Harsh";
const footerTyping = document.getElementById("footerTyping");
let typingIndex = 0;
let deleting = false;

function footerTypeLoop() {
  if (!footerTyping) return;

  if (!deleting) {
    footerTyping.textContent = footerText.slice(0, typingIndex + 1);
    typingIndex++;

    if (typingIndex === footerText.length) {
      deleting = true;
      setTimeout(footerTypeLoop, 1200);
      return;
    }
  } else {
    footerTyping.textContent = footerText.slice(0, typingIndex - 1);
    typingIndex--;

    if (typingIndex === 0) {
      deleting = false;
    }
  }

  setTimeout(footerTypeLoop, deleting ? 55 : 95);
}
footerTypeLoop();

// Dark / Light theme toggle
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

if (themeToggle && savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      localStorage.setItem("portfolioTheme", "light");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
      localStorage.setItem("portfolioTheme", "dark");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
  });
}
