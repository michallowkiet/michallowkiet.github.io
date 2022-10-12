$(function () {
  $("a").on("click", function (e) {
    const hash = $(this).attr("href");

    if (hash !== "") {
      e.preventDefault();

      $("html,body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
