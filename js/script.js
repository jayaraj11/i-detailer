var clickHandler = "tap";
var myVar1;
var myVar2;
var myVar3;
var myVar4;

document.addEventListener('touchmove', event => {
  event.preventDefault()
}, {
  capture: false,
  once: false,
  passive: false
});
$(document).ready(function () {
  reset();
  ani();
 
  $("body").bind("touchmove", function (e) {
    e.preventDefault();
  });

function ani(){
  myVar5 = setTimeout(function () {
    $(".bar-5").animate({
      'height': '251px'
    }, 1000);
  }, 600);

  myVar6 = setTimeout(function () {
    $(".bar-6").animate({
      'height': '174px'
    }, 1000);
  }, 800);

  myVar7 = setTimeout(function () {
    $(".bar-7").animate({
      'height': '218px'
    }, 1000);
  }, 800);

  myVar8 = setTimeout(function () {
    $(".bar-8").animate({
      'height': '145px'
    }, 1000);
  }, 800);
}
  
  // content butoon linking

  $('.close').bind("tap", function () {
    reset();
    ani();
    $('.main_slide').show();
    $('.popup-1').hide();
  })

  $('.popup-1-btn').bind("tap", function () {
    $('.popup-1').show();
    $('.main_slide').hide();
  })


  var clickHandler = "tap";
  document.addEventListener('touchmove', event => {
    event.preventDefault()
  }, {
    capture: false,
    once: false,
    passive: false
  });

  // top buttons link
  $(".page-16-btn").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide07.zip)";
  reset();
  ani();
  });

  $(".tbutton-1").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide01.zip)";
  });
  $(".tbutton-2").bind("tap", function () {
    localStorage.btn2backslide = "Xeljanz_UC_2020_NEW_v6_Slide08";
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide39.zip)";
  });

  $(".tbutton-3").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide41.zip)";
  });


  $(".tbutton-4").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide43.zip)";
  });

  $(".tbutton-5").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide40.zip)";
  });


  $(".tbutton-6").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(https://www.pfizerpro.it/Xeljanz-RCP?token=ae3cbf5c)";
  });

  // top buttonlink end




  // bottom button start

  $(".bbutton-1").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide02.zip)";
  });


  $(".bbutton-2").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide05.zip)";
  });

  $(".bbutton-3").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide06.zip)";
  });

  $(".bbutton-4").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide07.zip)";
  });

  $(".bbutton-5").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide23.zip)";
  });

  $(".bbutton-6").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide29.zip)";
  });

  $(".bbutton-7").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide35.zip)";
  });

  $(".bbutton-8").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide38.zip)";
  });

  $(".bbutton-9").bind("tap", function () {
    document.location.href = "veeva:gotoSlide(Xeljanz_UC_2020_NEW_v6_Slide01.zip)";
  });
  // bottom button linking end

  function reset(){
    $('.bar-5,.bar-6,.bar-7,.bar-8').height(0);
  }
});