$(window).scroll(function () {
  // console.log("fa");
  var wScroll = $(this).scrollTop();
  // console.log(wScroll);
  $('.header-txt').css({
    'transform': 'translate(0px, ' + wScroll/4 +'%)'
  });

  $('.dna').css({
    'transform': 'translate(0px, ' + wScroll/8 +'%)'
  });

  $('.cell1').css({
    'transform': 'translate(0px, ' + wScroll/4 +'%)'
  });

  $('.cell2').css({
    'transform': 'translate(0px, -' + wScroll/1000 +'%)'
  });

  $('.cell3').css({
    'transform': 'translate(0px, ' + wScroll/6 +'%)'
  });

  $('.cell4').css({
    'transform': 'translate(0px, ' + wScroll/2 +'%)'
  });

});
