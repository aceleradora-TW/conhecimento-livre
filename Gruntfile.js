module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      development: {
        options: {
        },
        files: {
          'public/css/content.css': 'sass/content.scss'
        }
      },
      production: {
        options: {
        },
        files: {
          'public/css/content.css': 'sass/content.scss'
        }
      }
    },
    watch: {
      files: ['<%= sass.files %>'],
      tasks: ['sass']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass']);
  grunt.registerTask('heroku:production', 'sass');
};
