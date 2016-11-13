/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.appmanagement.page1', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('appmanagement.page1', {
          url: '/page1',
          templateUrl: 'app/pages/appmanagement/page1/page1.html',
          title: 'page1',
		 // controller: 'ProductsCtrl',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
