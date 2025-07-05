// Update the navigation toggle in script.js
const hamburger = document.getElementById("hamburger");
const mobileLinks = document.getElementById("mobileLinks");
const menuOverlay = document.createElement("div");
menuOverlay.classList.add("menu-overlay");
document.body.appendChild(menuOverlay);

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  mobileLinks.classList.toggle("active");
  menuOverlay.classList.toggle("active");

  // Toggle body scroll when menu is open
  if (mobileLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

// Close menu when clicking on overlay
menuOverlay.addEventListener("click", function () {
  hamburger.classList.remove("active");
  mobileLinks.classList.remove("active");
  menuOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".mobile-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    hamburger.classList.remove("active");
    mobileLinks.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});

const testimony = [
  {
    id: 1,
    name: "Amara Johnson",
    job: "Operations Director",
    img: "images/person2.jpg",
    text: "StratEdge Consulting helped us completely reframe our operational strategy. Their insights led to a 25% increase in workflow efficiency within three months.",
  },
  {
    id: 2,
    name: "David Mensah",
    job: "Head of Marketing",
    img: "images/person1.jpg",
    text: "Working with StratEdge was a turning point. Their market positioning analysis gave us a competitive edge and boosted our campaign performance significantly.",
  },
  {
    id: 3,
    name: "Fatima Yusuf",
    job: "Startup Founder",
    img: "images/person4.jpg",
    text: "As a new founder, StratEdge gave me clarity, confidence, and a clear roadmap. Their tailored strategy sessions were exactly what my business needed.",
  },
  {
    id: 4,
    name: "Kelechi Obi",
    job: "Senior Project Manager",
    img: "images/person3.jpg",
    text: "The team at StratEdge brought structure and precision to our expansion plans. Their recommendations were spot-on and backed by solid research.",
  },
];


// selecting my elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

// selecting my buttons
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// setting the first item to be displayed
let currentItem = 0;

// creating a function for showing the person based on their index number
function showNext() {
  const item = testimony[currentItem];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// loading the first item
window.addEventListener("DOMContentLoaded", function () {
  showNext();
});

// showing the next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > testimony.length - 1) {
    currentItem = 0;
  }
  showNext(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = testimony.length - 1;
  }
  showNext(currentItem);
});

// Add this to script.js for scroll animations
document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in class to elements when they come into view
  const fadeElements = document.querySelectorAll(
    ".grid-column, .shadow-box, .about-idea, .freedom-text"
  );

  const fadeInOnScroll = function () {
    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        element.classList.add("fade-in");
      }
    });
  };

  // Run once on load
  fadeInOnScroll();

  // Run on scroll
  window.addEventListener("scroll", fadeInOnScroll);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
