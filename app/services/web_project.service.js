'use strict'

app.factory('WebProject', ['$resource', function($resource){
  return $resource('app/web_projects/:id.json', {}, {
    list: {
      method: 'GET',
      params: {id: 'list'},
      isArray: true
    }
  });
}]);
