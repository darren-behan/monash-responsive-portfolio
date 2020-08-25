// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.
$(document).ready(() => {
  // Initializing AOS => https://michalsnik.github.io/aos/
  AOS.init({
    duration: 1200,
  });

  // When you click the 'View my work' button, the viewport scrolls down to the navigation menu and stops once that meets the top of the viewport
  $(".btn-home").click(function() {
    $('html, body').animate({
        scrollTop: $(".navbar").offset().top
    }, 1000);
  });

  // This function will run when the window loads
  $(window).on("load", () => {
    // We're creating two <div> elements to store the About heading which animates on scroll which is controlled through AOS
    // The animations are introduced by adding classes to the elements
    const $aboutDiv = $(".about");
    const $h2 = $("<h2>").text("About").attr("data-aos", "fade-right");
    $aboutDiv.append($h2);

    const $headerBarDiv = $("<div>").attr("class", "header-bar").attr("data-aos", "fade-left");
    $aboutDiv.append($headerBarDiv);
  });
  

  // $(window).on("load", function () {
  //   $(window)
  //     .scroll(function () {
  //       var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  //       $(".fade").each(function () {
  //         /* Check the location of each desired element */
  //         var objectBottom = $(this).offset().top + $(this).outerHeight();

  //         /* If the element is completely within bounds of the window, fade it in */
  //         if (objectBottom < windowBottom) {
  //           //object comes into view (scrolling down)
  //           if ($(this).css("opacity") == 0) {
  //             $(this).fadeTo(500, 1);
  //           }
  //         } else {
  //           //object goes out of view (scrolling up)
  //           if ($(this).css("opacity") == 1) {
  //             $(this).fadeTo(500, 0);
  //           }
  //         }
  //       });
  //     })
  //     .scroll(); //invoke scroll-handler on page-load
  // });

  // charts.js
  var ctx = $("#skills-chart");

  var skillsChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["HTML5", "CSS3", "Javascript", "jQuery", "AJAX", "node.js"],
      datasets: [
        {
          label: "Skills",
          data: [5, 10, 25, 25, 15, 20],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 0.5,
        },
      ],
    },
  });
});
