(function(){
    angular.module('delta.directive')
        .directive('caSpan', caSpan);

    function caSpan(){
        return{
            restrict: 'AE',
            templateUrl: 'app/arquitetura/directive/ca-span/ca-span.directive.html',
            scope:{
                texto: '@'
            }
        };
    }
})();