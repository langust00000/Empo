$(function(){
  startTime();
  slider3();
  $(".header-menu .li_4 a").addClass('header-menu-in');
  $.localScroll({
    duration: 1000,
    hash: false 
  });
  function startTime() {
    var date = new Date();
    var eventDate = new Date(2014,6,17);
    var days = Math.floor(Math.round(eventDate-date)/86400000);
      days = (days < 1) ? "0"+days : days;
    var hours = date.getHours();
      hours = (hours < 10) ? "0"+hours : hours;
    var minutes = 60 - date.getMinutes() - 1;
      minutes = (minutes < 10) ? "0"+minutes : minutes;
    var seconds = 60-date.getSeconds()-1;
      seconds = (seconds < 10) ? "0"+seconds : seconds;
    $(".day").text(days);
    $(".hour").text(hours);
    $(".min").text(minutes);
    $(".sec").text(seconds);  
    setTimeout(startTime, 1000);
  }

  $("form").submit(function() {
      var result = true;
      $(this).find("input").each(function() {
        if($(this).val() === "") {
          $(this).attr("placeholder", "Пустая строка!")
          result = false;
        }
      });
      return result;
  });

  function slider3(){
    $(".slider3-1").click(function(event) {
      $(".slider3-circle img").attr('src', 'img/slider.png');
      $(this).attr('src', 'img/slider-active.png');
      $(".slide-2").stop().fadeOut(500, function() {
        $(".slide-1").stop().fadeIn(500);
      });
    });
    $(".slider3-2").click(function(event) {
      $(".slider3-circle img").attr('src', 'img/slider.png');
      $(this).attr('src', 'img/slider-active.png');
      $(".slide-1").stop().fadeOut(500, function() {
        $(".slide-2").stop().fadeIn(500);
      });
    });
  }

  function progress() {
    var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        return((s / (d-c)) * 100);
  }

$(window).scroll(function() {
  var position = progress();
    anchor(position);
    if(position>1){
      $(".header-logo img").attr('src', 'img/logo_2.png');
      $(".header-logo").css({
        'padding-top' : '0px',
        'margin-left' : '0px',
        'height' : '88px',
        'width' : '88px',
        'margin-top' : '0'
      });
      $('.header-menu li').css({
        'color' : 'white'
      });
      $(".brain").css({
        'display' : 'block'
      });
      $(".header").addClass('gradient');
      $(".header").css({
        'height' : '88px'
      });
    }
    else {
      $(".header-logo img").attr('src', 'img/logo_1.png');
      $(".header-logo").css({
        'margin-left' : '8px',
        'margin-top' : '14px'
      });
      $('.header-menu li').css({
        'color' : '#ca006a'
      });
      $(".brain").css({
        'display' : 'none'
      });
      $(".header").removeClass('gradient');
      $(".header").css({
        'height' : '98px'
      });
    };
    $(".brain-progress").width(position + '%');
    $(".progress-percent").text(Math.floor(position));
    $(".green-brain").height(36*position/100);
    $(".green-brain").css('top',(36-(36 * position / 100) - 5) + "px")
});

function anchor(position) {
  $(".header-menu li a").removeClass('header-menu-out');
  $(".header-menu li a").removeClass('header-menu-in');
  if((position > 31) && (position < 42))
    $(".header-menu .li_1 a").addClass('header-menu-out');
  else if(position < 1)
    $(".header-menu .li_4 a").addClass('header-menu-in');
  else if((position > 51) && (position < 59))
    $(".header-menu .li_4 a").addClass('header-menu-out');
  else if((position > 59) && (position < 64))
    $(".header-menu .li_2 a").addClass('header-menu-out');
  else if(position > 91)
    $(".header-menu .li_3 a").addClass('header-menu-out');
}

});