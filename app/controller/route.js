
app.controller('RouteController', function($scope, $location, WebProject, PageTitle){
  $scope.projects = WebProject.list();
  $scope.PageTitle = PageTitle;

  $scope.$on('$routeChangeStart', function(next, current) {
    $scope.location = $location.path();

    if($scope.location == '/skills'){
      $scope.PageTitle.setTitle('My skills');
      setTimeout(function(){
        if(jQuery(window).width() < 500){
          jQuery('.flex').slick({
            arrows: false,
            dots: true,
          });
        }
      },400);
    } else if($scope.location == '/contact'){
      $scope.PageTitle.setTitle('Contact');
    } else if($scope.location.startsWith('/web-projects')){
      $scope.PageTitle.setTitle('Web projects');
    } else {
      $scope.PageTitle.setTitle('Paul Antoine - Web developer');
    }


  });
});
