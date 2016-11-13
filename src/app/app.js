'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',
  'firebase',


  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);

var config = {
			apiKey: "AIzaSyCMXqjyAaU8MHogpb4jB_lnEtm0oW7aULo",
			authDomain: "supermarket-20ec4.firebaseapp.com",
			databaseURL: "https://supermarket-20ec4.firebaseio.com",
			storageBucket: "supermarket-20ec4.appspot.com",
};
firebase.initializeApp(config);