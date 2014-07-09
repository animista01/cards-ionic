var app = angular.module('app.controllers', [])  
  
app.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
    var cardTypes = [
      { id_promo: 1, title: '20 % en comida', image: 'img/fod.jpg' },
      { id_promo: 2, title: 'Where is this?', image: 'img/pic.png' },
      { id_promo: 3, title: 'What kind of grass is this?', image: 'img/pic2.png' },
      { id_promo: 4, title: 'What beach is this?', image: 'img/pic3.png' },
      { id_promo: 5, title: 'What kind of clouds are these?', image: 'img/pic4.png' }
    ]

    $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

    $scope.cardSwiped = function(index) {
      console.log('cardSwiped', index);
      $scope.addCard();
    }
    $scope.home = function() {
      console.log('user')
    }
    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
      console.log('cardDestroyed');

    }

    $scope.addCard = function() {
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
    }
})

app.controller('CardCtrl', function($scope, $state, $ionicSwipeCardDelegate) {
    $scope.goAway = function(id) {
      $state.go('app.promo');
      console.log('goAway', id);

      // var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
      // // card.swipe();
    };
});

app.controller('PidoCtrl', function($scope, $state) {
	console.log('puta madre')
    $scope.mePido = function(id) {
      console.log('Pido', id);

      // var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
      // // card.swipe();
    };
})