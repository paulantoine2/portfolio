
app.controller('RouteController', function($scope, $location){
  $scope.$on('$routeChangeStart', function(next, current) {
    $scope.location = $location.path();
    console.log($scope.location);
  });
});