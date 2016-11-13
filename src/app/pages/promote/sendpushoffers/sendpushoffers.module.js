(function () {
  'use strict';

  angular.module('BlurAdmin.pages.promote.sendpushoffers', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('promote.sendpushoffers', {
          url: '/sendpushoffers',
          templateUrl: 'app/pages/promote/sendpushoffers/sendpushoffers.html',
          title: 'Send Push Offers',
          sidebarMeta: {
			icon: 'ion-android-notifications',
            order: 200,
          },
        });
  }

})();