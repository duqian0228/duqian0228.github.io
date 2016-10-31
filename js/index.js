$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });
    var button=$(".play-button");
    button.eq(0).addClass("active");
    button.on("mousemove",function(){
        button.removeClass("active");
        $(this).toggleClass("active");
    });
    button.on("click",function(){
        $(".team .works").removeClass("active");
        var index=$(this).index();
        $(".team .works").eq(index).addClass("active");
    })
    $(".team .container .work").height($(".team .container .work .works").height());
    $(".team .container .works .works-box a").on("mousemove mouseover",function(){
        $(".team .container .works .works-box a .zhezhao").removeClass("active");
        $(this).find(".zhezhao").toggleClass("active");
    })
    $(".team .container .skills .skill").on("mousemove",function(){
        $(this).addClass("active").find(".skill-zhezhao").addClass("active");
    })
    $(".team .container .skills .skill").on("mouseout",function(){
        $(this).removeClass("active")
            .find(".skill-zhezhao")
            .delay(800)
            .queue(function(){
                $(this).removeClass("active").dequeue();
            });
    })

});