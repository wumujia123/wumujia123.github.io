/**
 * Created by hxsd on 2016/10/27.
 */
// 依赖注入DataFacoty这个全局的单例对象
angular.module("myApp").controller("productsCtrl",function($scope, DataFactory){
    // 调用单例对象的.query()方法，拿到存储的全局的商品数据
    $scope.data = DataFactory.query();
});