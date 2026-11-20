
// 1. Welcome message
function showWelcome() {
  alert("Welcome to my portfolio! Thanks for visiting.");
}

// 2. Change website theme
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// 3. Contact form response
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you for contacting me!");

    contactForm.reset();
  });
}

function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("nav-menu").classList.remove("active");
}

const typingElement = document.getElementById("typing-text");

const messages = [
  "Hello, I'm Suleiman!",
  "I'm a Future Web Developer!",
  "I Love Building Websites!"
];

let messageIndex = 0;
let characterIndex = 0;

function typeMessage() {
  if (!typingElement) return;

  const currentMessage = messages[messageIndex];

  typingElement.textContent =
    currentMessage.substring(0, characterIndex + 1);

  characterIndex++;

  if (characterIndex === currentMessage.length) {
    setTimeout(() => {
      characterIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      typeMessage();
    }, 2000);
  } else {
    setTimeout(typeMessage, 100);
  }
}

typeMessage();

const fireCursor = document.getElementById("fire-cursor");

document.addEventListener("pointermove", function(event) {
  if (!fireCursor) return;

  fireCursor.style.display = "block";
  fireCursor.style.left = event.clientX + "px";
  fireCursor.style.top = event.clientY + "px";
});

document.addEventListener("pointerdown", function(event) {
  if (!fireCursor) return;

  fireCursor.style.display = "block";
  fireCursor.style.left = event.clientX + "px";
  fireCursor.style.top = event.clientY + "px";
});
