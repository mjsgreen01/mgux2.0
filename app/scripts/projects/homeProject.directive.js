'use strict';
angular.module('mattGreenUX')


.directive('homeProject', function(){
  var controller = function(){
    var vm = this;
    
  };

  return {
    restrict: 'EA',
    templateUrl: 'app/views/homeProject.html',
    scope: {
      
    },
    controller: controller,
    controllerAs: 'homeProject',
    bindToController: true
  };

});