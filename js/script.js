//smooth scrolling navbar
$("#nav ul li a[href^='#']").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1500,
    function() {
      window.location.hash = this.hash;
    }
  );
});

//up to top
$(function() {
  var isShown = false;
  $(window).scroll(function() {
    var win_height = 300;
    var scroll_top = $(document).scrollTop();
    if (scroll_top > win_height && !isShown) {
      isShown = true;
      $("#scroll-to-top").fadeIn();
    } else if (scroll_top < win_height && isShown) {
      isShown = false;
      $("#scroll-to-top").fadeOut();
    }
  });
  $("#scroll-to-top").click(function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 1500);
  });
});
