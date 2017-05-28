/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('IntroController', function($scope, $timeout, $location){
    $timeout(function(){
      $location.path("/home");
    }, 10000)
});


$('svg text tspan').each( function (){
  txt = $(this).text().toUpperCase();
  $(this).text(txt);
})