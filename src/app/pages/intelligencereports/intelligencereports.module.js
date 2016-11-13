(function () {
  'use strict';

  angular.module('BlurAdmin.pages.intelligencereports', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('intelligencereports', {
          url: '/intelligencereports',
          templateUrl: 'app/pages/intelligencereports/intelligencereports.html',
          title: 'Intelligence Reports',
          sidebarMeta: {
			icon: 'ion-stats-bars',
            order: 800,
          },
        });
  }

})();