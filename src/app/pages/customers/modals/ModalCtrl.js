(function () {
  'use strict';

  angular.module('BlurAdmin.pages.customers')
    .controller('ModalCtrl', ModalCtrl);

  /** @ngInject */
  function ModalCtrl($scope, $uibModal) {
	
			$scope.addUserByEmail = function() {

			var myFirebaseRef = new Firebase("https://supermarket-20ec4.firebaseio.com/");

			firebase.auth().createUserWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(result) {

				console.log("Successfully New User is Added.");
				
				result.updateProfile({
					displayName: $scope.user.name,
					photoURL: "img/person.svg",
					emailVerified: true,
				}).then(function() {
					console.log("Successfully Profile is Updated of New User Added.");
				}, function(error) {
					console.log("Error in Profile Updation of New User.");
					console.log("errorCode : " + error.code);
					console.log("errorMessage : " + error.message);
				});

				result.sendEmailVerification().then(function() {
					console.log("Successfully Email Verification is Sent.");
				}, function(error) {
					console.log("Error in sending Email Verification.");
					console.log("errorCode : " + error.code);
					console.log("errorMessage : " + error.message);
				});

				myFirebaseRef.child('UserProfiles/' + result.uid).set({
					name: $scope.user.name,
					email: $scope.user.email,
					password: $scope.user.password,
					mob: "N/A",
					telephone: "N/A",
					dob: "N/A",
					location: {
						address: "N/A",
						city: "N/A",
						state: "N/A",
						country: "N/A",
						zip: "N/A"
					},
					bonuspoints: "N/A",
					accountbalance: "N/A",
					savedcards: "",
					purchasedproducts: "",
					paymenthistory: "",
					cartitems: "",
					wishlist: ""
				});

			}, function(error) {
				console.log("Error in Adding New User. ");
				console.log("errorCode : " + error.code);
				console.log("errorMessage : " + error.message);
			});

		};
		
		
  }

})();