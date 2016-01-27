(function(){
    'use strict';

    /**
     * @ngdoc directive
     * @name delta.directive:caSpan
     * @element ca-span
     * @scope
     * @restrict E
     *
     * @description
     * Componente padrão de span
     *
     * @param {string} texto Texto a ser exibido no componente
     **/

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