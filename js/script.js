/* ............... Header Toggle Cover ................. */

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll == 0) {
      $(".wrapper").css({
        backgroundColor: "transparent",
      });
    } else {
      $(".wrapper").css({
        backgroundColor: "rgba(185, 169, 92, 0.8",
      });
    }
  });
});

/* ............... // Header Toggle Cover .............. */

/* ................. Button Scroll ..................... */

$("a[href='#home']").click(function () {
  $("body, html").animate({
      scrollTop: 0,
    },
    800,
    function () {
      $(".firstLine, .secondLine, .thirdLine").removeClass("active");
      $("#menu_List").removeClass("burgerSlider");
      $(".menuCover").removeClass("active");

    }
  );
});

// $("a[href='#bottom']").click(function () {
//   $("html, body").animate({
//       scrollTop: $(document).height(),
//     },
//     2000
//   );
// });

$("a[href='#reviews']").click(function () {
  $("body, html").animate({
      scrollTop: 2670,
    },
    800,
    function () {
      $(".firstLine, .secondLine, .thirdLine").removeClass("active");
      $("#menu_List").removeClass("burgerSlider");
      $(".menuCover").removeClass("active");

    }
  );
});

$("a[href='#Reservations']").click(function () {
  $("body, html").animate({
      scrollTop: 3410,
    },
    800,
    function () {
      $(".firstLine, .secondLine, .thirdLine").removeClass("active");
      $("#menu_List").removeClass("burgerSlider");
      $(".menuCover").removeClass("active");

    }
  );
});

$(".sbtn").click(function () {
  $("body, html").animate({
      // scrollTop: 2015,
      scrollTop: 1800,
    },
    800
  );
});

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 655) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("a[href='#toTop']").click(function () {
    $("html, body").animate({
        scrollTop: 0,
      },
      2000
    );
  });
});

/* .............. .. Button Scroll ..................... */

/* ................. Menu Toggle .................... */

$(document).ready(function () {
  /* ................. Burger Toggle .................... */

  $("#burger").click(function () {
    $("#menu_List").toggleClass("burgerSlider");
  });

  /* .............. // Burger Toggle .................... */

  $("#burger").click(function () {
    $(
      "nav, .menu, .menuCover, .firstLine, .secondLine, .thirdLine"
    ).toggleClass("active");
  });

  $("#abt").click(function () {
    $("#abtCover").toggleClass("active2");
    $("#abtCover p>span").toggleClass("active2");
  });

  $("#abtCover p>span").click(function () {
    $(this).toggleClass("active2");
    $("#abtCover").toggleClass("active2");
  });

});

$(document).ready(function () {
  $(".arrow_1").click(function () {
    $("#clicker_1 .subMenuList").slideToggle();
    $("#clicker_1 .subMenuList a").toggleClass("changer");

    $(".opener_1_1").click(function () {
      $(this).next().toggleClass("subChanger");
      $("#subClicker_1_1").find(".subSubMenuList a").toggleClass("subChanger");
    });

    $(".opener_1_2").click(function () {
      $(this).next().toggleClass("subChanger");
      $("#subClicker_1_2").find(".subSubMenuList a").toggleClass("subChanger");
    });

  });

  $(".arrow_2").click(function () {
    $("#clicker_2 .subMenuList").slideToggle();
    $("#clicker_2 .subMenuList a").toggleClass("changer");

    $(".opener_2_1").click(function () {
      $(this).next().toggleClass("subChanger");
      $("#subClicker_2_1").find(".subSubMenuList a").toggleClass("subChanger");
    });

    $(".opener_2_2").click(function () {
      $(this).next().toggleClass("subChanger");
      $("#subClicker_2_2").find(".subSubMenuList a").toggleClass("subChanger");
    });

  });

  /*.............. SubMenu .............. */

  // if ($(".subMenuList a").hasClass("changer").function() {
  //     $(".subMenuList a").not(this).removeClass("changer");
  //   });


  /*........... // SubMenu .............. */

});


















$(document).ready(function () {
  $("#clicker_1").click(function () {
    $(".subMenuList_1").slideToggle("slow");
  });

  $("#clicker_2").click(function () {
    $(".subMenuList_2").slideToggle();
  });
});

/* .............. // Menu Toggle ................. */


/*  ................................... Calendar .....................................*/

$(document).ready(function () {
  $("#datepicker")
    .datepicker({
      numberOfMonth: 1,
      changeYear: true,
      changeMonth: true,
      showWeek: true,
      showOtherMonths: true,
      minDate: new Date(2020, 5, 21),
      maxDate: new Date(2021, 0, 1)
    })
    .css({
      color: "green",
    });
});

/*  ................................ // Calendar .....................................*/

// Button "TOP"

//window.onload = function () {
//    var scrolled;
//    var timer;
//    document.getElementById('toTop').onclick = function () {
//        scrolled = window.pageYOffset;
//        scrollToTop();
//    }
//
//    function scrollToTop() {
//        if (scroll > 0) {
//            window.scrollTo(0, scrolled);
//            scrolled = scrolled - 50; //100- швидкість прокрутки
//            timer = setTimeout(scrollToTop, 100);
//        } else {
//            clearTimeout(timer);
//            window.scrollTo(0, 0);
//        }
//    }
//}

/*  ....................... Second block ............................*/

$(document).ready(function () {
  //	$(".rightSide img").click(function(){
  //		$(".dish, .fish, .sweet").addClass("show", 'slow');
  //	});
  $(".rightSide .dish").click(function () {
    $(this).animate({
      top: '-102%'
    }, "slow");
    $(".sweet").animate({
      top: '0%'
    }, 0);
  });
  $(".rightSide .sweet").click(function () {
    $(this).animate({
      top: '-102%'
    }, "slow");
    $(".fish").animate({
      top: '0%'
    }, 0);
  });
  $(".rightSide .fish").click(function () {
    $(".fish").animate({
      top: '-102%'
    }, "slow");
    $(".dish").animate({
      top: '0%'
    }, "slow");
  });
});


/*  ...................... // Second block ..........................*/

/*  ....................... Six block ............................*/


/*  .....................// Six block ............................*/