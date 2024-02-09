const aluraTab = document.querySelector(".education__categories--alura");
const coderhouseTab = document.querySelector(".education__categories--coderhouse");
const linkedinTab = document.querySelector(".education__categories--linkedin");
const udemyTab = document.querySelector(".education__categories--udemy");
const aluraCourses = document.querySelector(".education__showcase--alura");
const coderhouseCourses = document.querySelector(".education__showcase--coderhouse");
const linkedinCourses = document.querySelector(".education__showcase--linkedin");
const udemyCourses = document.querySelector(".education__showcase--udemy");

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const toggleMobileMenu = () => {
  document.querySelector(".nav__overlay").classList.toggle("active");
  document.querySelector(".burger").classList.toggle("open");
  document.querySelector(".nav__mobile").classList.toggle("active");
};

aluraTab.addEventListener("click", function () {
  aluraCourses.classList.add("selected");
  aluraTab.classList.add("active");
  coderhouseCourses.classList.remove("selected");
  coderhouseTab.classList.remove("active");
  linkedinCourses.classList.remove("selected");
  linkedinTab.classList.remove("active");
  udemyCourses.classList.remove("selected");
  udemyTab.classList.remove("active");
});

coderhouseTab.addEventListener("click", function () {
  aluraCourses.classList.remove("selected");
  aluraTab.classList.remove("active");
  coderhouseCourses.classList.add("selected");
  coderhouseTab.classList.add("active");
  linkedinCourses.classList.remove("selected");
  linkedinTab.classList.remove("active");
  udemyCourses.classList.remove("selected");
  udemyTab.classList.remove("active");
});

linkedinTab.addEventListener("click", function () {
  aluraCourses.classList.remove("selected");
  aluraTab.classList.remove("active");
  coderhouseCourses.classList.remove("selected");
  coderhouseTab.classList.remove("active");
  linkedinCourses.classList.add("selected");
  linkedinTab.classList.add("active");
  udemyCourses.classList.remove("selected");
  udemyTab.classList.remove("active");
});

udemyTab.addEventListener("click", function () {
  aluraCourses.classList.remove("selected");
  aluraTab.classList.remove("active");
  coderhouseCourses.classList.remove("selected");
  coderhouseTab.classList.remove("active");
  linkedinCourses.classList.remove("selected");
  linkedinTab.classList.remove("active");
  udemyCourses.classList.add("selected");
  udemyTab.classList.add("active");
});
