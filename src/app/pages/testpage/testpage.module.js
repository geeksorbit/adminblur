(function () {
  'use strict';

  angular.module('BlurAdmin.pages.testpage', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('testpage', {
          url: '/testpage',
          templateUrl: 'app/pages/testpage/testpage.html',
          title: 'Test Page',
		  controller: 'testpageCtrl',
          sidebarMeta: {
			icon: 'ion-ios-analytics',
            order: 100,
          },
        });
  }

})();