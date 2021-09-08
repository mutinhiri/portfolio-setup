let menu = document.querySelector(".menu")
let ham = document.querySelector(".ham")
let xIcon = document.querySelector(".xIcon")
let menuIcon = document.querySelector(".menuIcon")



const toggleMenu = () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

ham.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
  (menuLink) => {
    menuLink.addEventListener("click", toggleMenu);
  }
)

const contactForm = document.querySelector('#contact-form');

function validateEmail() {
  const emailInput = document.querySelector('#contact-email');
  const emailError = document.querySelector('#email-error');
  const emailLowerCase = emailInput.value.toLowerCase();

  if (emailInput.value !== emailLowerCase) {
    emailError.innerHTML = `Your email should be in lower case please use "<span style="color:black">${emailLowerCase}</span>" instead.`;
    return false;
  }
  return true;
}

contactForm.addEventListener('submit', (sub) => {
  if (!validateEmail()) {
    sub.preventDefault();
  }
});