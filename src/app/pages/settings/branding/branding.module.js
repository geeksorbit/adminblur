(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.branding', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.branding', {
          url: '/branding',
          templateUrl: 'app/pages/settings/branding/branding.html',
          title: 'Branding',
          sidebarMeta: {
		//	icon: 'ion-ios-cart',
            order: 200,
          },
        });
  }

})();