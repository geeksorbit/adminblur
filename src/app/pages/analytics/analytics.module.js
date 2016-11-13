(function () {
  'use strict';

  angular.module('BlurAdmin.pages.analytics', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('analytics', {
          url: '/analytics',
          templateUrl: 'app/pages/analytics/analytics.html',
          title: 'Analytics',
          sidebarMeta: {
			icon: 'ion-ios-analytics',
            order: 700,
          },
        });
  }

})();