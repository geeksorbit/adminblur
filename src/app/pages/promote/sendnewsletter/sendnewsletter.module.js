(function () {
  'use strict';

  angular.module('BlurAdmin.pages.promote.sendnewsletter', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('promote.sendnewsletter', {
          url: '/sendnewsletter',
          templateUrl: 'app/pages/promote/sendnewsletter/sendnewsletter.html',
          title: 'Send News Letter',
          sidebarMeta: {
			icon: 'ion-android-mail',
            order: 100,
          },
        });
  }

})();