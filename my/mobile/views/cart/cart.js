/**
 * Created by hxsd on 2016/10/27.
 */
angular.module("myCart")    // 这里使用的模块不是myApp，是myCart
    .factory("ShopCart", function () {
        var cartData = [];  // 不放在对象中返回，也就意味着不必向外界暴露它

        return {
            add: function (product) {
                var addedToExistingItem = false;
                for (var i = 0; i < cartData.length; i++) {
                    //if (cartData[i].product.id == id) {   // 如果商品有id，用id比较
                    if (cartData[i].product.title == product.title) { // 如果商品没有id，用name比较
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }

                // 如果是新加入购物车的商品(购物车中原来没有)
                if (!addedToExistingItem) {
                    cartData.push({count: 1, product:product});
                }
            },
            remove: function (id) {
                for (var i = 0; i < cartData.length; i++) {
                    if (cartData[i].product.id == id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },
            findAll: function () {
                return cartData;
            },
            clear:function(){
                cartData.length = 0;
            }
        };  // end return
    })
    .controller("cartCtrl", function ($scope, ShopCart) {
        // 获得购物车中所有商品
        $scope.cartData = ShopCart.findAll();

        // 统计总金额
        $scope.total = function () {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i++) {
                total += ($scope.cartData[i].product.price * $scope.cartData[i].count);
            }
            return total;
        };
        $scope.remove = function (id) {
            ShopCart.remove(id)
        };
        // 统计总数量
        $scope.itemCount = function () {
            var total = 0;
            for (var i = 0; i < $scope.cartData.length; i++) {
                total += $scope.cartData[i].count;
            }
            return total;
        };

        // 输出购物车中商品信息(测试方法)
        $scope.itemInfo = function () {
            var info = "";
            for (var i = 0; i < $scope.cartData.length; i++) {
                var item = $scope.cartData[i];
                info += item.product.title + "," + item.count + "; ";
            }
            return info;
        };

    });