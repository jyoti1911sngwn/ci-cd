module.exports = function (grunt) {
  // Load the plugin that allows shell commands
  grunt.loadNpmTasks('grunt-shell');

  // Configure tasks
  grunt.initConfig({
    shell: {
      build: {
        command: 'npm run build'
      },
      test: {
        command: 'npm test --watchAll=false'
      }
    }
  });

  // Register tasks
  grunt.registerTask('build', ['shell:build']);
  grunt.registerTask('test', ['shell:test']);
};
