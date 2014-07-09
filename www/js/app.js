var app = angular.module('starter', ['ionic', 'ngTouch', 'ionic.contrib.ui.cards', 'app.controllers'])


app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('app', {
    abstract: true,
    templateUrl: 'templates/main.html'
  })
  
  $stateProvider.state('app.promo', {
    abstract: true,
    url: '/promos',
    views: {
      promo: {
        template: '<ion-nav-view></ion-nav-view>'
      }
    }
  })

  $stateProvider.state('app.promo.detail', {
    url: '/promo/detail',
    templateUrl: 'templates/moreinfo.html',
    controller: 'PidoCtrl'
  })

  $urlRouterProvider.otherwise('/');
})

app.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})