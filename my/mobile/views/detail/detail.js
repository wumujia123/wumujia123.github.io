/**
 * Created by hxsd on 2016/10/27.
 */
angular.module("myApp").controller("detailCtrl",function($scope,$stateParams,DataFactory,ShopCart){
    // 解析url中的参数(通过url传递的参数，解析出来都是字符串)
    var id = $stateParams.id;
    // 获得所有的商品数据
    var data = DataFactory.query();

    // 从商品数组中找出商品名称与传的参数值相同的商品出来
    angular.forEach(data.productList,function(item){
        if(item.id == id){    // 如果找到了
            $scope.product = item;  // 将该商品对象保存到$scope中
            return false;   // 终止循环(已经找到了，不需要继续找了)
        }
    });

    // 加入购物车
    $scope.add = function(product){
        //console.log("加入购物车:" + product.title);
        ShopCart.add(product);
    };
});