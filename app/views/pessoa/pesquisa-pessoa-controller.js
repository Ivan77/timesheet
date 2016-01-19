angular.module('delta')
    .controller('PesquisaPessoaController', PesquisaPessoaController)

PesquisaPessoaController.$inject = ['$scope'];

function PesquisaPessoaController($scope){
    $scope.nome = "Pesquisa de Pessoa Controller";
}