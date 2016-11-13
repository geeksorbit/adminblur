(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.pricelist', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.pricelist', {
          url: '/pricelist',
          templateUrl: 'app/pages/settings/pricelist/pricelist.html',
          title: 'pricelist',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 800,
          },
        });
  }

})();