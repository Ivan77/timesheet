angular.module('delta')
    .controller('CadastroPessoaController', CadastroPessoaController)

CadastroPessoaController.$inject = ['$scope'];

function CadastroPessoaController($scope){
    $scope.nome = "Cadastro de Pessoa Controller";
}