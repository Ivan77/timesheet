(function(){
    'use strict';

    //declaração do module principal
    angular.module('delta.controller', []);
    angular.module('delta.service', []);
    angular.module('delta.factory', []);
    angular.module('delta.directive', []);
    angular.module('delta.filter', []);

    angular.module('delta', ['ngMessages',
        'toastr',
        'ui.grid',
        'ngMaterial',
        'ui.router',
        'oc.lazyLoad',
        'delta.controller',
        'delta.service',
        'delta.factory',
        'delta.directive',
        'delta.filter',
        'angular-keycode',
        'ui.bootstrap'
    ]);
})();