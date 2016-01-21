angular.module('delta')
    .controller('IndexController3', IndexController3);

//injeção de dependencia usando angular para ignorar os parametros com nomes dentro do array com mimificar e atribuir
// ao controlador de acordo com a posição
IndexController3.$inject = ['$scope', '$timeout', 'AlertService', '$filter', '$rootScope', '$state'];

function IndexController3($scope, $timeout, AlertService, $filter, $rootScope, $state){
    $scope.nome = 'Ivan';
    $scope.entidade = {};
    $scope.listaDePessoas = [];
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.ultimaDataCadastrada = '';
    $scope.menuSelected = '';

    $scope.onClickEditar = onClickEditar;
    $scope.onClickExcluir = onClickExcluir;

    $scope.getRowStyle = getRowStyle;

    //$scope.$watch('entidade.nascimento', onChangeNome);

    iniciar();

    function iniciar(){
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs: [
                {field: 'nome', displayName: 'NOME', width: 200, resizable: true},
                {field: 'sobrenome', displayName: 'SOBRENOME', resizable: true},
                {field: 'nascimento', displayName: 'NASCIMENTO', width: 150, cellTemplate: 'app/template/cell-template-date.html'},
                {field: 'opcoesDaGrid', displayName: '', width: 70, cellTemplate: 'app/template/cell-template-opcoes.html'}
            ],
            rowTemplate:'app/template/row-template.html'

        }

        //$scope.gridOptions.columnDefs[1];
    }

    function salvar(){
        setarTouchedNosInputs();
        if($scope.formPessoa.$invalid){
            AlertService.showError("Verifique os campos antes de salvar!");
            return;
        }
        $scope.ultimaDataCadastrada = $filter('date')($scope.entidade.nascimento, 'dd/MM/yyyy');

        //exclui o objeto da lista caso ele já exista
        if($scope.listaDePessoas.indexOf($scope.entidade) >= 0) {
            $scope.listaDePessoas.splice($scope.listaDePessoas.indexOf($scope.entidade), 1);
        }

        $scope.listaDePessoas.push($scope.entidade);
        limpar();
        AlertService.showSuccess("Salvo com sucesso!");
    }

    function limpar(){
        $scope.entidade = {};

        $timeout(function() {
            setarUntouchedNosInputs();
        }, 100);
    }

    function setarTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUntouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

    function onClickEditar(objSelecionado){
        $scope.entidade = objSelecionado;
    }

    function onClickExcluir(objSelecionado){
        $scope.listaDePessoas.splice($scope.listaDePessoas.indexOf(objSelecionado),1);
        limpar();
    }

    function getRowStyle(objSelecionado){
        var style = {};
        style.backgroundColor = objSelecionado.cor;
        style.color = 'white';
        return style;
    }

    $scope.dispararEvento = function(){
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
        menuSelected = toState.name;
        AlertService.showSuccess('Carregou estado '+toState.name+' com sucesso!')
    }

    function stateNotFound(event, unfoundState, fromState, fromParams){
        AlertService.showError('Essa página não existe!');
    }
}