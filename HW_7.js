// Посчитайте количество букв 'i' в строке
const message = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const messageLength = message.length;
let numberOfLettersI = 0;

for (let i = 0; i < messageLength; i = i + 1) {
    if (message[i] === 'i') {
        numberOfLettersI = numberOfLettersI + 1;
    }
}

console.log(`Количество букв 'i' в строке = ${numberOfLettersI}`);
