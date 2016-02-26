module.exports.config = {


    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: 'features/*.feature',

    cucumberOpts: {
        require: 'step_definitions/**/*.js',
        format: 'pretty'
    }

};