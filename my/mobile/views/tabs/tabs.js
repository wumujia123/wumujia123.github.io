/**
 * Created by hxsd on 2016/10/27.
 */
angular.module("myApp").controller("tabsCtrl",function($scope,ShopCart){
    // 获得购物车中所有商品
    var cartData = ShopCart.findAll();

    // 统计总数量
    $scope.buyNumber = function () {
        var total = 0;
        for (var i = 0; i < cartData.length; i++) {
            total += cartData[i].count;
        }
        return total;
    };
});