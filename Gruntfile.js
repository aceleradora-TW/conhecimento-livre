module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      development: {
        options: {
        },
        files: [{
          expand: true,
          cwd: "sass/",
          src: ["**/*.sass"],
          dest: "public/css",
          ext: ".css"
        }]
      },
      production: {
        options: {
        },
        files: [{
          expand: true,
          cwd: "sass/",
          src: ["**/*.sass"],
          dest: "public/css",
          ext: ".css"
        }]
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
