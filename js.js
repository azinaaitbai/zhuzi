document.addEventListener("DOMContentLoaded", () => {
  // Modal
  const popup = document.getElementById("popup");
  window.openPopup = () => popup.classList.add("open-popup");
  window.closePopup = () => popup.classList.remove("open-popup");

  // Tabs
  const openTab = (one, tabName) => {
    document.querySelectorAll(".tabcontent").forEach((tc) => {
      tc.style.display = "none";
    });
    document.querySelectorAll(".tablink").forEach((tl) => {
      tl.classList.remove("active");
    });
    document.getElementById(tabName).style.display = "block";
    one.currentTarget.classList.add("active");
  };

  document.querySelectorAll(".tablink").forEach((tab) => {
    tab.onclick = (one) => openTab(one, tab.getAttribute("data-tab"));
  });

  document.getElementById("first").style.display = "block";

  // Slider
  let slideIndex = 1;

  const showSlides = (n) => {
    let slides = document.querySelectorAll(".myImages");

    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    } else {
      slideIndex = n;
    }

    slides.forEach((slide) => {
      slide.style.display = "none";
    });

    slides[slideIndex - 1].style.display = "block";
  };

  // Show the initial slide
  showSlides(slideIndex);

  const showNextSlide = () => {
    showSlides(slideIndex + 1);
  };

  const showPreviousSlide = () => {
    showSlides(slideIndex - 1);
  };

  document.querySelector(".aldy").onclick = showPreviousSlide;
  document.querySelector(".kelesi").onclick = showNextSlide;
});
