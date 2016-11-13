(function () {
  'use strict';

  angular.module('BlurAdmin.pages.contactmanagement', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('contactmanagement', {
          url: '/contactmanagement',
          templateUrl: 'app/pages/contactmanagement/contactmanagement.html',
          title: 'Contacts',
		  controller: 'ContactManagementCtrl',
          sidebarMeta: {
			icon: 'ion-ios-personadd',
            order: 400,
          },
        });
  }

})();