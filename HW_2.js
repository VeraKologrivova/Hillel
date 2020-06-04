// У Петра есть некоторое количество денег
const money = 1000;

// цена телефона, который он хочет купить
const price = 12000;

// количество месяцев рассрочки
const loanMaxMonth = 10;

//a. Вычислите ежемесячный платеж используя переменные
// описанные выше и оператор деления.
const monthlyPayment = price/loanMaxMonth;
console.log('Ежемесячный платёж:', monthlyPayment);

// b. Может ли Петр получить телефон сегодня,
// если первый взнос надо внести во время покупки?
// Запишите вычисление с помощью переменных, операторов деления и сравнения.

const canBuyNow = money>monthlyPayment; 
// money>price/loanMaxMonth если с помощью оператора деления
const question = 'Может ли Петр получить телефон сегодня?';
if (canBuyNow)
console.log(question,'Да.');
else
console.log(question, 'Нет.');

// 3. какие типы данных сохранились в переменные monthlyPayment и canBuyNow?
// boolean | number | string

// monthlyPayment - number 
// canBuyNow - boolean


