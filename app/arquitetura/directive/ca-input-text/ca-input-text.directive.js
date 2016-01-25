(function(){

    'use strict'

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
        .directive('caInputText', caInputText);

    function caInputText(){
        return{
            link: link,
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/ca-input-text/ca-input-text.directive.html',
            scope:{
                label: '@',
                colspan: '@',
                ngModel: '=?',
                ngRequired: '=?'
            }
        };
        function link(scope, element, attrs){
            if(!attrs.colspan){
                attrs.colspan = 3;
            }
            scope.myColspan = 'col-sm-'+attrs.colspan;
        }
    }
})();