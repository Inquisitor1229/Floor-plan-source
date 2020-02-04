(function($) {
  $(function() {
    $("div.about-work__accordeon-container").on("click", "div", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.about-work__accordeon")
        .find("div.about-work__slide")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
})(jQuery);