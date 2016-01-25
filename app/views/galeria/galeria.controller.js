(function(){
    'use strict';

    angular.module('delta').controller('GaleriaController', GaleriaController);

    /* @ngInject */
    function GaleriaController(){
        var vm = this;

        vm.myInterval = 3000;
        vm.slides = [
            {
                id: 1,
                image: 'http://www.conquist.com.br/wp-content/uploads/2015/09/natureza.jpg'
            },
            {
                id: 2,
                image: 'http://www.agecefrn.org.br/site/wp-content/uploads/2015/01/natureza-1.jpg'
            },
            {
                id: 3,
                image: 'http://www.imagenswhatsapp.blog.br/wp-content/uploads/2015/01/Paisagens-da-natureza.jpg'
            }
        ];


    }
})();