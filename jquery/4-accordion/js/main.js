$(function () {
  $(".accordion-item").on("click", function () {
    $(this).toggleClass("open");
    $(this).find(".accordion-content").slideToggle();
  });
});
