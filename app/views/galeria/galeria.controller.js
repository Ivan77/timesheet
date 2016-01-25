(function(){
    'use strict';

    angular.module('delta').controller('GaleriaController', GaleriaController);

    /* @ngInject */
    function GaleriaController(){
        var vm = this;

        vm.myInterval = 3000;
        vm.slides = [
            {
                image: 'http://www.conquist.com.br/wp-content/uploads/2015/09/natureza.jpg'
            },
            {
                image: 'http://www.agecefrn.org.br/site/wp-content/uploads/2015/01/natureza-1.jpg'
            },
            {
                image: 'http://www.imagenswhatsapp.blog.br/wp-content/uploads/2015/01/Paisagens-da-natureza.jpg'
            }
        ];


    }
})();