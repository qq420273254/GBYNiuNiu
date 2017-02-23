/**
 * Created by 420273254 on 2017/2/22.
 */
/*下拉菜单*/
$(function(){
    $(".Menu").click(function(){
        if($(".Menu1").is(":hidden")){
            $(".Menu1").slideDown(500);
            $(this).addClass("MActive");
        }else{
            $(".Menu1").slideUp(500);
            $(this).removeClass("MActive");
        }
    });
});

$(function(){
    $(".Detail ul li").eq(0).click(function(){
        $(document.body).stop().animate({"scrollTop":"0"},1000);
    });
    $(".Detail ul li").eq(1).click(function(){
        $(document.body).stop().animate({"scrollTop":"1250"},1000);
    });
    $(".Detail ul li").eq(2).click(function(){
        $(document.body).stop().animate({"scrollTop":"2480"},1000);
    });
    $(".Detail ul li").eq(3).click(function(){
        $(document.body).stop().animate({"scrollTop":"0"},1000);
    });
    $(".Detail ul li").eq(4).click(function(){
        $(document.body).stop().animate({"scrollTop":"0"},1000);
    });
    $(".Detail ul li").eq(5).click(function(){
        $(document.body).stop().animate({"scrollTop":"3980"},1000);
    });
    $(".Detail ul li").eq(6).click(function(){
        $(document.body).stop().animate({"scrollTop":"0"},1000);
    });
});

/*图片轮播*/
var count;
var n=0;
$(function(){
    count=$(".Pic img").length;
    $(".Pic img:not(:first-child)").hide();
    $(".Right").click(function(){
        if(n<count-1){
            n++;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }else{
            n=0;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }

    });
    $(".Left").click(function(){
        if(n>0){
            n--;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }else{
            n=count-1;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }

    });

    $(".Pic").on("swipeleft",function(){
        if(n>0){
            n--;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }else{
            n=count-1;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }
    });

    $(".Pic").on("swiperight",function(){
        if(n<count-1){
            n++;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }else{
            n=0;
            $(".Pic img").filter(":visible").fadeOut(1000).parent().children().eq(n).fadeIn(1000);
        }
    });
});

/*第三张*/
$(function(){
    $(".First").click(function(){
        $(".SecondOption").fadeOut(300);
        $(".FirstOption").fadeIn(200);
        $(this).addClass("Active").siblings().removeClass("Active");
    });
    $(".Second").click(function(){
        $(".FirstOption").fadeOut(300);
        $(".SecondOption").fadeIn(200);
        $(this).addClass("Active").siblings().removeClass("Active");
    });
});

/*弹出窗口*/
/*弹出一*/
$(function(){
    $(".B1").click(function(){
        $(".Tan1").fadeIn(300);
        $(".Window1").animate({top:"20px",opacity:"show"},500);
    });

    $(".Close1").click(function(){
        $(".Window1").animate({top:"0px",opacity:"hide"},500);
        $(".Tan1").fadeOut(300);
    });
});
/*弹出二*/
$(function(){

    $(".B2").click(function(){
        $(".Tan2").fadeIn(300);
        $(".Window2").animate({top:"20px",opacity:"show"},500);
    });

    $(".Close2").click(function(){
        $(".Window2").animate({top:"0px",opacity:"hide"},500);
        $(".Tan2").fadeOut(300);
    });
});

/*弹出三*/
$(function(){
    $(".B3").click(function(){
        $(".Tan3").fadeIn(300);
        $(".Window3").animate({top:"20px",opacity:"show"},500);
    });
    $(".Close3").click(function(){
        $(".Window3").animate({top:"0px",opacity:"hide"},500);
        $(".Tan3").fadeOut(300);
    });
});

/*弹出四*/
$(function(){
    $(".B4").click(function(){
        $(".Tan4").fadeIn(300);
        $(".Window4").animate({top:"20px",opacity:"show"},500);
    });
    $(".Close4").click(function(){
        $(".Window4").animate({top:"0px",opacity:"hide"},500);
        $(".Tan4").fadeOut(300);
    });
});
/*弹出五*/
$(function(){
    $(".B5").click(function(){
        $(".Tan5").fadeIn(300);
        $(".Window5").animate({top:"20px",opacity:"show"},500);
    });
    $(".Close5").click(function(){
        $(".Window5").animate({top:"0px",opacity:"hide"},500);
        $(".Tan5").fadeOut(300);
    });
});