/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('WebProjectsController', ['$scope', '$timeout', '$routeParams', 'WebProject', function($scope, $timeout, $routeParams, WebProject){

  $scope.project = WebProject.get({id: $routeParams.id});
  $scope.project.slug = $routeParams.id;


  // $scope.activeProject = function(index){
  //   if(jQuery(window).width() < 500){
  //     jQuery('.slider-nav').slick('slickGoTo', index);
  //   }
  //   $scope.webProjects.forEach(function(p, i){
  //     if(i == index){
  //       p.active = true;
  //     } else {
  //       p.active = false;
  //     }
  //   })
  // }
  //
  // $timeout(function(){
  //   $scope.activeProject(0);
  //   jQuery('.slider-nav').on('afterChange', function(event, slick, currentSlide){
  //     $scope.activeProject(currentSlide);
  //     $scope.$apply();
  //   });
  // }, 1100)



}]);
