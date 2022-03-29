'use strict';


function countdown(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();

    const now_month = now.getMonth() + 1;

    let due_month = due.getMonth();
    if(due_month === 0){
        due_month = 12;
    }

    let month = due_month - now_month;

    if(month === 0){
        month += 11;
    }

    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24) - 365;
    const count = [month, days, hours, min, sec];

    return count;
}

const goal = new Date(2022, 12, 22);

function recalc() {
    const counter = countdown(goal);
    document.getElementById('month').textContent = counter[0];
    document.getElementById('day').textContent = counter[1];
    document.getElementById('hour').textContent = counter[2];
    document.getElementById('min').textContent = String(counter[3]).padStart(2, '0');
    document.getElementById('sec').textContent = String(counter[4]).padStart(2, '0');
    refresh();  
}

function refresh() {
    setTimeout(recalc, 1000);
}
recalc();