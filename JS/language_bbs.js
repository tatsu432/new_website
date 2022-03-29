'use strict';

const lang = document.querySelector('html').lang;

if(lang === 'ja') {
    document.querySelector('option[value="bbs_ja.php"]').selected = true;
} else if(lang === 'en') {
    document.querySelector('option[value="bbs.php"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
} 