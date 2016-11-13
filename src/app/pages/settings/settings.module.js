(function () {
  'use strict';

  angular.module('BlurAdmin.pages.settings', [
		'BlurAdmin.pages.settings.accountsettings',
		'BlurAdmin.pages.settings.branding',
		'BlurAdmin.pages.settings.currency',
		'BlurAdmin.pages.settings.locationmanagement',
		'BlurAdmin.pages.settings.newslettertemplates',
		'BlurAdmin.pages.settings.paymentmethods',
		'BlurAdmin.pages.settings.plansandbilling',
		'BlurAdmin.pages.settings.pricelist',
		'BlurAdmin.pages.settings.taxtypes',
		'BlurAdmin.pages.settings.teamcontrol',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('settings', {
          url: '/settings',
          templateUrl: 'app/pages/settings/settings.html',
          title: 'Settings',
          sidebarMeta: {
			icon: 'ion-android-settings',
            order: 1200,
          },
        });
  }

})();