/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('ContactController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout){
  $scope.messageIsSent = false;
  $scope.messageNotSent = false;
  $scope.submitContact = function(){
    if(!$scope.name) $scope.nameError = true;
    if(!$scope.email) $scope.emailError = true;
    if(!$scope.message) $scope.messageError = true;
    $timeout(function(){
      $scope.nameError = false;
      $scope.emailError = false;
      $scope.messageError = false;
    }, 10);
    if($scope.nameError || $scope.emailError || $scope.messageError) return;
    var formData = {
      name: $scope.name,
      email: $scope.email,
      message: $scope.message };
    var postData = 'myData='+JSON.stringify(formData);
    $http({
      method : 'POST',
      url : 'contact_script.php',
      data: postData,
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function(res){
      console.log(res);
      $scope.messageIsSent = (res == 1);
      $scope.messageNotSent = (res != 1);
    }).error(function(error) {
      $scope.messageNotSent = true;
    });
  };

}]);