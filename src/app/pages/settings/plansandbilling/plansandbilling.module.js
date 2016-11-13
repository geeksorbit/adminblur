(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.plansandbilling', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.plansandbilling', {
          url: '/plansandbilling',
          templateUrl: 'app/pages/settings/plansandbilling/plansandbilling.html',
          title: 'Plans and Billing',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 700,
          },
        });
  }

})();