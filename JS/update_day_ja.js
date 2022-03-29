/* 更新日の取得 */
const last = new Date(document.lastModified);
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
const hour = last.getHours();
let min = last.getMinutes();
if (min < 10)
{
    min = "0" + min;
}
/* 日付を書き換える */
const target = document.getElementById('modify');
target.textContent = `最終更新日: ${year}/${month}/${date} ${hour}:${min}`;



