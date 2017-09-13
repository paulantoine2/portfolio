/**
 * Created by paulantoine on 16/04/2017.
 */

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}

var app = angular.module("PortfolioApp", [
  'ngAnimate',
  'ngRoute',
  'ngResource',
  'ngSanitize'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
  if(detectIE() && detectIE() < 12){
    $routeProvider.when('/', {redirectTo: '/home'});
  } else {
    $routeProvider.
    when('/', {
      templateUrl: 'views/intro.html',
      controller: 'IntroController'});
  }
  $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'}).
    when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'}).
    when('/web-projects', {
      redirectTo: '/web-projects/pdb'}).
    when('/web-projects/:id', {
      templateUrl: 'views/web_project.detail.html',
      controller: 'WebProjectsController'}).
    when('/skills', {
      templateUrl: 'views/skills.html',
      controller: 'SkillsController'}).
    otherwise({
      redirectTo: '/'});
  $locationProvider.html5Mode(true);
}]);


// FOR DEV PURPOSES

// app.run(function($rootScope, $templateCache) {
//   $rootScope.$on('$routeChangeStart', function(event, next, current) {
//     if (typeof(current) !== 'undefined'){
//       $templateCache.remove(current.templateUrl);
//     }
//   });
// });
