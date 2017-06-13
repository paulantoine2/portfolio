/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('IntroController', function($scope, $timeout, $location){
    $timeout(function(){
      $location.path("/home");
    }, 10000)


});

setTimeout(function(){
  jQuery('svg tspan').each( function (){
    txt = jQuery(this).text().toUpperCase();
    jQuery(this).text(txt);
    console.log(txt);
  });
},1000);
