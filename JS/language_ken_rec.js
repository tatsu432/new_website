'use strict';

const lang = document.querySelector('html').lang;

if(lang === 'ja') {
    document.querySelector('option[value="kendama_rec_ja.html"]').selected = true;
} else if(lang === 'en') {
    document.querySelector('option[value="kendama_rec.html"]').selected = true;
}

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
} 