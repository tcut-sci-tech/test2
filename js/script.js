/*---------- 丸形 背景 ---------- */
$(".openbtn").click(function () {
  $(this).toggleClass('active');
  $("#g-nav").toggleClass('panelactive');
  $(".circle-bg").toggleClass('circleactive');
});

$("#g-nav a").click(function () {
  $(".openbtn").removeClass('active');
  $("#g-nav").removeClass('panelactive');
  $(".circle-bg").removeClass('circleactive');
});

/*---------- OP ---------- */
$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');
  $("#splash").delay(1500).fadeOut('slow',function(){
    $('body').addClass('appear');
    ScrollTimelineAnime();
    ScrollAnime();
    moveAnimation();
  });
  
  $('.splashbg1').on('animationend', function() {
    fadeAnime();
  });
});
