// ^ Write your JavaScript code here

// DARK MODE TOGGLE
var darkModeToggle = document.getElementById("theme-toggle-button");
darkModeToggle.addEventListener("click", function () {
  document.documentElement.classList.toggle("dark");
});

// SETTINGS SIDEBAR TOGGLE
var settingsButton = document.getElementById("settings-toggle");

settingsButton.addEventListener("click", function () {
  document
    .querySelector("#settings-sidebar")
    .classList.toggle("translate-x-full");
  if (
    document
      .querySelector("#settings-sidebar")
      .classList.contains("translate-x-full")
  ) {
    settingsButton.style.right = "0px";
  } else {
    settingsButton.style.right = "320px";
  }
});

// close settings
var closeSettingsButton = document.querySelector("#close-settings");
closeSettingsButton.addEventListener("click", function () {
  document.querySelector("#settings-sidebar").classList.add("translate-x-full");
  settingsButton.style.right = "0px";
});

// scroll to top
var scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollToTopButton.classList.remove("opacity-0");
  } else {
    scrollToTopButton.classList.add("opacity-0");
  }
});
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// active linke
var sections = document.querySelectorAll("section");
var navUrls = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", function () {
  var scrollSection = window.scrollY;
  for (var i = 0; i < sections.length; i++) {
    if (scrollSection >= sections[i].offsetTop) {
      var id = sections[i].getAttribute("id");
      for (var j = 0; j < navUrls.length; j++) {
        navUrls[j].classList.remove("active");
        if (navUrls[j].getAttribute("href") === "#" + id) {
          navUrls[j].classList.add("active");
        }
      }
    }
  }
});

// console.log(sections);

// Applying fontFamily
var fontFamilySelector = document.querySelectorAll(".font-option");
for (var i = 0; i < fontFamilySelector.length; i++) {
  fontFamilySelector[i].addEventListener("click", function (e) {
    for (var j = 0; j < fontFamilySelector.length; j++) {
      fontFamilySelector[j].classList.remove("active");
      fontFamilySelector[j].setAttribute("aria-checked", "false");
    }
    var selectedBtn = e.currentTarget;
    selectedBtn.classList.add("active");
    selectedBtn.setAttribute("aria-checked", "true");
    var selectedFont = selectedBtn.getAttribute("data-font");
    document.body.style.fontFamily = selectedFont;
  });
}

// Nav and tabs
var filterButtons = document.querySelectorAll(".portfolio-filter");
var portfolioItems = document.querySelectorAll(".portfolio-item");
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function (e) {
    var filterValue = e.currentTarget.getAttribute("data-filter");

    for (var j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove(
        "from-primary",
        "to-secondary",
        "text-white"
      );
      filterButtons[j].classList.add(
        "bg-white",
        "dark:bg-slate-800",
        "text-slate-600",
        "dark:text-slate-300"
      );
      filterButtons[j].setAttribute("aria-pressed", "false");
    }
    e.currentTarget.classList.add(
      "bg-linear-to-r",
      "from-primary",
      "to-secondary",
      "text-white"
    );
    e.currentTarget.classList.remove(
      "bg-white",
      "dark:bg-slate-800",
      "text-slate-600",
      "dark:text-slate-300"
    );
    e.currentTarget.setAttribute("aria-pressed", "true");

    for (var k = 0; k < portfolioItems.length; k++) {
      if (
        filterValue === "all" ||
        portfolioItems[k].getAttribute("data-category") === filterValue
      ) {
        portfolioItems[k].style.display = "block";
      } else {
        portfolioItems[k].style.display = "none";
      }
    }
  });
}

//color selector
window.addEventListener("load", function () {
  var colorButtons = document.querySelectorAll("#theme-colors-grid button");

for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", function (e) {
    var primary = e.currentTarget.dataset.primary;
    var secondary = e.currentTarget.dataset.secondary;
    // console.log(primary, secondary);
    document.documentElement.style.setProperty("--color-primary", primary);
    document.documentElement.style.setProperty("--color-secondary", secondary);
  });
}

});

// Reset button
var resetBtn = document.getElementById("reset-settings");
var colorButtons = document.querySelectorAll("#theme-colors-grid button");
resetBtn.addEventListener("click", function () {
  for (var i = 0; i < fontFamilySelector.length; i++) {
    fontFamilySelector[i].classList.remove("active");
    fontFamilySelector[i].setAttribute("aria-checked", "false");
  }
  document.body.style.fontFamily = "Tajawal, sans-serif";
  document.documentElement.style.setProperty("--color-primary", "#6366f1");
  document.documentElement.style.setProperty("--color-secondary", "#8b5cf6");
  document.querySelector("#settings-sidebar").classList.add("translate-x-full");
  settingsButton.style.right = "0px";
});

// Carsaual
window.addEventListener("load", function () {
  var carousel = document.getElementById("testimonials-carousel");
  var nextBtn = document.getElementById("next-testimonial");
  var prevBtn = document.getElementById("prev-testimonial");
  var indicators = document.querySelectorAll(".carousel-indicator");
  var cards = document.querySelectorAll(".testimonial-card");
  var currentIndex = 0;
  var cardWidth = 0;
  var totalCards = cards.length;
  var lastIndex = totalCards - 3;
  function updateCardWidth() {
    if (cards.length > 0) {
      cardWidth = cards[0].offsetWidth;
    }
  }

  function updateCarousel() {
    var translateX = currentIndex * cardWidth;
    carousel.style.transform = `translateX(${translateX}px)`;

    for (var i = 0; i < indicators.length; i++) {
      if (i === currentIndex) {
        indicators[i].classList.add("bg-accent");
        indicators[i].classList.remove("bg-slate-400");
        indicators[i].classList.remove("dark:bg-slate-600");
        indicators[i].setAttribute("aria-selected", "true");
      } else {
        indicators[i].classList.remove("bg-accent");
        indicators[i].classList.add("dark:bg-slate-600");
        indicators[i].setAttribute("aria-selected", "false");
      }
    }
  }
  nextBtn.addEventListener("click", function (e) {
    if (currentIndex < lastIndex) {
      currentIndex++;
      updateCarousel();
    }
  });
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  function selectedindecator(index) {
    currentIndex = index;
    updateCarousel();
  }

  for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function () {
      selectedindecator(i);
    });
  }
  updateCardWidth();
  updateCarousel();
});
