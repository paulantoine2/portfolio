/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('WebProjectsController', function($scope, $timeout){

  $scope.webProjects = [
    {
      title: 'La Plateforme du Batiment 1',
      technologies: ['Node JS', 'Angular JS', 'Drupal 8', 'CSS', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: 'https://www.laplateforme.com/',
      textLink: 'www.laplateforme.com',
      logo: 'app/images/pdb.png',
      active: false
    },
    {
      title: 'Tableau de bord - Cours des comptes',
      technologies: ['CSS', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: '',
      textLink: '',
      logo: 'app/images/cdc.png',
      active: false
    },
    {
      title: 'Centre Hospitalier Beziers',
      technologies: ['Drupal 8', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: '',
      textLink: '',
      logo: 'app/images/beziers.png',
      active: false
    },
    {
      title: 'Ecole Arts et Metiers',
      technologies: ['Drupal 8', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: 'https://artsetmetiers.fr/',
      textLink: 'artsetmetiers.fr',
      logo: 'app/images/ensam.png',
      active: false
    }
  ];

  $scope.activeProject = function(index){
    if(jQuery(window).width() < 500){
      jQuery('.slider-nav').slick('slickGoTo', index);
    }
    $scope.webProjects.forEach(function(p, i){
      if(i == index){
        p.active = true;
      } else {
        p.active = false;
      }
    })
  }

  $timeout(function(){
    $scope.activeProject(0);
    jQuery('.slider-nav').on('afterChange', function(event, slick, currentSlide){
      $scope.activeProject(currentSlide);
      $scope.$apply();
    });
  }, 1100)



});
