/*************************************************************************************************************************************
                                                        NAVBAR  SECTION
 *************************************************************************************************************************************/
    //menu toggle script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //slide-up script 
    $('#back-to-top').click(function(){
        $('html').animate({scrollTop :0});
    });

/*************************************************************************************************************************************
                                                        PROJECT  SECTION
*************************************************************************************************************************************/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});


var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 400
});

// $(function(){
//   $("a.smooth-scroll").click(function(event){
//       event.preventDefault();
//       var section_id = $(this).attr("href");
//       $("html,body").animate({
//           scrollTop:$(section_id).offset().top +50
//       },1250,"easeInOutExpo")
//   });
// });

/*--------------------------------------------------------------------------------------------------------
                                                  HEADER
-------------------------------------------------------------------------------------------------------*/

$(function (){
  showHideNav();
  $(window).scroll(function(){
      showHideNav();
  });

  function showHideNav(){
      if($(window).scrollTop()>50){
          $("#back-to-top").fadeIn();
      }else{
          $("#back-to-top").fadeOut();
      }
  }
});

/*****************************************************************
                PRELOADER FUNCTION
*****************************************************************/

$(window).on('load', function(){
   $(".wrapper").delay(1000).fadeOut('slow');
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Full Stack", "Freelancer", "UI UX Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//active button
$(document).on('click','ul li', function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length
// for(let i=0; i<menuLength; i++){
//     if(menuItem[i].href === currentLocation){
//         menuItem[i].className = 
//     }
// }

$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});