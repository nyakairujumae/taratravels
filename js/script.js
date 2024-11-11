const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
  menus.classList.remove("display");
});

// scroll sticky navbar
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//static numbers
const countersEL = document.querySelectorAll(".numbers");
countersEL.forEach((counters) => {
  counters.textContent = 0;

  incrementCounters();

  function incrementCounters() {
    let currentNum = +counters.textContent;
    const dataCeil = counters.getAttribute("data-ceil");

    const increment = dataCeil / 25;

    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counters.textContent = currentNum;
      setTimeout(incrementCounters, 70);
    } else {
      counters.textContent = dataCeil;
    }
  }
});

document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form submitted successfully!");
    // You can add additional logic here to handle the form submission, e.g., sending data to a server
  });

document
  .getElementById("locationSearchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Search form submitted!");
    // You can add additional logic here to handle the form submission, e.g., sending data to a server
  });

  // Add smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  
  
  
