$(document).ready(function() {
  var winWidth = $(window).width();

  var msngCalcHeight = function() {
    var msngBody = $(".msng-chat-lg");
    var msngChatLgHeight = msngBody.height() - 50;
    var msngChatLgFooterHeight = msngBody.find(".msng-footer-wrap").height();

    msngBody
      .find(".msng-list")
      .height(msngChatLgHeight - msngChatLgFooterHeight);
  };

  if ($(".msng-chat-lg").length) {
    msngCalcHeight();
  }

  $(".msng-area textarea").autoResize({
    animate: {
      //enabled: true,
      duration: "fast",
      complete: function() {},
      step: function(now, fx) {}
    },

    animateCallback: function() {
      //msngCalcHeight();
    },

    maxHeight: "200px"
  });

  //msng-list
  $(".msng-scroll-to-bottom").click(function() {
    var mainHeight = $(this)
      .parents(".msng-chat")
      .find(".msng-list-wrap");

    var scrollDown = mainHeight.height() - $(".msng-list").height();

    $(this)
      .parents(".msng-chat")
      .find(".msng-list")
      .stop()
      .animate({ scrollTop: scrollDown }, 500, "swing");
  });
  //msng-list end

  $(".select-date").datepicker();

  $(".js-user-link").click(function() {
    $(this)
      .parent()
      .find(".user-link-info")
      .toggleClass("open");
    $("body").toggleClass("open-chat-mobi");
  });

  $(".quick-support-close").click(function() {
    $(this)
      .parents(".user-link-info")
      .removeClass("open");
  });

  if ($(".buying-steps").length && $(".step-active").length) {
    let stepDone = $(".step-active");
    let stepActivePositionX = stepDone[stepDone.length - 1];
    $(".buying-steps").scrollLeft(stepActivePositionX.offsetLeft - 10);
  }

  $(".js-toggle-list-projects").click(function() {
    $(this).toggleClass("open");
    $(".js-sidebar-list-projects").toggleClass("d-none");
  });

  $(".b-dashboard-list").owlCarousel({
    nav: false,
    smartSpeed: 500,
    margin: 40,
    responsive: {
      0: {
        items: 1,
        dots: false,
        center: true,
        margin: 20
      },
      1200: {
        items: 3,
        dots: true
      },
      700: {
        items: 2,
        center: true
      }
    }
  });

  $(".burger").click(function() {
    $("body").toggleClass("nav-mob-open");
    $(this).toggleClass("open");
    $(".sidebar").toggleClass("open");
    $(".mobi-contacts-link").toggleClass("active");
  });

  var $pricingCarousel = $(".pricing-carousel");

  $pricingCarousel.children().each(function(index) {
    $(this).attr("data-position", index); // NB: .attr() instead of .data()
  });

  $pricingCarousel.owlCarousel({
    nav: false,
    smartSpeed: 500,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2,
        margin: -72,
        center: true
      }
    }
  });

  $(document).on("click", ".owl-item>div", function() {
    $pricingCarousel.trigger("to.owl.carousel", $(this).data("position"));
  });

  $(".js-pass-switch").click(function() {
    $(this)
      .find("i")
      .toggleClass("icon-eye-open");

    var input = $(this)
        .parent()
        .find("input"),
      type = input[0].type;

    if (type == "password") {
      input[0].type = "text";
    } else {
      input[0].type = "password";
    }
  });

  function editInput(input) {
    input.attr("disabled", false);
    input.select();

    input.focusout(function() {
      input.attr("disabled", true);
    });
  }

  $(".info-input-edit").click(function() {
    var input = $(this)
      .parent()
      .find(".form-control");
    editInput(input);
  });

  function projectNameEdit() {
    $(".name-project-input input")[0].focus();
    $(".name-project-input input").blur(function() {
      $(this)
        .parents(".name-project")
        .removeClass("mode-edit");
    });

    $(".name-project-input input").on("keypress", function(e) {
      if (e.which == 13) {
        $(this).blur();
      }
    });
  }

  $(".js-edit-name-project").click(function(e) {
    e.preventDefault();

    $(".name-project").addClass("mode-edit");
    projectNameEdit();
  });

  if (winWidth >= 992) {
    $('[data-toggle="popover"]').popover();

    $('[data-toggle="tooltip"]').tooltip();

    $(".popover-hover-view").hover(
      function() {
        $(this).popover("show");
      },
      function() {
        $(this).popover("hide");
      }
    );
  }

  $(".js-call-calendar").click(function() {
    $(this)
      .parent()
      .find(".calendar")
      .addClass("open");
  });

  $(".calendar-close").click(function() {
    $(this)
      .parents(".calendar")
      .removeClass("open");

    var datepicker = $(this)
      .parents(".calendar")
      .find(".select-date")
      .datepicker()
      .data("datepicker");
    datepicker.clear();
  });

  $(".word-search-input").on("focusin", function() {
    $(".search-options").addClass("open");
  });

  $(".word-search-input").on("focusout", function() {
    $(".search-options").removeClass("open");
  });

  $(".js-search-chat").click(function() {
    $(".msng-chat-search").toggleClass("open");
  });

  $(".msng-chat-search-close").click(function() {
    $(".msng-chat-search").removeClass("open");
  });

  $(".js-expand-chat").click(function() {
    $(".msng").addClass("msng-expand");
    $(this).addClass("d-none");
  });

  $(".js-toggle-chat-bar").click(function() {
    $(".msng").removeClass("msng-expand");
    $(".js-expand-chat").removeClass("d-none");
  });

  $(".js-toggle-ibox-content").click(function() {
    $(this).toggleClass("open");
    $(this)
      .parents(".ibox")
      .find(".ibox-content")
      .stop()
      .slideToggle();
  });
});
