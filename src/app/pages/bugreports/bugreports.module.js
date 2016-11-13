(function () {
  'use strict';

  angular.module('BlurAdmin.pages.bugreports', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('bugreports', {
          url: '/bugreports',
          templateUrl: 'app/pages/bugreports/bugreports.html',
          title: 'Bug Reports',
          sidebarMeta: {
			icon: 'ion-bug',
            order: 900,
          },
        });
  }

})();