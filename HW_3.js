const valueOfCoin = 0.25;
const numberOfCoins = 2000;
const metroTicketPrice = 8; //если взять стоимость проезда 8грн.

const amountOfmoney = valueOfCoin*numberOfCoins; //количество денег на карте

const metroTickets = Math.trunc(valueOfCoin*numberOfCoins/metroTicketPrice);
// нашла функцию, которая возвращает целую часть, без неё я б действовала так:

var ticketPriceCounter = metroTicketPrice;
var metroTicketsNew = 0;
while(ticketPriceCounter<amountOfmoney)
{
    ticketPriceCounter = ticketPriceCounter + 8;
    metroTicketsNew = ++metroTicketsNew;
}
console.log('Результат по первому способу:');
console.log(metroTickets);
console.log('Результат по второму способу:');
console.log(metroTicketsNew);
