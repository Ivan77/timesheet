(function(){
    angular.module('delta.directive')
        .directive('caInputTextMaterial', caInputTextMaterial);

    function caInputTextMaterial(){
        return{
            link: link,
            restrict: 'E',
            templateUrl: 'app/arquitetura/directive/ca-input-text-material/ca-input-text-material.directive.html',
            scope:{
                label: '@',
                colspan: '@',
                ngModel: '=?',
                ngRequired: '=?'
            }
        };
        function link(scope, element, attrs){
            scope.myColspan = 'col-sm-'+attrs.colspan;
            scope.labelMod = attrs.label;
            if(attrs.ngRequired){
                scope.labelMod += ' (Obrigatório)';
            }
        }
    }
})();