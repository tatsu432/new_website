$(function () {
    setTimeout('ball3()'); //アニメーションを実行
});

function ball3() {
    $('#ball3').animate({
        'left': '-=200px',
        'top': '-=200px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200).animate({
        'left': '+=200px',
        'top': '+=200px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200);

    $('#ball3').fadeOut();
     //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ball4()'); //アニメーションを実行
});

function ball4() {
    $('#ball4').animate({
        'right': '-=200px',
        'top': '-=200px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200).animate({
        'right': '+=200px',
        'top': '+=200px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200);

    $('#ball4').fadeOut();
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
    setTimeout('ken3()'); //アニメーションを実行
});


function ken3() {
    $('#ken3')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(360deg)' }, 200) //１回転
;
    setTimeout('ken3()', 1600); //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ken4()'); //アニメーションを実行
});


function ken4() {
    $('#ken4')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(-360deg)' }, 200) //１回転
;
    setTimeout('ken4()', 1600); //アニメーションを繰り返す間隔
}