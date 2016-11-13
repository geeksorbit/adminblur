(function () {
  'use strict';

  angular.module('BlurAdmin.pages.helpguide', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('helpguide', {
          url: '/helpguide',
          templateUrl: 'app/pages/helpguide/helpguide.html',
          title: 'Help / Guide',
          sidebarMeta: {
			icon: 'ion-help-buoy',
            order: 1300,
          },
        });
  }

})();