(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.taxtypes', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.taxtypes', {
          url: '/taxtypes',
          templateUrl: 'app/pages/settings/taxtypes/taxtypes.html',
          title: 'Tax Types',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 900,
          },
        });
  }

})();