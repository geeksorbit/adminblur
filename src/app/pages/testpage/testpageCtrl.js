/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
	'use strict';

	angular.module('BlurAdmin.pages.inventorymanagement.products')
		.controller('testpageCtrl', testpageCtrl);

	/** @ngInject */
	function testpageCtrl($scope, $filter, editableOptions, editableThemes) {

		$scope.loadTable = function() {
			var userList = new Firebase("https://supermarket-20ec4.firebaseio.com/TempList");

			userList.once("value", function(snapshot) {
				//$scope.smartTableData = [];
				console.log("snapshot Length: " + snapshot.numChildren());
				var k = 5;
				snapshot.forEach(function(childSnapshot) {
					k++;
					id++;
					var birthdate = dates[Math.floor(Math.random() * 3)];
					//var key = childSnapshot.key();
					var childData = childSnapshot.val();
					$scope.rowCollection.push({

						id: id,
						firstName: childData.firstName,
						lastName: childData.lastName,
						birthDate: new Date(birthdate),
						balance: childData.email

						/*	age: childData.age,
							email: childData.email,
							firstName: childData.firstName,
							id: k,
							lastName: childData.lastName,
						username: childData.username */
					});
				});
			});
		};

		var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
		var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
		var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
		var id = 1;

		function generateRandomItem(id) {

			var firstname = firstnames[Math.floor(Math.random() * 3)];
			var lastname = lastnames[Math.floor(Math.random() * 3)];
			var birthdate = dates[Math.floor(Math.random() * 3)];
			var balance = Math.floor(Math.random() * 2000);

			return {
				id: id,
				firstName: firstname,
				lastName: lastname,
				birthDate: new Date(birthdate),
				balance: balance
			}
		}

		$scope.rowCollection = [];

		for (id; id < 5; id++) {
			$scope.rowCollection.push(generateRandomItem(id));
		}

		//add to the real data holder
		$scope.addRandomItem = function() {
			$scope.rowCollection.push(generateRandomItem(id));
			id++;
		};

		//remove to the real data holder
		$scope.removeItem = function removeItem(row) {
			var index = $scope.rowCollection.indexOf(row);
			if (index !== -1) {
				$scope.rowCollection.splice(index, 1);
			}
		}

		/*		Dummy Codes Start	*/
		$scope.importDB = function() {
			var ref = new Firebase("https://docs-examples.firebaseio.com/samplechat/users");
			ref.once("value", function(snapshot) {
				// The callback function will get called twice, once for "fred" and once for "barney"
				snapshot.forEach(function(childSnapshot) {
					// key will be "fred" the first time and "barney" the second time
					var key = childSnapshot.key();
					console.log("Key: " + key);
					// childData will be the actual contents of the child
					var childData = childSnapshot.val();
					console.log("childData: " + childData);
				});
			});
		};

		$scope.clicked = function() {
			alert("Filter Added");
			this.aclicked();
		};

		$scope.aclicked = function() {
			alert("Again Filter Added");
		};

		/*		Dummy Codes End		*/

	}

})();