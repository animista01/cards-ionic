angular.module('app.controllers', [])  
  
  .controller('AppCtrl', function ($scope, $state) {
    $scope.logout = function () {
        OpenFB.logout();
        $state.go('app.login');
    };
  });

  .controller('PidoCtrl', function($scope, $state) {
    $scope.mePido = function(id) {
      console.log('Pido', id);

      // var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
      // // card.swipe();
    };
  });

