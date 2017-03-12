module.exports = function(grunt) {

    grunt.initConfig({
        less: {
            main: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    './src/css/main.css': './src/less/main.less'
                }
            }
        },
        watch: {
            files: ['src/less/**/*'],
            tasks: ['less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);

};