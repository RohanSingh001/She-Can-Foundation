const menuButton = document.querySelector(".smallNav i");
const mobileMenu = document.querySelector(".smallNavSec");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      mobileMenu.classList.remove("show");
    }
  });
}

const btnTxt = document.querySelector(".mode-text");
const btnIcon = document.querySelector(".light i");

function toggleDarkMode() {
  document.body.classList.toggle("darkMode");
  if (document.body.classList.contains("darkMode")) {
    btnTxt.textContent = "Light Mode";
    btnIcon.classList.add("fa-moon");
    btnIcon.classList.remove("fa-sun");
  } else {
    btnTxt.textContent = "Dark Mode";
    btnIcon.classList.add("fa-sun");
    btnIcon.classList.remove("fa-moon");
  }
}
