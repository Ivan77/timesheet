(function(){
    'use strict';

    angular.module('delta')
        .controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController($scope){
        var vm = this;
        vm.nome = 'Ivan Alves';
        vm.testeFuncao = testeFuncao;

        $scope.$watch('nome', onChangeNome);

        function onChangeNome(valorNovo, valorAntigo){

        }

        function testeFuncao(){
            //alert('Olá '+$scope.nome);


        }
    }
})();