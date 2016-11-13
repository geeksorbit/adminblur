(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.paymentmethods', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.paymentmethods', {
          url: '/paymentmethods',
          templateUrl: 'app/pages/settings/paymentmethods/paymentmethods.html',
          title: 'Payment Methods',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 600,
          },
        });
  }

})();