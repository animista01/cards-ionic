angular.module('app.controllers', [])  
  
  .controller('PidoCtrl', function($scope, $state) {
    $scope.mePido = function(id) {
      console.log('Pido', id);

      // var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
      // // card.swipe();
    };
  });

