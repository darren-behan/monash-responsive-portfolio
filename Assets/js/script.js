// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(() => {
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

  // This function will run when the window loads
  $(window).on("load", () => {
    aboutSection();
    skillsSection();
  });

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
      .attr("class", "btn btn-outline-primary d-flex align-items-center button-md");
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

  $(window).resize(() => {
    if ($(window).width() < 500) {
      $(".profile-pic").addClass("order-1");
      $(".bio-text-left").addClass("order-2");
      $(".bio-text-right").addClass("order-3");
    } else {
      $(".profile-pic").removeClass("order-1");
      $(".bio-text-left").removeClass("order-2");
      $(".bio-text-right").removeClass("order-3");
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
    $("#section-skills").click(() => {
      $(".bar").addClass("animate");
    });
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }


  const bar = document.querySelector('.bar');

  document.addEventListener('scroll', function () {
      if (isInViewport(bar)) {
        $(".bar").addClass("animate");
      }
  }, {
      passive: true
  });
});
