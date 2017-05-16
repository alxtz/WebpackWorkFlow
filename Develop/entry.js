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


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
    console.log('transform end !');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
