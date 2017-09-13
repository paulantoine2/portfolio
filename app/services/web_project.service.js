app.factory('WebProject', ['$resource', function($resource){
  return $resource('/portfolio_drupal/rest/web_projects/:id', {}, {});
}]);
