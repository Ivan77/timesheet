(function(){

    'use strict';

    /**
     * @ngdoc directive
     * @name delta.directive:caInputText
     * @element ca-input-text
     * @scope
     * @restrict E
     *
     * @description
     * Componente padrão de input text
     *
     * @param {string} label Texto a ser exibido na parte superior do input
     * @param {number} colspan Quantidade de colunas que o input ocupara. Default: 3
     * @param {object} ng-model Referência do input
     * @param {boolean} ng-required Informa se o campo é obrigatório ou não. Default:false
     **/

    angular.module('delta.directive')
        .directive('caEnter', caEnter);

    function caEnter(KeyCode){
        return{
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs){
            element.bind('keydown', onKeydown);

            function onKeydown(event){
                var code = event.keyCode;

                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.caEnter);
                }
            }
        }
    }
})();