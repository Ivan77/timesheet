(function(){
    'use strict';

    angular.module('delta.service')
        .service('AlertService', AlertService);

    /* @ngInject */
    function AlertService(toastr){
        this.showSuccess = showSuccess;
        this.showError = showError;
        this.showInfo = showInfo;
        this.showWarning = showWarning;

        function showSuccess(mensagem, titulo){
            if(!titulo){
                titulo = '.::SUCESSO::.';
            }
            toastr.success(mensagem, titulo, {progressBar: true});
        }

        function showError(mensagem, titulo){
            if(!titulo){
                titulo = '.::ERRO::.';
            }
            toastr.error(mensagem, titulo, {progressBar: true});
        }

        function showInfo(mensagem, titulo){
            if(!titulo){
                titulo = '.::INFORMAÇÃO::.';
            }
            toastr.info(mensagem, titulo, {progressBar: true});
        }

        function showWarning(mensagem, titulo){
            if(!titulo){
                titulo = '.::ATENÇÃO::.';
            }
            toastr.warning(mensagem, titulo, {progressBar: true});
        }
    }
})();