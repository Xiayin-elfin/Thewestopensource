$(function(){
    $(".li_img_show").each(function(index){
        $(this).mouseenter(function(){
            $(".li_img_show1").eq(index).css("z-index","10");
            $(".li_edu_img_3").eq(index).css("display","block");
        });
    });
    $(".li_img_show1").each(function(index){
        $(this).mouseleave(function(){
            $(".li_img_show1").eq(index).css("z-index","0");
            $(".li_edu_img_3").eq(index).css("display","none");
        });
    });
    var count=0;
    var timer;
    showimg();
    $(".li_about4_img_lun").clone().appendTo($(".ul_about4_img"));
    function showimg(){
        timer=setInterval(function(){
            count++;
            $(".ul_about4_img").animate({"margin-left":-180*count+"px"},3000,"linear",function(){
                if(count>=$(".li_about4_img_lun").length-5){
                    $(".ul_about4_img").css("margin-left","0px");
                    count=0;
                }
            });
        },3001);
    }
    var num=0;
    var timer2;
    showtime();
    $(".li_about5_img_lun").clone().appendTo($(".ul_about5_img"));
    function showtime(){
        timer2=setInterval(function(){
            num++;
            $(".ul_about5_img").animate({"margin-left":-180*count+"px"},3000,"linear",function(){
                if(num>=$(".li_about5_img_lun").length-5){
                    $(".ul_about5_img").css("margin-left","0px");
                    num=0;
                }
            });
        },3001);
    }
});
