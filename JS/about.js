const animatedItems = document.querySelectorAll(
  ".slide-left, .slide-right"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

animatedItems.forEach(item => observer.observe(item));



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
// THIS IS WHAT YOU ADD ⬇️⬇️⬇️

document.querySelectorAll(".choose-btn").forEach(button => {
  button.addEventListener("click", () => {
    const page = button.getAttribute("data-page");
    window.location.href = page;
  });
});






