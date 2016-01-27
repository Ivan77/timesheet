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

    /* @ngInject */
    angular.module('delta.directive')
        .directive('caCrud', caCrud);

    function caCrud($timeout, AlertService){
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
            scope.onSalvar = onSalvar;
            scope.onLimpar = onLimpar;
            scope.onExcluir = onExcluir;

            function onSalvar(){
                setarTouchedNosInputs();
                if(scope.caFormCrud.$invalid){
                    AlertService.showError('Verifique os campos antes de salvar!');
                    return;
                }
                scope.salvar();
            }

            function onLimpar(){
                scope.limpar();

                $timeout(function() {
                    setarUntouchedNosInputs();
                }, 100);
            }

            function onExcluir(){
                scope.excluir();
            }

            function setarTouchedNosInputs(){
                angular.forEach(scope.caFormCrud.$error, function(error){
                    angular.forEach(error, function(field){
                        field.$setTouched();
                    });
                });
            }

            function setarUntouchedNosInputs(){
                angular.forEach(scope.caFormCrud.$error, function(error){
                    angular.forEach(error, function(field){
                        field.$setUntouched();
                    });
                });
            }
        }
    }
})();