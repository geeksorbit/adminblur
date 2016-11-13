(function () {
  'use strict';

  angular.module('BlurAdmin.pages.stockcontrol', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('stockcontrol', {
          url: '/stockcontrol',
          templateUrl: 'app/pages/stockcontrol/stockcontrol.html',
          title: 'Stock Control',
          sidebarMeta: {
			icon: 'ion-bag',
            order: 500,
          },
        });
  }

})();