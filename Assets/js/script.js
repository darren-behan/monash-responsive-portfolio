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

  // Renders the elements and data for the About section
  const aboutSection = () => {
    // We're dynamically creating all elements for the About section with each element animating on scroll which is controlled through the AOS library
    // The animations are introduced by adding classes to the elements
    const $aboutDiv = $(".about");
    const $h2 = $("<h2>").text("About").attr("data-aos", "fade-right");
    $aboutDiv.append($h2);

    const $headerBarDiv = $("<div>")
      .attr("class", "header-bar")
      .attr("data-aos", "fade-left");
    $aboutDiv.append($headerBarDiv);

    const $aboutRow = $("<div>").attr("class", "row");
    $aboutDiv.append($aboutRow);

    const $bioDivLeft = $("<div>")
      .attr("class", "col-md-4 bio-text-left")
      .attr("data-aos", "fade-right");
    const $bioTextLeft = $("<p>").text(
      "Full Stack Web Developer utilising an extensive customer service and finance background to build complex web apps with a seamless user experience."
    );
    $aboutRow.append($bioDivLeft);
    $bioDivLeft.append($bioTextLeft);

    const $bioDivImg = $("<div>")
      .attr("class", "col-md-4 profile-pic")
      .attr("data-aos", "fade-up");
    const $bioImg = $("<img>").attr("src", "./assets/img/profile-pic.png");
    $aboutRow.append($bioDivImg);
    $bioDivImg.append($bioImg);

    const $bioDivButton = $("<div>").attr(
      "class",
      "d-flex justify-content-center col-md-12 button-sm"
    );
    const $bioButtonCv = $("<button>")
      .attr("type", "button")
      .attr(
        "class",
        "btn btn-outline-primary d-flex align-items-center button-md"
      );
    const $bioLinkCv = $("<a>")
      .attr("class", "button-md")
      .attr("href", "./assets/img/cv.pdf")
      .text("Download CV");
    $bioDivImg.append($bioDivButton);
    $bioDivButton.append($bioButtonCv);
    $bioButtonCv.append($bioLinkCv);

    const $bioDivRight = $("<div>")
      .attr("class", "col-md-4 bio-text-right")
      .attr("data-aos", "fade-left");
    const $bioTextRight = $("<p>").text(
      "Currently enrolled in Monash Universities Full Stack Web Development Bootcamp where I’m developing technical skills in CSS, JavaScript, React.js Node.js, API, MongoDB and responsive web design."
    );
    $aboutRow.append($bioDivRight);
    $bioDivRight.append($bioTextRight);
  };

  // When the viewport is < 500px, we add the below classes
  // When the classes are added, the <div> elements are ordered based on the class
  $(window).resize(() => {
    if ($(window).width() < 500) {
      $(".profile-pic").addClass("order-1");
      $(".bio-text-left").addClass("order-2");
      $(".bio-text-right").addClass("order-3");
      $(".flag-wrapper").attr("class", "row justify-content-center");
    } else {
      $(".profile-pic").removeClass("order-1");
      $(".bio-text-left").removeClass("order-2");
      $(".bio-text-right").removeClass("order-3");
      $(".flag-wrapper").addClass("class", "flex-wrapper");
    }
  });

  const skillsSection = () => {
    // const $skillsDiv = $(".skills");
    // const $h2 = $("<h2>").text("Skills").attr("data-aos", "fade-right");
    // $skillsDiv.append($h2);
    // const $headerBarDiv = $("<div>")
    //   .attr("class", "header-bar")
    //   .attr("data-aos", "fade-left");
    // $skillsDiv.append($headerBarDiv);
  };

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
  aboutSection();

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
