// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(() => {
  let $containerDivEl = $("<div>").attr("class", "container");
  let $rowDivEl = $("<div>").attr("class", "row");
  let $buttonEl = $("<button>").attr("type", "button").attr(
    "class",
    "btn btn-outline-primary d-flex align-items-center"
  );

  const homeSection = () => {
    const $section = $("#home");
    const $flexDivElOne = $("<div>").attr("class", "d-flex justify-content-center col-md-12");
    const $flexDivElTwo = $("<div>").attr("class", "d-flex justify-content-center col-md-12");
    const $p = $("<p>")
      .attr("class", "intro")
      .html(
        "Hello, I'm <span class='name'>Darren Behan</span>.</br>I'm a full-stack web developer."
      );
    const $button = 
      $("<button>")
      .attr("type", "button")
      .attr("class", "btn btn-outline-primary d-flex align-items-center btn-home")
      .html("<div>View my work</div><i class='fa fa-arrow-right'></i>");
    
    $section.append($containerDivEl);
    $containerDivEl.append($rowDivEl);
    $rowDivEl.append($flexDivElOne);
    $flexDivElOne.append($p);
    $rowDivEl.append($flexDivElTwo);
    $flexDivElTwo.append($button);
  };

  // When the viewport is < 500px, we add the below classes
  // When the classes are added, the <div> elements are ordered based on the class
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

  homeSection();

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
