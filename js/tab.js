/**
 * Created by Administrator on 2016/11/7.
 */
(function () {
    var $div = $("#rightFrame>div");
    var $title = $("#rightFrame>.title");
    var arr = ["个人简历","个人履历","我的作品"]
    $("#Floor li").each(function (index) {
        $(this).click(function () {
            $title.text(arr[index]);
            $div.addClass("displayNone");
            $div.eq(index).removeClass("displayNone");
            $(this).addClass("ac").siblings().removeClass("ac")
        })
    })
})()
