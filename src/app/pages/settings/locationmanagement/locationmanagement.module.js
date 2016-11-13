(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.locationmanagement', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.locationmanagement', {
          url: '/locationmanagement',
          templateUrl: 'app/pages/settings/locationmanagement/locationmanagement.html',
          title: 'Location',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 400,
          },
        });
  }

})();