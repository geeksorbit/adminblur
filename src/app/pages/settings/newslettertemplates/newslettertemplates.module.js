(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.newslettertemplates', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.newslettertemplates', {
          url: '/newslettertemplates',
          templateUrl: 'app/pages/settings/newslettertemplates/newslettertemplates.html',
          title: 'newslettertemplates',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 500,
          },
        });
  }

})();