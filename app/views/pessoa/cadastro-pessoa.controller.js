(function(){
    angular.module('delta')
        .controller('CadastroPessoaController', CadastroPessoaController);

    /* @ngInject */
    function CadastroPessoaController($stateParams, AlertService){
        var vm = this;
        vm.nome = 'CadastrO de Pessoa Controller';

        var meuId = $stateParams.id;

        if(meuId){
            AlertService.showInfo('ID = '+meuId);
        }
    }
})();