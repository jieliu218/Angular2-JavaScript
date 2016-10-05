/**
 * Created by jie on 10/5/2016.
 */
(function(app) {
    document.addEventListener('DOMContentLoaded', function() {
        ng.platformBrowserDynamic
            .platformBrowserDynamic()
            .bootstrapModule(app.AppModule);
    });
})(window.app || (window.app = {}));
