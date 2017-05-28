/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('HomeController', function($scope, $sce){
  $scope.intro = $sce.trustAsHtml('<p class="about-me">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque cum deleniti dolor, dolore dolores eos excepturi, facilis fuga ipsum, quo recusandae similique tempore tenetur voluptatem. Delectus minus quis voluptas.</p>'
  + '<p class="about-me">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque cum deleniti dolor, dolore dolores eos excepturi, facilis fuga ipsum, quo recusandae similique tempore tenetur voluptatem. Delectus minus quis voluptas.</p>'
  + '<p class="about-me">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque cum deleniti dolor, dolore dolores eos excepturi, facilis fuga ipsum, quo recusandae similique tempore tenetur voluptatem. Delectus minus quis voluptas.</p>');

});