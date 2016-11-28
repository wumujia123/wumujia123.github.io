/**
 * Created by Administrator on 2016/10/30.
 */
angular.module('myApp').controller('addressCtrl', function ($scope,ShopCart,$ionicPopup,$location) {
    $scope.data = {
        name: '',
        postcode: '',
        phone: '',
        city: '',
        road: ''
    };
    $scope.clear=function(){
        ShopCart.clear()
    };
    $scope.numberFilter=function(text){
        return /^[0-9]+$/.test(text)
    };
    $scope.showConfirm = function () {
        $ionicPopup.confirm({
            title: '提示',
            template: '您确定提交订单?',
            buttons: [
                {text: '取消'},
                {
                    text: '<b>确定</b>',
                    type: 'button-positive',
                    onTap: function(e) {return true;}
                }
            ]
        }).then(function (res) {
            if (res) {
                $scope.clear();
                $location.path("/tabs/thanks");
            } else {
                console.log('您还不确定!');
            }
        });
    };
});