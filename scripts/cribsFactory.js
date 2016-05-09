angular
   .module('ng-cribs')
   //Factory is the service.
   .factory('cribsFactory', function($http){

      function getCribs(){
         return $http.get('data/data.json');
      }

      return {
         getCribs: getCribs
      }
   });
