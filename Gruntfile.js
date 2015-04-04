module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/script/**/*.ts"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask('default', []);
}