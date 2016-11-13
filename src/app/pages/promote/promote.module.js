(function () {
  'use strict';

  angular.module('BlurAdmin.pages.promote', [
		'BlurAdmin.pages.promote.sendnewsletter',
		'BlurAdmin.pages.promote.sendpushoffers',
	  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('promote', {
          url: '/promote',
//          templateUrl: 'app/pages/promote/promote.html',
          template : '<ui-view></ui-view>',
		  abstract: true,
          title: 'Promotion Tools',
          sidebarMeta: {
			icon: 'ion-android-share-alt',
            order: 600,
          },
        });
  }

})();