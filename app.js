window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".hero-navbar");
  const scrollDistance = window.scrollY;

  if (scrollDistance > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
