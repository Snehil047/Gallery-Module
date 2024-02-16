let scrollContainer = document.querySelector(".gallery");
let nextBtn = document.getElementById("nextBtn");
let backBtn = document.getElementById("backBtn");
let img = document.getElementById("1stImg");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

// img.addEventListener("click", () => {
//   img.style.width = "100%";
//   img.style.height = "500px";
// });
