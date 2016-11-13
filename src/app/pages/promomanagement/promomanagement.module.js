(function () {
  'use strict';

  angular.module('BlurAdmin.pages.promomanagement', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('promomanagement', {
          url: '/promomanagement',
		  templateUrl: 'app/pages/promomanagement/promomanagement.html',
          title: 'Promo Management',
          sidebarMeta: {
			icon: 'ion-wand',
            order: 1000,
          },
        });
  }

})();