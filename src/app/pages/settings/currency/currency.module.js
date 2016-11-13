(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.currency', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.currency', {
          url: '/currency',
          templateUrl: 'app/pages/settings/currency/currency.html',
          title: 'Currency',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 300,
          },
        });
  }

})();