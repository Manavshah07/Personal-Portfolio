/*************************************************************************************************************************************
                                                        NAVBAR  SECTION
 *************************************************************************************************************************************/
    //menu toggle script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

/*************************************************************************************************************************************
                                                        SKILLS  SECTION
*************************************************************************************************************************************/
// $(document).ready(function(){
//     $("#progress-elements").waypoint(function(){
//         $(".progress-bar").each(function(){
//             $(this).animate({
//                 width: $(this).attr("aria-valuenow")+"%"
//             },800);
//         });
//         this.destroy();
//     }, {
//         offset: 'bottom-in-view'
//     });
// });


// $(document).ready(function(){
//     $('#skills-tab').responsiveTabs({
//         animation:'slide'
//     });
// });

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