/**
 * Created by Administrator on 2016/10/27.
 */
angular.module("myApp").controller("guideCtrl",function($scope,$ionicSlideBoxDelegate,$window) {
    $scope.style = {
        width: $window.innerWidth + "px",
        height: $window.innerHeight + "px"
    };
    $scope.$watch(function(){
        return $window.innerWidth;
    }, function(value) {
        $scope.style.width=value + "px";
    });
    $scope.$watch(function(){
        return $window.innerHeight;
    }, function(value) {
        $scope.style.height=value + "px";
    });
});
