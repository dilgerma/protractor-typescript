module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            default: {
                src: ["src/reference.ts", "src/script/**/*.ts", "typings/**/*.ts"],
                reference: "src/reference.ts"
            }
        },
        tsd: {
            default: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: 'tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-tsd');
    grunt.registerTask('default', ['tsd','ts']);
}