// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(() => {
  // An array to store an object for each portfolio item
  const portfolio = [
    { name: "BE-REDY", image: "./asset/img/be-redy.png",
    app: "https://be-redy.herokuapp.com", github: "https://github.com/darren-behan/be-redy" },
    { name: "A BETTER TIME", image: "./asset/img/a-better-time.png",
    app: "https://darren-behan.github.io/a-better-time/", github: "https://github.com/darren-behan/a-better-time" },
    { name: "BURGER LOGGER", image: "./asset/img/burger-logger.png",
    app: "https://enigmatic-cove-34274.herokuapp.com", github: "https://github.com/darren-behan/burger-logger" },
    { name: "README-GENERATOR", image: "./asset/img/readme-generator.png",
    app: "https://drive.google.com/file/d/1cVIweJ_w4y9fEC4dc8TGAjuIwE_CrJGn/view", github: "https://github.com/darren-behan/readme-generator" },
    { name: "EMPLOYEE TRACKER", image: "./asset/img/employee-tracker.png",
    app: "https://drive.google.com/file/d/1BXL7Nv1bYQR8CsNGGPSbc6TmxPr4nTQd/view", github: "https://github.com/darren-behan/employee-tracker" },
    { name: "WEATHER DASHBOARD", image: "./asset/img/weather-dashboard.png",
    app: "https://darren-behan.github.io/weather-app/", github: "https://github.com/darren-behan/weather-app" },
    { name: "WORK SCHEDULER", image: "./asset/img/work-day-scheduler.png",
    app: "https://darren-behan.github.io/work-day-scheduler/", github: "https://github.com/darren-behan/work-day-scheduler" }
  ];

  // We iterate through the portfolio array and dynamically append each element to construct the portfolio with the data in the array.
  const renderPortfolio = () => {
    portfolio.forEach(element => {
      const $portfolioRowDivEl = $("#portfolio-row");
      const $portfolioColDivEl = $("<div>").attr("class", "col-lg-3 col-md-4 col-sm-6 col-xs-12").attr("data-aos", "zoom-in-up");
      const $hoverEffectDivEl = $("<div>").attr("class", "hovereffect");
      const $responsiveImgEl = $("<img>").attr("class", "img-responsive").attr("alt", "").attr("src", element.image);
      const $overlayDivEl = $("<div>").attr("class", "overlay");
      const $appLinkEl = $("<a>").attr("href", element.app);
      const $pEl = $("<p>");
      const $repoLinkEl = $("<a>").attr("href", element.github);
      const $githubFontEl = $("<i>").attr("class", "fab fa-github");

      $portfolioRowDivEl.append($portfolioColDivEl);
      $portfolioColDivEl.append($hoverEffectDivEl);
      $hoverEffectDivEl.append($responsiveImgEl);
      $hoverEffectDivEl.append($overlayDivEl);
      $overlayDivEl.append($appLinkEl);
      $appLinkEl.html("<h2>" + element.name + "</h2>");
      $overlayDivEl.append($pEl);
      $pEl.append($repoLinkEl);
      $repoLinkEl.append($githubFontEl);
    });
  }

  renderPortfolio();

  // When the viewport is < 500px, we add the below class to each career item <div> with a class of "flag-wrapper" which aligns the content center for mobile
  $(window).resize(() => {
    if ($(window).width() < 500) {
      $(".flag-wrapper").attr("class", "row justify-content-center");
    } else {
      $(".flag-wrapper").addClass("class", "flex-wrapper");
    }
  });

  // This is to animate the skills graph on scroll and when the graph is within the viewport, rather than page load
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

  // Initializing emailJS
  $("#contact-form").on("submit", function(event) {
      event.preventDefault();
      // generate the contact number value
      this.contact_number.value = Math.random() * 100000 | 0;
      emailjs.sendForm('contact_service', 'contact_form', this);
  });

  (function(){
    emailjs.init("user_D6Whn8ZWKEkuy23eNghGk");
  })();

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
