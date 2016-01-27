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
     * @param {string} salvar Teste
     **/

    angular.module('delta.directive')
        .directive('caPanel', caPanel);

    function caPanel(){
        return{
            link: link,
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/ca-panel/ca-panel.directive.html',
            transclude: {
                'body': 'panelBody',
                'footer': '?panelFooter'
            },
            scope:{
                titulo: '@',
                tipo: '@?'
            }
        };
        function link(scope, element, attrs){
            if(!attrs.tipo){
                attrs.tipo = 'default';
            }
            attrs.tipo = 'panel-'+attrs.tipo;
        }
    }
})();