(function(){
    'use strict';

    angular.module('delta.filter')
        .filter('maiusculo', maiusculo);

    /* @ngInject */
    function maiusculo() {
        return function(input){
            if(input && (typeof input === 'string')){
                return input.toUpperCase();
            }
            return input;
        };
    }
})();