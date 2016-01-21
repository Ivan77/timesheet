(function(){
    angular.module('delta')
        .controller('PesquisaPessoaController', PesquisaPessoaController);

    PesquisaPessoaController.$inject = ['$scope', '$state', 'AlertService'];

    function PesquisaPessoaController($scope, $state, AlertService){
        var vm = this; //padrão John Papa
        vm.nome = "PesquisA de Pessoa Controller123";
        vm.redirecionarParaCadastro = redirecionarParaCadastro;

        iniciar();


        function iniciar(){
            adicionarEventos();
        }

        function adicionarEventos(){
            $scope.$on('testeEventoController3', testeBroadcastEvent);
        }


        function redirecionarParaCadastro(){
            $state.go('cadastroPessoa', {id: 15});
        }

        function testeBroadcastEvent(event, obj){
            AlertService.showInfo("Recebeu o evento testeEventoController3 = "+obj.nome);
        }
    }
})();