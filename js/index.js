$(function(){
   $(".banner .myself").delay(1000)
       .queue(function(){
           $(this).addClass("active").dequeue();
       });
    $(".banner .banner1").delay(1000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).css("left","-900px").dequeue();
                })
                .dequeue();
        });
    $(".banner .banner2").delay(2000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).css("left","-300px").dequeue();
                })
                .dequeue();
        })
    $(".banner .banner3").delay(3000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).css("left","300px").dequeue();
                })
                .dequeue();
        })
    $(".banner .banner4").delay(4000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).css("left","900px").dequeue();
                })
                .dequeue();
        });
    $(".banner-small .myself").delay(1000)
        .queue(function(){
            $(this).addClass("active").dequeue();
        });
    $(".banner-small .banner1").delay(1000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        });
    $(".banner-small .banner2").delay(2000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        })
    $(".banner-small .banner3").delay(3000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        })
    $(".banner-small .banner4").delay(4000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        });
    $(".banner-big .myself").delay(1000)
        .queue(function(){
            $(this).addClass("active").dequeue();
        });
    $(".banner-big .banner1").delay(1000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        });
    $(".banner-big .banner2").delay(2000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        })
    $(".banner-big .banner3").delay(3000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        })
    $(".banner-big .banner4").delay(4000)
        .queue(function(){
            $(this).addClass("active")
                .delay(1000)
                .queue(function(){
                    $(this).toggleClass("move").dequeue();
                })
                .dequeue();
        });

    $(".ps-work").on("mouseover",function(){
        $(this).find(":last-child").addClass("active").on("mouseover mouseleave",false);
    }).on("mouseout",function(){
        $(this).find(":last-child").removeClass("active").on("mouseover mouseleave",false);
    });
    var Top1=$(".content-small .practice")[0].offsetTop;
    var Top2=$(".content-small .game")[0].offsetTop;
    var Top3=$(".content-small .ps")[0].offsetTop;
    var Top4=$(".content-small .ai")[0].offsetTop;
    var top1=$(".content .practice")[0].offsetTop;
    var top2=$(".content .game")[0].offsetTop;
    var top3=$(".content .ps")[0].offsetTop;
    var top4=$(".content .ai")[0].offsetTop;
    var m_top1=$(".content-big .practice")[0].offsetTop;
    var m_top2=$(".content-big .game")[0].offsetTop;
    var m_top3=$(".content-big .ps")[0].offsetTop;
    var m_top4=$(".content-big .ai")[0].offsetTop;

    var top=600;
    var Top=500;
    var m_top=400;
    window.onscroll=function(){
        var scroll=document.documentElement.scrollTop || document.body.scrollTop;
        if(scroll+top>top1){
            $(".works-ps").eq(0).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+top>top2){
            $(".works-ps").eq(1).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+top>top3){
            $(".works-ps").eq(2).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+top>top4){
            $(".works-ps").eq(3).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("ai-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+Top>Top1){
            $(".content-small .works-ps").eq(0).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+Top>Top2){
            $(".content-small .works-ps").eq(1).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+Top>Top3){
            $(".content-small .works-ps").eq(2).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+Top>Top4){
            $(".content-small .works-ps").eq(3).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+m_top>m_top1){
            $(".content-big .works-ps").eq(0).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+m_top>m_top2){
            $(".content-big .works-ps").eq(1).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+m_top>m_top3){
            $(".content-big .works-ps").eq(2).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("active-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
        if(scroll+m_top>m_top4){
            $(".content-big .works-ps").eq(3).find(".title")
                .delay(300)
                .queue(function(){
                    $(this).addClass("active")
                        .delay(500)
                        .queue(function(){
                            $(this).addClass("ai-move").dequeue();
                        })
                        .dequeue()
                        .delay(1000)
                        .queue(function(){
                            $(this).parent().find(".ps-work").addClass("active").dequeue();
                        })
                });
        }
    }
});