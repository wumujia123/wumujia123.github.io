/**
 * Created by hxsd on 2016/10/27.
 */
// 声明购物车模块
var mycart = angular.module("myCart", []);

// 声明主模块
var myapp = angular.module("myApp", ["ionic", "myCart"]);

// 配置路由
myapp.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $stateProvider.state("guide", {
        url: "/guide",
        templateUrl: "views/guide/guide.html",
        controller: "guideCtrl"
    }).state("tabs", {
        url: "/tabs",
        abstract: true,      // 抽象的，也就是不能具体化，不能显示
        templateUrl: "views/tabs/tabs.html",
        controller: "tabsCtrl"
    }).state("tabs.home", {
        url: "/home",
        views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}
    }).state("tabs.products", {
        url: "/products",
        views:{"tab-products":{templateUrl:"views/products/products.html",controller:"productsCtrl"}}
    }).state("tabs.detail", {
        url: "/detail?:id",  //传参，参数名字叫id
        views: {"tab-products":{templateUrl: "views/detail/detail.html",controller: "detailCtrl"}}
    }).state("tabs.cart", {
        url: "/cart",
        views: {"tab-cart": {templateUrl: "views/cart/cart.html",controller: "cartCtrl"}}
    }).state("tabs.address", {
        url: "/address",
        views: {"tab-cart": {templateUrl: "views/address/address.html",controller: "addressCtrl"}}
    }).state("tabs.thanks", {
        url: "/thanks",
        views: {"tab-cart": {templateUrl: "views/thanks/thanks.html",controller: "thanksCtrl"}}
    });

    $urlRouterProvider.otherwise("/guide");// 默认首页
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
});

// 创建单例对象 - 哪里需要，哪里注入
// 如果将来在哪个控制器中需要使用这个商品数据，注入这个DataFactory单例对象，
// 然后调用它的.query()方法，就拿到了存储的商品数据
myapp.factory("DataFactory", function ($http) {
    var data = { productList: [] };   // 注意：这里一定要是对象的形式

    // http请求服务器端数据。实际开发中，这里替换为服务器端的url
    $http.get("json/products.json").success(function (_data) {
        data.productList = _data;   // 将服务器返回的商品数据保存起来
    });

    // 返回单例对象
    return {
        // 该对象提供了一个获取所有数据的方法query
        query: function () {
            return data;   // 返回数据
        }
    };
});

myapp.controller("myAppCtrl",function($scope,$ionicSideMenuDelegate){
    $scope.toggleLeftSideMenu = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});
