const aboutRows = document.querySelectorAll(".about-row");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const left = entry.target.querySelector(".slide-left");
      const right = entry.target.querySelector(".slide-right");

      if (entry.isIntersecting) {
        // ADD animation
        if (left) left.classList.add("animate-left");
        if (right) right.classList.add("animate-right");
      } else {
        // REMOVE animation so it can replay
        if (left) left.classList.remove("animate-left");
        if (right) right.classList.remove("animate-right");
      }
    });
  },
  {
    threshold: 0.4
  }
);

aboutRows.forEach(row => observer.observe(row));




// ================= FABRIC SLIDER =================
let fabricIndex = 0;
const fabricSlides = document.querySelectorAll(".fabric-slide");

function showFabric(index) {
  fabricSlides.forEach(slide => slide.classList.remove("active"));
  fabricSlides[index].classList.add("active");
}

function nextFabric() {
  fabricIndex = (fabricIndex + 1) % fabricSlides.length;
  showFabric(fabricIndex);
}

function prevFabric() {
  fabricIndex = (fabricIndex - 1 + fabricSlides.length) % fabricSlides.length;
  showFabric(fabricIndex);
}

/* AUTO SLIDE */
setInterval(nextFabric, 6000);
showFabric(fabricIndex);


// ================= CHOOSE FABRIC LOGIC =================

document.querySelectorAll(".choose-btn").forEach(button => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");
    window.location.href = page;
  });
});










