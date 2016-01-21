(function(){
    angular.module('delta')
        .controller('CadastroPessoaController', CadastroPessoaController)

    CadastroPessoaController.$inject = ['$scope', '$stateParams', 'AlertService'];

    function CadastroPessoaController($scope, $stateParams, AlertService){
        $scope.nome = 'CadastrO de Pessoa Controller 123';

        var meuId = $stateParams.id;

        if(meuId){
            AlertService.showInfo('ID = '+meuId);
        }
    }
})();