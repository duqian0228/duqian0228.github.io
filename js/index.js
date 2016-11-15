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
    });
    $(".team .container .work").height($(".team .container .work .works").height());
    $(".team .container .works .works-box a").on("mousemove mouseover",function(){
        $(".team .container .works .works-box a .zhezhao").removeClass("active");
        $(this).find(".zhezhao").toggleClass("active");
    });
    $(".team .container .skills .skill").on("mousemove",function(){
        $(this).addClass("active").find(".skill-zhezhao").addClass("active");
    });
    $(".team .container .skills .skill").on("mouseout",function(){
        $(this).removeClass("active")
            .find(".skill-zhezhao")
            .delay(800)
            .queue(function(){
                $(this).removeClass("active").dequeue();
            });
    });
    var canvas=$("#canvas").get(0);
    var ctx=canvas.getContext("2d");
    var blocks=[];
    var width=$(canvas).width();
    var height=$(canvas).height();
    function Pop(x,y,h,ban,color,s){
        // x,y中心点位置，h---圆的中心位置，ban---半径，color---颜色，s---速度
        this.x=x;
        this.y=y;
        this.r=ban;
        this.h=h;
        this.color=color;
        this.s=s;
    }
    Pop.prototype.baozha=function(){
        var that=this;
        blocks=blocks.filter(function(v){
            return v!==that;
        })
    };
    for(var i=0;i<150;i++){
        //x,y中心点位置，h---圆的中心位置，ban---半径，color---颜色，s---速度
        var x=Math.ceil(Math.random()*width);
        var y=height;
        var h=360;
        var ban=Math.ceil(Math.random()*10);
        var s=Math.random()*2;

        var r=Math.ceil(Math.random()*255);
        var g=Math.ceil(Math.random()*255);
        var b=Math.ceil(Math.random()*155);
        var color="rgba("+r+","+g+","+b+",0.4)";
        blocks.push(new Pop(x,y,h,ban,color,s));//创造泡泡，并将泡泡放到blocks中
    }
    //画泡泡
    function drawPop(pop){

        ctx.save();
        ctx.beginPath();
        ctx.translate(pop.x,pop.y);
        pop.h -=pop.s;
        ctx.arc(0,pop.h,pop.r,0,2*Math.PI);
        if(pop.h<-500){
            pop.baozha();
        }
        ctx.fillStyle=pop.color;
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    function render(){
        ctx.clearRect(0,0,1000,1000);
        for(var j=0;j<blocks.length;j++){
            drawPop(blocks[j]);
        }
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
});