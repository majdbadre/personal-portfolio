// header toggle
let MenuBtn = document.getElementById("menuBtn");

MenuBtn.addEventListener("click", (e) => {
  document.querySelector("body").classList.toggle("movile-nav-active");
  this.classList.toggle("fa-xmark");
});

//  Typing Effect
let typed = new Typed("#auto-input", {
  strings: ["Full-Stack Developer!", "Web Desingner!", ""],
  typeSpeed: 90,
  backSpeed: 90,
  backDelay: 100,
  loop: true,
});
