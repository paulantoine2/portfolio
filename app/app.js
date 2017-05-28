/**
 * Created by paulantoine on 16/04/2017.
 */

var app = angular.module("PortfolioApp", [
  'ngAnimate',
  'ngRoute'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'views/intro.html',
      controller: 'IntroController'}).
    when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'}).
    when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'}).
    when('/web-projects', {
      templateUrl: 'views/web_projects.html',
      controller: 'WebProjectsController'}).
    when('/skills', {
      templateUrl: 'views/skills.html',
      controller: 'SkillsController'}).
    otherwise({
      redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);

app.run(function($rootScope, $templateCache) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if (typeof(current) !== 'undefined'){
      $templateCache.remove(current.templateUrl);
    }
  });
});