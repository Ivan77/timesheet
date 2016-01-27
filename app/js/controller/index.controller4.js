(function(){
    'use strict';

    angular.module('delta')
        .controller('IndexController4', IndexController4);

    /* @ngInject */
    function IndexController4(AlertService){
        var vm = this;
        vm.entidade = {};

        vm.salvar = salvar;
        vm.excluir = excluir;
        vm.limpar = limpar;
        vm.clicouEnter = clicouEnter;

        function salvar(){
            AlertService.showSuccess('Salvou com sucesso!');
        }

        function excluir(){
            AlertService.showSuccess('Excluiu com sucesso!');
        }

        function limpar(){
            vm.entidade = {};
        }

        function clicouEnter(){
            AlertService.showInfo('Clicou enter!');
        }
    }
})();