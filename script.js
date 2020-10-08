$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky"); 
        }
    })

    // typing animation
    var typed = new Typed(".typing",{
        strings: ["Student" , "Developer" ,"Programmer"  , "Dancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2",{
        strings: ["Student" ,"Developer", "Programmer", "Dancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var swiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }
      });
})
