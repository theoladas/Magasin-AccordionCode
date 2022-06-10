// Accordion Functionality
// Select all accordion-containers
const accordionContainers = document.querySelectorAll(".accordion-container");
// Loop through each accordion , create event listener and pass the active class
accordionContainers.forEach((accordionContainer) => {
  accordionContainer.addEventListener("click", () => {
    accordionContainer.classList.toggle("active");
  });
});

// Burger Navigation functionality
// Create the function
const navSlide = () => {
  // Selectors
  const nav = document.querySelector(".nav-links");
  const burger = document.querySelector(".burger");
  // Add event listener and toggle classes
  burger.addEventListener("click", () => {
    burger.classList.toggle("toggle-burger-lines");
    nav.classList.toggle("nav-active");
  });
};
// Call the function
navSlide();
