/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.appmanagement.page2', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('appmanagement.page2', {
          url: '/page2',
          templateUrl: 'app/pages/appmanagement/page2/page2.html',
          title: 'page2',
          sidebarMeta: {
            order: 400,
          },
        });
  }

})();
