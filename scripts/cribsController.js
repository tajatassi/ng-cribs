angular.module('ng-cribs')
  .controller('cribsController', function($scope, cribsFactory){
      //Controller is where business logic goes. We put in a service.
      $scope.cribs;

      $scope.newListing = {};

      $scope.addCrib = function(newListing){
        newListing.image = 'default-crib';
        $scope.cribs.push(newListing);
        $scope.newListing = {};
      };

      $scope.editCrib = function(crib){
        $scope.editListing = true;
        $scope.existingListing = crib;
      };

      $scope.saveCribEdit = function(){
        $scope.editListing = false;
        $scope.existingListing = {};
      };

      $scope.deleteListing = function(listing){
        var index = $scope.cribs.indexOf(listing);
        $scope.cribs.splice(index, 1);
        $scope.existingListing = {};
        $scope.editListing = false;
      };


      cribsFactory.getCribs().success(function(data){
         $scope.cribs = data;
      }).error(function(error){
         console.log(error);
      });

      $scope.priceInfo = {
        min: 0,
        max: 1000000
      }
   });
