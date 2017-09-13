module.exports = function(grunt){

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['app/app.js', 'app/controller/*.js', 'app/services/*.js']
    },
    concat: {
      dist: {
        src: [
          'app/lib/jquery.js',
          'app/lib/slick.js',
          'app/lib/angular/angular.js',
          'app/lib/angular/angular-*.js',
          'app/app.js',
          'app/services/*.js',
          'app/controller/*.js',
        ],
        dest: 'dist/built.js',
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/built.min.js': [
            'dist/built.js'
          ]
        }
      }
    },
    cssmin: {
      options: {
        level: 0
      },
      target: {
        files: {
          'app/css/dist.css': [
            'app/css/animate.css',
            'app/css/animations.css',
            'app/css/font-awesome.css',
            'app/css/slick.css',
            'app/css/slick-theme.css',
            'app/css/style.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);

}