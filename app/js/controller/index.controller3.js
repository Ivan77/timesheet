(function(){
    angular.module('delta')
        .controller('IndexController3', IndexController3);

    /* @ngInject */
    function IndexController3($scope, $timeout, AlertService, $filter, $rootScope, $state){
        var vm = this;
        vm.nome = 'Ivan';
        vm.entidade = {};
        vm.listaDePessoas = [];
        vm.salvar = salvar;
        vm.limpar = limpar;
        vm.ultimaDataCadastrada = '';
        vm.menuSelected = '';

        vm.onClickEditar = onClickEditar;
        vm.onClickExcluir = onClickExcluir;

        vm.getRowStyle = getRowStyle;

        vm.dispararEvento = dispararEvento;

        //$scope.$watch('entidade.nascimento', onChangeNome);

        iniciar();

        function iniciar(){
            iniciarDadosDaTabela();

            //vm.gridOptions.columnDefs[1];
        }

        function iniciarDadosDaTabela(){
            vm.gridOptions = {
                data: 'listaDePessoas',
                columnDefs: [
                    {field: 'nome', displayName: 'NOME', width: 200, resizable: true},
                    {field: 'sobrenome', displayName: 'SOBRENOME', resizable: true},
                    {field: 'nascimento', displayName: 'NASCIMENTO', width: 150,
                        cellTemplate: 'app/template/cell-template-date.html'},
                    {field: 'opcoesDaGrid', displayName: '', width: 70,
                        cellTemplate: 'app/template/cell-template-opcoes.html'}
                ],
                rowTemplate:'app/template/row-template.html'
            };
        }

        function salvar(){
            setarTouchedNosInputs();
            if(vm.formPessoa.$invalid){
                AlertService.showError('Verifique os campos antes de salvar!');
                return;
            }
            vm.ultimaDataCadastrada = $filter('date')(vm.entidade.nascimento, 'dd/MM/yyyy');

            //exclui o objeto da lista caso ele já exista
            if(vm.listaDePessoas.indexOf(vm.entidade) >= 0) {
                vm.listaDePessoas.splice(vm.listaDePessoas.indexOf(vm.entidade), 1);
            }

            vm.listaDePessoas.push(vm.entidade);
            limpar();
            AlertService.showSuccess('Salvo com sucesso!');
        }

        function limpar(){
            vm.entidade = {};

            $timeout(function() {
                setarUntouchedNosInputs();
            }, 100);
        }

        function setarTouchedNosInputs(){
            angular.forEach(vm.formPessoa.$error, function(error){
                angular.forEach(error, function(field){
                    field.$setTouched();
                });
            });
        }

        function setarUntouchedNosInputs(){
            angular.forEach(vm.formPessoa.$error, function(error){
                angular.forEach(error, function(field){
                    field.$setUntouched();
                });
            });
        }

        function onClickEditar(objSelecionado){
            vm.entidade = objSelecionado;
        }

        function onClickExcluir(objSelecionado){
            vm.listaDePessoas.splice(vm.listaDePessoas.indexOf(objSelecionado),1);
            limpar();
        }

        function getRowStyle(objSelecionado){
            var style = {};
            style.backgroundColor = objSelecionado.cor;
            style.color = 'white';
            return style;
        }

        function dispararEvento(){
            //$rootScope.$broadcast('testeEventoController3', {nome:'Ivan Alves'});

            $state.go('home123');
        }

        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateNotFound', stateNotFound);

        function stateChangeStart(event, toState, toParams, fromState, fromParams){
            if(toState.name === 'cadastroPessoa'){
                AlertService.showError('Você não possui permissão para acessar esta tela');
                event.preventDefault();
            }
        }

        function stateChangeSuccess(event, toState, toParams, fromState, fromParams){
            vm.menuSelected = toState.name;
            AlertService.showSuccess('Carregou estado '+toState.name+' com sucesso!');
        }

        function stateNotFound(event, unfoundState, fromState, fromParams){
            AlertService.showError('Essa página não existe!');
        }
    }
})();