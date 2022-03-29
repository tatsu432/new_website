$(function () {
    setTimeout('ball5()'); //アニメーションを実行
});

function ball5() {
    $('#ball5').animate({
        'left': '-=200px',
        'top': '-=200px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200).animate({
        'left': '+=200px',
        'top': '+=200px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200);

    $('#ball5').fadeOut();
     //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ball6()'); //アニメーションを実行
});

function ball6() {
    $('#ball6').animate({
        'right': '-=200px',
        'top': '-=200px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200).animate({
        'right': '+=200px',
        'top': '+=200px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200);

    $('#ball6').fadeOut();
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
    setTimeout('ken5()'); //アニメーションを実行
});


function ken5() {
    $('#ken5')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(1000deg)' }, 200) //１回転
;
    setTimeout('ken5()', 1600); //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ken6()'); //アニメーションを実行
});


function ken6() {
    $('#ken6')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(-1000deg)' }, 200) //１回転
;
    setTimeout('ken6()', 1600); //アニメーションを繰り返す間隔
}