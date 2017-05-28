/**
 * Created by paulantoine on 16/04/2017.
 */

app.controller('WebProjectsController', function($scope, $timeout){

  $scope.webProjects = [
    {
      title: 'La Plateforme du Batiment 1',
      technologies: ['Node JS', 'Angular JS', 'Drupal 8', 'CSS', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: 'www.laplateforme.com',
      active: false
    },
    {
      title: 'La Plateforme du Batiment 2',
      technologies: ['Node JS', 'Angular JS', 'Drupal 8', 'CSS', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: 'www.laplateforme.com',
      active: false
    },
    {
      title: 'La Plateforme du Batiment 3',
      technologies: ['Node JS', 'Angular JS', 'Drupal 8', 'CSS', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: 'www.laplateforme.com',
      active: false
    },
    {
      title: 'La Plateforme du Batiment 4',
      technologies: ['Node JS', 'Angular JS', 'Drupal 8', 'CSS', 'jQuery'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate et pariatur praesentium! Accusamus asperiores, assumenda deleniti dignissimos doloremque harum inventore magnam maxime perspiciatis praesentium provident sapiente sequi similique vel voluptates.',
      link: 'www.laplateforme.com',
      active: false
    }
  ];

  $scope.activeProject = function(index){
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
  }, 1100)

});