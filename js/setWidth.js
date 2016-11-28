/**
 * Created by Administrator on 2016/11/7.
 */
(function () {
    var $dl = $("#ctxLeft dl")
    function setWidth(num) {
        $dl.eq(num).find('dd').each(function () {
            var $this = $(this);
            var width = $this.find('i').text();
            $this.width(width);
        })
    }
    for(var i=0;i<$dl.length;i++){
        setWidth(i)
    }
})()