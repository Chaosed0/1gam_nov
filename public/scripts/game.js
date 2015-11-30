
require(['jquery', './util', './constants',
        ], function($, u, c) {
    var self = this;

    var ranks = [
        {
            'limit': 0.1,
            'img': 'haxor.jpg',
            'title': '4 1337 h4x0r'
        },
        {
            'limit': 0.2,
            'img': 'bolt.jpg',
            'title': 'Usain Bolt'
        },
        {
            'limit': 0.3,
            'img': 'average.jpg',
            'title': 'an average guy/gal'
        },
        {
            'limit': 0.4,
            'img': 'potato.jpg',
            'title': 'a potato'
        },
        {
            'limit': 0.5,
            'img': 'elephant.jpg',
            'title': 'an elephant'
        },
        {
            'limit': -1,
            'img': 'grandma.jpg',
            'title': 'grandma'
        }
    ];

    var container = $('.container');
    var body = $('body');

    var time = -1;
    var triggered = false;
    var triggerTime = -1;
    var clickTime = -1;

    var setup = function() {
        triggered = false;
        triggerTime = -1;
        clickTime = -1;
        time = u.getRandom(c.minTime, c.maxTime);

        $('#startText').removeClass(c.hiddenClass);
        $('#scoreBox').addClass(c.hiddenClass);
        container.removeClass(c.triggerBgClass);
        container.addClass(c.normalBgClass);

        window.setTimeout(function() {
            container.removeClass(c.normalBgClass);
            container.addClass(c.triggerBgClass);
            $('#startText').addClass(c.hiddenClass);

            triggered = true;
            triggerTime = (new Date()).getTime();
        }, time * 1000);
    };

    $('body').on('click', function() {
        if (triggered) {
            clickTime = (new Date()).getTime();
            displayScore();
            $('#scoreBox').removeClass(c.hiddenClass);
            triggered = false;
        }
    });

    $('#retryButton').on('click', function() {
        setup();
    });

    var displayScore = function() {
        var seconds = (clickTime - triggerTime)/1000;
        var rank = null;
        for (var i = 0; i < ranks.length; i++) {
            var min = (i == 0 ? 0 : ranks[i-1].limit);
            var max = ranks[i].limit;
            if (max < 0 || (min < seconds && seconds < max)) {
                rank = ranks[i];
                break;
            }
        }
        $('#scoreSpan').text(seconds + " seconds");
        $('#scoreImg').attr('src', 'img/' + rank.img);
        $('#scoreImgCaption').text(rank.title);
    }

    setup();
});
