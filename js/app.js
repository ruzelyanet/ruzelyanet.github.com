var app = angular.module('SmartEhr', []);

app.controller('provider', function($scope, $http){

	var url = "json/providers.json";

	$scope.$providers = [];
	$scope.$providersNew = [];

	$http.get(url).success( function(response) {
      $scope.$providers = response.providers;
  });

	$scope.addProvider = function() {
		this.$providers.push({provider:$scope.providerList, location:$scope.location});
		this.$providersNew.push({provider:$scope.providerList, location:$scope.location});
	};

	$scope.removeProvider = function(providersToRemove) {
		var index = this.$providers.indexOf(providersToRemove);
		this.$providers.splice(index, 1);
	};


	$scope.pushData = function(){

			$http.post('./json/providers.json', JSON.stringify($scope.$providersNew)).then(function(data) {
				$scope.msg = 'Data saved';
		  });

	}



});
