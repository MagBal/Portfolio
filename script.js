//smooth scrolling navbar
$("#nav ul li a[href^='#']").on("click", function(e) {
  e.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $(this.hash).offset().top
    },
    1000,
    function() {
      window.location.hash = this.hash;
    }
  );
});

//change navbar background when scrolling
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(document).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar").css('background-color', '#000');
            } else {
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
 });
