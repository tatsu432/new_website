$(function () {
    setTimeout('ball7()'); //アニメーションを実行
});

function ball7() {
    $('#ball7').animate({
        'left': '-=200px',
        'top': '-=200px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200).animate({
        'left': '+=200px',
        'top': '+=200px'
    }, 800).animate2({ transform: 'rotate(360deg)' }, 200);

    $('#ball7').fadeOut();
     //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ball8()'); //アニメーションを実行
});

function ball8() {
    $('#ball8').animate({
        'right': '-=200px',
        'top': '-=200px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200).animate({
        'right': '+=200px',
        'top': '+=200px'
    }, 800).animate2({ transform: 'rotate(-360deg)' }, 200);

    $('#ball8').fadeOut();
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
    setTimeout('ken7()'); //アニメーションを実行
});


function ken7() {
    $('#ken7')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(900deg)' }, 200) //１回転
;
    setTimeout('ken7()', 1600); //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ken8()'); //アニメーションを実行
});


function ken8() {
    $('#ken8')
    .css({ top: 0 })
    .animate2({ top: '100px' }, 200) //下に移動
    .animate2({ transform: 'rotate(-900deg)' }, 200) //１回転
;
    setTimeout('ken8()', 1600); //アニメーションを繰り返す間隔
}