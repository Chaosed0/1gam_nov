
require(['jquery', './util', './constants',
        ], function($, u, c) {
    var self = this;

    var textBox = $('#textBox');
    var body = $('body');

    var time = u.getRandom(c.minTime, c.maxTime);
    var triggered = false;
    var triggerTime = -1;
    var clickTime = -1;

    window.setTimeout(function() {
        body.css('background-color', c.triggerColor);
        triggered = true;
        triggerTime = (new Date()).getTime();
    }, time * 1000);

    window.onclick = function() {
        if (triggered) {
            clickTime = (new Date()).getTime();
            displayScore();
        }
    };

    var displayScore = function() {
        console.log(textBox);
        textBox.text((clickTime - triggerTime) + " milliseconds");
    }
});
