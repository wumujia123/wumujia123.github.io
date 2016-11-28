/**
 * Created by Administrator on 2016/10/30.
 */
angular.module("myApp").controller("thanksCtrl",function($scope,$location,$timeout){
    // 获得购物车中所有商品
    $scope.back=function(){
        $location.path("/tabs/cart");
        $timeout(function(){
            $location.path("/tabs/home")
        },1000);
    }
});