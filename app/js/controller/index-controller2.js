angular.module('delta')
    .controller('IndexController2', IndexController2)

//injeção de dependencia usando angular para ignorar os parametros com nomes dentro do array
IndexController2.$inject = ['$scope'];

function IndexController2($scope){
    $scope.nome = 'Ivan';
    $scope.myStyle = {};

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, valorAntigo){
        if(novoValor === valorAntigo){
            return;
        }

        if(novoValor.toLowerCase() === "ivan"){
            $scope.myStyle.color = "blue";
            $scope.myStyle.backgroundColor = "#e9e9e9";
            $scope.myStyle.fontWeight = "bold";
        }else if(novoValor.toLowerCase() === "angular"){
            $scope.myStyle.color = "red";
            $scope.myStyle.backgroundColor = "#e9e9e9";
            $scope.myStyle.fontWeight = "normal";
        }else if(novoValor.toLowerCase() === "delta"){
            $scope.myStyle.color = "cyan";
            $scope.myStyle.backgroundColor = "#e9e9e9";
            $scope.myStyle.fontWeight = "normal";
        }else{
            $scope.myStyle.color = "white";
            $scope.myStyle.backgroundColor = "#252525";
            $scope.myStyle.fontWeight = "normal";
            //$scope.myStyle.fontSize = 12px;
        }

    }
}