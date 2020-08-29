// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(() => {
  // When the viewport is < 500px, we add the below class
  $(window).resize(() => {
    if ($(window).width() < 500) {
      $(".flag-wrapper").attr("class", "row justify-content-center");
    } else {
      $(".flag-wrapper").addClass("class", "flex-wrapper");
    }
  });

  // Pass an element into this function to calculate where in the viewport it is position
  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  // Retrieving div with a class of "bar"
  const bar = document.querySelector(".bar");
  // Adding the event scroll to the document
  // Passing the bar element into the isInViewport function
  // If true, adding a class to the element
  document.addEventListener("scroll", function () {
    if (isInViewport(bar)) {
      $(".bar").addClass("animate");
    }
  });

  // Initializing AOS => https://michalsnik.github.io/aos/
  AOS.init({
    duration: 1200,
  });

  // When you click the 'View my work' button, the viewport scrolls down to the navigation menu and stops once that meets the top of the viewport
  $(".btn-home").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".sticky-top").offset().top,
      },
      1000
    );
  });
});
