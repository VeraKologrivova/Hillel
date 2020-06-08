
const factorialBase = Number(prompt('Введите число'));
let result = 1;

if (factorialBase < 0) {
    result = NaN;
}

if (factorialBase > 0) {
    for (let i = factorialBase; i > 0; i = i - 1) {
        result = result*i;
    }
    
}

alert(result);