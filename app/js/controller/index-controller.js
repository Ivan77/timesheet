angular.module('delta')
    .controller('IndexController', IndexController)

//injeção de dependencia usando angular para ignorar os parametros com nomes dentro do array
IndexController.$inject = ['$scope'];

function IndexController($scope){
    $scope.nome = 'Ivan Alves';
    $scope.testeFuncao = testeFuncao;

    $scope.$watch('nome', onChangeNome);

    function testeFuncao(){
        alert('Olá '+$scope.nome);


    }
}