/**
 * Created by fantt on 2017/5/3.
 */
$(".li_img_show").each(function(index){
    $(this).mouseenter(function(){
        $(".li_img_show1").eq(index).css("z-index","100");
        $(".li_edu_img_3").eq(index).css("display","block");
    });
});
$(".li_img_show1").each(function(index){
    $(this).mouseleave(function(){
        $(".li_img_show1").eq(index).css("z-index","0");
        $(".li_edu_img_3").eq(index).css("display","none");
    });
});