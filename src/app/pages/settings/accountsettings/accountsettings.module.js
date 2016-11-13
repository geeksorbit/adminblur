(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings.accountsettings', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings.accountsettings', {
          url: '/accountsettings',
          templateUrl: 'app/pages/settings/accountsettings/accountsettings.html',
          title: 'Account Settings',
          sidebarMeta: {
		//	icon: 'ion-ios-cart',
            order: 100,
          },
        });
  }

})();