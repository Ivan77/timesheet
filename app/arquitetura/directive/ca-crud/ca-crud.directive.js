(function(){

    'use strict';

    /**
     * @ngdoc directive
     * @name delta.directive:caCrud
     * @element ca-crud
     * @scope
     * @restrict E
     *
     * @description
     * Componente padrão de input text
     *
     * @param {function} salvar Teste
     **/

    angular.module('delta.directive')
        .directive('caCrud', caCrud);

    function caCrud(){
        return{
            link: link,
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/ca-crud/ca-crud.directive.html',
            transclude: true,
            scope:{
                titulo: '@',
                salvar: '&',
                excluir: '&',
                limpar: '&'
            }
        };
        function link(scope, element, attrs){
        }
    }
})();