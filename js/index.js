/**
 * Created by hxsd on 2016/11/23.
 */
$(function () {

    (function () {
        var bool = true;
        var num = 1;
        setInterval(function () {
            if(bool){
                run(1,0);
                num++;
                num>7?num=1:num=num;
                $('#bgImg img').animate({"opacity": 0.2},6000,function () {
                    $('#bgImg img').attr("src","images/bg/"+num+".jpg").animate({"opacity": 1});
                })
                bool = false;
            }else {
                run(1.2,3);
                bool = true;
            }
        },6000)
        function run(a,b) {
            $('#bgImg img').css({"transform":"scale("+a+") rotate("+b+"deg)"});
        }
        run(1.2,3);
        var screenW = window.screen.width;

        var size = 20*screenW/1366;
        $("html").css({"font-size":size+"px"})

    })()

})
