/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('HomeController', ['$scope', '$sce', function($scope, $sce){
  $scope.intro = $sce.trustAsHtml('<span class="big">Hello, </span><p class="about-me">My name is Paul. I\'m a 23 yo french guy, full-stack junior Web developer currently living in Paris and working for <a href="https://adimeo.com/" target="_blank">Adimeo</a> and as Freelance.</p><p class="about-me">I\'ve learned a lot on the job, with agile methodology in team, and I have a good overall view of web development from back-end to front-end.</p><p class="about-me">I\'m passionate about my job and I want to go further every day in order to build the Internet of tomorrow with the best technologies.</p>');

}]);