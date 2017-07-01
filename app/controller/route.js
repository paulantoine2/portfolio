
app.controller('RouteController', function($scope, $location, WebProject){
  $scope.projects = WebProject.list();

  $scope.$on('$routeChangeStart', function(next, current) {
    $scope.location = $location.path();
    if($scope.location == '/skills'){
      setTimeout(function(){
        if(jQuery(window).width() < 500){
          jQuery('.flex').slick({
            arrows: false,
            dots: true,
          });
        }
      },400);
    }
    if($scope.location == '/web-projects'){
      setTimeout(function(){
        if(jQuery(window).width() < 500){
          // jQuery('.slider-for').slick({
          //   slidesToShow: 1,
          //   slidesToScroll: 1,
          //   arrows: false,
          //   fade: true,
          //   asNavFor: '.slider-nav'
          // });
          jQuery('.slider-nav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            centerMode: true,
            // asNavFor: '.slider-for'
          });
        }
      },400);
    }
  });
});
