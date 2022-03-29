$(function () {
    setTimeout('ball3()'); //アニメーションを実行
});

function ball3() {
    $('#ball3').animate({
        'left': '-=200px',
        'top': '-=200px'
    }, 800).animate({
        'left': '+=200px',
        'top': '+=200px'
    }, 800);
    setTimeout('ball3()', 1600); //アニメーションを繰り返す間隔
}

$(function () {
    setTimeout('ball4()'); //アニメーションを実行
});

function ball4() {
    $('#ball4').animate({
        'right': '-=200px',
        'top': '-=200px'
    }, 800).animate({
        'right': '+=200px',
        'top': '+=200px'
    }, 800);
    setTimeout('ball4()', 1600); //アニメーションを繰り返す間隔
}