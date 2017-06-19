/**
 * Created by fantt on 2017/4/18.
 */

$(function(){
    var count=0;
    var timer;
    showimg();
    function showimg(){
        timer=setInterval(function(){
            count++;
            $(".ul_img_lun").animate({"margin-left":-1375*count+"px"},3000,"linear",function(){
                if(count>=$(".li_img_lun").length-1){
                    $(".ul_img_lun").css("margin-left","0px");
                    count=0;
                }
            })
        },3100);
    }
    $(".li_img_span").each(function(){
        $(this).hover(function(){
            clearInterval(timer);
        },function(){
            showimg();
        }).click(function(){
            if($(this).attr("title")=="l"){
                count++;
                $(".ul_img_lun").animate({"margin-left":-1370*count+"px"},3000,"linear",function(){
                    if(count>=$(".li_img_lun").length-1){
                        $(".ul_img_lun").css("margin-left","0px");
                        count=0;
                    }
                })
            }
            else{
                count--;
                if(count<0){
                    count=$(".li_img_lun").length-2;
                    $(".ul_img_lun").css("margin-left","-2770px");
                }
                $(".ul_img_lun").animate({"margin-left":-1370*count+"px"},3000,"linear");
            }
        });
    });
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
    $(".li_edu_img_hover").each(function(index){
        $(this).mouseenter(function(){
            $(".li_edu_img_hover2").eq(index).css("z-index","666");
        })
    });
    $(".li_edu_img_hover2").each(function(index){
        $(this).mouseleave(function(){
            $(".li_edu_img_hover2").eq(index).css("z-index","0");
        })
    });
    var num=0;
    var timer2;
    showtime();
    $(".li_bear_students_introduce").clone().appendTo($(".ul_bear_students_introduce"));
    function showtime(){
        timer2=setInterval(function(){
            num++;
            $(".ul_bear_students_introduce").animate({"margin-left":-200*num+"px"},3000,"linear",function(){
                if(num>=$(".li_bear_students_introduce").length-3){
                    $(".ul_bear_students_introduce").css("margin-left","0px");
                    num=0;
                }
            })
        },3100)
    }
})/**
 * Created by fantt on 2017/4/21.
 */
