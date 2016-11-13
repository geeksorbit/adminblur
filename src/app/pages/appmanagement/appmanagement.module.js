(function () {
  'use strict';

  angular.module('BlurAdmin.pages.appmanagement', [
		'BlurAdmin.pages.appmanagement.page1',
		'BlurAdmin.pages.appmanagement.page2',
	  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('appmanagement', {
          url: '/appmanagement',
		  //templateUrl: 'app/pages/appmanagement/appmanagement.html',
          template : '<ui-view></ui-view>',
		  abstract: true,
          title: 'App Management',
          sidebarMeta: {
			icon: 'ion-android-phone-portrait',
            order: 1100,
          },
        });
  }

})();