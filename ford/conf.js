exports.config = {

    framework: 'custom',
    frameworkPath: 'node_modules/protractor-cucumber-framework',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    specs: [
        'ford_tests/features/check_name.feature'
    ],

    cucumberOpts: {
        require: 'ford_tests/testFord.js',
        format: 'summary'
    },

    onPrepare: function(){
        browser.manage().window().maximize();
    }

};