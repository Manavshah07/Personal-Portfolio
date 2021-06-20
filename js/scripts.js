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

/*************************************************************************************************************************************
                                                        SKILLS  SECTION
*************************************************************************************************************************************/
//function skills(){
//    const skillsSection = document.querySelector(".skill"),
//    tabsContainer = document.querySelector(".skill-tabs");
//    
//    tabsContainer.addEventListener("click", (event) => {
//        
//        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
//            const target = event.target.getAttribute("data-target");
//            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
//            
//            event.target.classList.add("active");
//            
//            skillsSection.querySelector(".tab-content.active").classList.remove("active");
//            
//            skillsSection.querySelector(target).classList.add("active");
//        }
//    });
//}
//skills();

//( () => {
//        skillSection = document.querySelector(".skill"),
//        tabsContainer = document.querySelector(".skill-tabs");
//    
//        tabsContainer.addEventListener("click", (event) => {
//            if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
//                const target = event.target.getAttribute("data-target");
//                
//                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
//                
//                event.target.classList.add("active");
//                
//                skillSection.querySelector(".tab-content.active").classList.remove("active");
//                
//                skillSection.querySelector(target).classList.add("active");
//            }
//        })
//})();



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



$('#menu').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});