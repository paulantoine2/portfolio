/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('ContactController', function($scope, $http){
  $scope.submitContact = function(){
    var formData = {
      name: $scope.name,
      email: $scope.email,
      message: $scope.message };
    var postData = 'myData='+JSON.stringify(formData);
    $http({
      method : 'POST',
      url : 'contact.php',
      data: postData,
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}

    }).success(function(res){
      console.log(res);
    }).error(function(error) {
      console.log(error);
    });
  };

});