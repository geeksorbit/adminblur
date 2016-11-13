(function () {
  'use strict';

  angular.module('BlurAdmin.pages.customers')
      .controller('CustomersCtrl', CustomersCtrl);

  /** @ngInject */
  function CustomersCtrl($scope, $uibModal, $timeout) {
	  
	$scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
	  
	$scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
		controller: 'ModalCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
	  
  }

})();
