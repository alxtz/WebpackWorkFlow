// SCSS files
    const style_scss = require('./style.scss');


// Libs
    const font_awesome = require('./libs/font-awesome-4.7.0/css/font-awesome.css');
    const jQuery = require('script-loader!./libs/jquery-3.1.1/jquery-3.1.1.min.js');
    const bootstrap_css = require('./libs/bootstrap-3.3.7/css/bootstrap.min.css');
    // Bootstrap_js Doesn't Actually Need to put Something into Global
    const bootstrap_js = require('./libs/bootstrap-3.3.7/js/bootstrap.min.js');


// Custom JS Modules


/* Main JS Code */
$(document).ready(function(){
    $('h1.rocks p').text('Webpack Rocks !');
});
