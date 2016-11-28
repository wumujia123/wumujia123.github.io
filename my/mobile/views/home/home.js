/**
 * Created by Administrator on 2016/10/29.
 */
angular.module('myApp').controller('homeCtrl', function ($scope,$http,$ionicScrollDelegate) {
    $scope.activeIndex=0;
    //当发生幻灯片切换事件时，换行
    $scope.onSlideChanged= function (index) {
        $scope.activeIndex=index;
    };
    //当单击分页器小圆点时
    $scope.pagerClick= function (index) {
        $scope.activeIndex=index;
    };
    $scope.news = [
        {
            title:"要价6K的27寸2K屏 戴尔U2717D显示上手装逼",
            imgsrc:"images/news1.jpg",
            text:"很多玩家除了看重戴尔的品质与售后之外更多的喜欢它的旋转屏功能包括我一样，如果让我挑不足点的话我觉的该显示器不是10bit面板是唯一的遗憾。…"
        },
        {
            title:"身临其境新体验 小宅Z4 VR头盔随感谈",
            imgsrc:"images/news2.jpg",
            text:"小宅却真正潜下心下，通过多年沉淀而打造的Z4不仅集成了耳机，同时也在一些细节设计上下足了功夫，比如机械触屏按键的加入，一键式开启面板以及加厚的头带受力减压装置等，均使用户的体验与舒适度得到提升。…"
        }
    ];

    $scope.infiniteScroll = function () {
        $http.get("json/news.json").success(function (data) {
            Array.prototype.push.apply($scope.news,data);
        }).finally(function () {
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
    $scope.top = function(){
        // 滚动到顶部。true - 使用动画显示滚动过程
        $ionicScrollDelegate.scrollTop(true);
    };
});