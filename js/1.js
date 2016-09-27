
// 声明Angular模块
var m = angular.module("xxApp", []);

// 声明模块下的控制器
m.controller("xxCtrl", function ($scope) {

    // 声明根作用域变量，可用于在各个控制器中传递数据
    $rootScope.name = "rootScope's name";

    // 声明变量
    $scope.firstName = "John";
    $scope.lastName = "Doe";

    $scope.persons = [
        {
            firstName: "aa",
            lastName: "aa"
        },
        {
            firstName: "bb",
            lastName: "cc"
        },
        {
            firstName: "dd",
            lastName: "ee"
        }];

    // 声明方法
    $scope.getFirstName = function () {
        alert($scope.firstName);
    };

    $scope.getLastName = function () {
        alert($scope.lastName);
    };

});


// 声明自定义指令
m.directive("xin", function(){
    return {
        /**
         * 定义指令的使用方式，默认EA
         * E 作为标签元素名使用
         * A 作为属性使用
         * C 作为类名使用
         * M 作为注释使用
         */
        restrict: "AECM",
        /**
         * 自定义标签的内容
         */
        template: "<h4 style='color:blue'>这是一个自定义指令!</h4>"
    }
});

