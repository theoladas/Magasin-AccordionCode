// Select all accordion-containers
const accordionContainers = document.querySelectorAll(".accordion-container");

// Loop through each accordion , create event listener and pass the active class
accordionContainers.forEach((accordionContainer) => {
  accordionContainer.addEventListener("click", () => {
    accordionContainer.classList.toggle("active");
  });
});
