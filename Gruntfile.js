module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/reference.ts","src/script/**/*.ts","typings/**/*.ts"],
                reference : "src/reference.ts"
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.registerTask('default', ['ts']);
}