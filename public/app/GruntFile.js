/**
 * Created by itunu.babalola on 2/22/17.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            angular: {
                src:['!js/angular-libs.js', 'bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js','bower_components/angular-resource/angular-resource.js'],
                dest:'js/angular-libs.js'
            },
            controllers: {
                src:['!js/controller-lib.js','js/Controllers/mainController.js'],
                dest:'js/controller-libs.js'

            },

            services:{
                src: ['!js/services-lib.js','js/Services/mainService.js'],
                dest:'js/services-lib.js'
            }
        },

        uglify: {
            options : {
                sourceMap: false,
                mangle: false,
                compress: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            angular:{
                src:'js/angular-libs.js',
                dest:'js/angular-lib-min.js'
            },
            controllers:{
                src:'js/controller-libs.js',
                dest:'js/controller-libs-min.js'

            },
            app:{
                src:'js/app.js',
                dest:'js/app.min.js'
            },

            services:{
                src: 'js/services-lib.js',
                dest:'js/services-lib-min.js'
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', [ 'concat', 'uglify']);
};