(function () {
    'use strict';

    angular
        .module('delta')
        .controller('TesteController', TesteController);

    TesteController.$inject = ['$scope'];

    /* @ngInject */
    function TesteController($scope) {
        var vm = this;
        vm.title = 'TesteController';

        iniciar();

        ////////////////

        function iniciar() {

        }
    }

})();