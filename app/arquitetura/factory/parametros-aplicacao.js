(function(){
    'use strict';

    angular.module('delta.factory')
        .factory('ParametrosAplicacao', ParametrosAplicacao);

    /* @ngInject */
    function ParametrosAplicacao(){
        return {
            nomeDoUsuario: '',
            email: '',
            logado: false
        };
    }
})();