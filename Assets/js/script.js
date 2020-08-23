$(function () {
  $(window).on("load", function () {
    $(window)
      .scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function () {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();

          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) {
            //object comes into view (scrolling down)
            if ($(this).css("opacity") == 0) {
              $(this).fadeTo(500, 1);
            }
          } else {
            //object goes out of view (scrolling up)
            if ($(this).css("opacity") == 1) {
              $(this).fadeTo(500, 0);
            }
          }
        });
      })
      .scroll(); //invoke scroll-handler on page-load
  });

  $(window).on("load", function () {
    $("#skills").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").hide();
  });

  $("#nav-about").on("click", function () {
    $("#skills").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").hide();
    $("#about").show();
  });

  $("#nav-skills").on("click", function () {
    $("#about").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").hide();
    $("#skills").show();
  });

  $("#nav-career").on("click", function () {
    $("#about").hide();
    $("#skills").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").hide();
    $("#career").show();
  });

  $("#nav-portfolio").on("click", function () {
    $("#about").hide();
    $("#skills").hide();
    $("#career").hide();
    $("#education").hide();
    $("#contact").hide();
    $("#portfolio").show();
  });

  $("#nav-education").on("click", function () {
    $("#about").hide();
    $("#skills").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#contact").hide();
    $("#education").show();
  });

  $("#nav-contact").on("click", function () {
    $("#about").hide();
    $("#skills").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").show();
  });

  $("#nav-icon-contact").on("click", function () {
    $("#about").hide();
    $("#skills").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").show();
  });

  $(".btn-success").on("click", function () {
    $("#about").hide();
    $("#skills").hide();
    $("#career").hide();
    $("#portfolio").hide();
    $("#education").hide();
    $("#contact").show();
  });

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
