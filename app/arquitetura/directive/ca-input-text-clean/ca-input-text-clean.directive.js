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
     * @param {boolean} showButtonClean Mostra o botão de limpar o componente. Default:false
     **/

    angular.module('delta.directive')
        .directive('caInputTextClean', caInputTextClean);

    function caInputTextClean(){
        return{
            link: link,
            require: '^form',
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/ca-input-text-clean/ca-input-text-clean.directive.html',
            scope:{
                label: '@',
                colspan: '@',
                ngModel: '=?',
                ngRequired: '=?',
                showButtonClean: '=?',
                ngMaxlength: '@',
                ngMinlength: '@',
                ngFocus: '@'
            },
            replace: true
        };
        
        function link(scope, element, attrs, formControl){
            scope.inputName = 'inputText'+scope.$id; //define nome único para campo de texto
            scope.formControl = formControl;

            scope.isCleanEnabled = attrs.showButtonClean;

            if(!attrs.colspan){
                attrs.colspan = 3;
            }
            scope.myColspan = 'col-sm-'+attrs.colspan;

            scope.cleanText = function() {
                scope.ngModel = "";
            }

            /*ngModel.$render = function () {
                var newValue = ngModel.$viewValue;
                console.log(newValue)
            };*/

            attrs.$watch("ngModel", function(newValue,oldValue){
                if(scope.showButtonClean == true && newValue != undefined && newValue.length > 0){
                    scope.isCleanEnabled = true;
                }else{
                    scope.isCleanEnabled = false;
                }
                console.log(oldValue+" -> "+newValue);
            });
        }
    }
})();