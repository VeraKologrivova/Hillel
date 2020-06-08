
const daysTillWeekend = Number(prompt('Сколько дней до выходных?'));
let sighMessage = 'О';
//предполагаю, что число вводят от 0 до 5
//0 - уже наступили

if (daysTillWeekend < 0 || daysTillWeekend > 5) {
    sighMessage = sighMessage + 'шибка, неправильное значение';
} else {
    if (daysTillWeekend === 0) {
        sighMessage = sighMessage + '!';
    } else {
        for (let i = daysTillWeekend; i > 0; i = i - 1) {
            sighMessage = sighMessage + '-хо';
        }
    }
}

alert(sighMessage);