/* jshint camelcase: false */

module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-openui5');
  grunt.loadNpmTasks('grunt-connect');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      base: {
        port: 8080,
        base: './'
      }
    },
    openui5_preload: { // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      component: {
        options: {
          resources: {
            cwd: '',
            prefix: '',
            src: [
              'webapp/**/*.js',
              'webapp/**/*.fragment.html',
              'webapp/**/*.fragment.json',
              'webapp/**/*.fragment.xml',
              'webapp/**/*.view.html',
              'webapp/**/*.view.json',
              'webapp/**/*.view.xml',
              'webapp/**/*.properties'
            ]
          },
          dest: '',
          compress: true
        },
        components: true
      }
    }
  });

  grunt.registerTask('default', ['openui5_preload', 'connect:base']);

};
