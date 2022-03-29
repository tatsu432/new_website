$(function () {
    setTimeout('ball1()'); //アニメーションを実行
});

function ball1() {
    $('#ball1').animate({
        marginTop: '-=600px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200).animate({
        marginTop: '+=600px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200);
    $('#ball1').fadeOut();
    //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ball2()'); //アニメーションを実行
});

function ball2() { 
    $('#ball2').animate({
        marginTop: '-=600px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200).animate({
        marginTop: '+=600px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200);

    $('#ball2').fadeOut();
     //アニメーションを繰り返す間隔
}


$.fn.animate2 = function (properties, duration, ease) {
    ease = ease || 'ease';
    var $this = this;
    var cssOrig = { transition: $this.css('transition') };
    return $this.queue(next => {
        properties['transition'] = 'all ' + duration + 'ms ' + ease;
        $this.css(properties);
        setTimeout(function () {
            $this.css(cssOrig);
            next();
        }, duration);
    });
};


$(function () {
    setTimeout('ken1()'); //アニメーションを実行
});


function ken1() {
    $('#ken1')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(360deg)' }, 200) //１回転
;
    setTimeout('ken1()', 1600); //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ken2()'); //アニメーションを実行
});


function ken2() {
    $('#ken2')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(-360deg)' }, 200) //１回転
;
    setTimeout('ken2()', 1600); //アニメーションを繰り返す間隔
}