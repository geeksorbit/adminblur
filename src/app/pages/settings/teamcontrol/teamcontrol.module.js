(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.teamcontrol', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.teamcontrol', {
          url: '/teamcontrol',
          templateUrl: 'app/pages/settings/teamcontrol/teamcontrol.html',
          title: 'Team Control',
          sidebarMeta: {
			//icon: 'ion-ios-cart',
            order: 1000,
          },
        });
  }

})();