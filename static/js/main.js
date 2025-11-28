document.addEventListener("DOMContentLoaded", () => {
  const cards = Array.from(
    document.querySelectorAll(".testimonial-card")
  );
  const dotsContainer = document.querySelector(".testimonial-dots");

  if (!cards.length || !dotsContainer) return;

  let currentIndex = 0;


  cards.forEach((_, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
    btn.addEventListener("click", () => showTestimonial(index));
    dotsContainer.appendChild(btn);
  });

  const dots = Array.from(dotsContainer.querySelectorAll("button"));

  function showTestimonial(index) {
    cards[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");
    currentIndex = index;
    cards[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }


  showTestimonial(0);


  setInterval(() => {
    const nextIndex = (currentIndex + 1) % cards.length;
    showTestimonial(nextIndex);
  }, 7000);
});



const slider = document.querySelector('.projects-scroll-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; 
  slider.scrollLeft = scrollLeft - walk;
});
