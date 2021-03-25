/*************************************************************************************************************************************
                                                        NAVBAR  SECTION
 *************************************************************************************************************************************/

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });

    //menu toggle script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
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


/*--------------------------------------------------------------------------------------------------------------------------------------
                                                                STYLE SWITCHER 
--------------------------------------------------------------------------------------------------------------------------------------*/
