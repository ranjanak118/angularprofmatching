var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/signUp');

    $stateProvider
        .state('signUp',{
            url: '/signUp',
            templateUrl: 'signUp.html',
            controller:  'signUp'
        })
        .state('studDetails',{
            url: '/studDetails',
            templateUrl: 'studDetails.html',
            controller: 'studDetails'
        })
        .state('profDetails',{
            url: '/profDetails',
            templateUrl: 'profDetails.html',
            controller: 'profDetails'
        })
        .state('studentList',{
            url: '/studentList',
            templateUrl: 'studentList.html',
            controller: 'studentList'
        })
});