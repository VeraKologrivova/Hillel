/**
 * Функция, которая принимает на вход массив произвольных 
 * элементов;
 * Далее, создает новый пустой массив result, заполняет его элементами 
 * из входящего с помощью push и возвращает массив-результат.
 *
 * @param {any[]} inputArray - входящий массив
 * @returns {any[]}
 */

function copy(inputArray) {
    const result = [];
    
    inputArray.forEach(function(item) {
        result.push(item);
    });

    return result;
}

const mas = [1, 2, 6, 3, 4, 5];
const newMas = copy(mas);
  
console.log(`${newMas} - скопированный массив [${mas}].`);

/**
 * Улучшенная версия функции copy, которая вместо копирования
 * будет умножать все элементы на 2 и в массив-результат записывать 
 * удвоенные числа.
 *
 * @param {number[]} inputArray - входящий массив
 * @returns {number[]}
 */

function copyAndMultiply(inputArray) {
    const result = [];

    inputArray.forEach(function(item) {
        result.push(item*2);
    });

    return result;
}
  
const newMultiplyMas = copyAndMultiply(mas);
  
console.log(`${newMultiplyMas} - элементы массива [${mas}] * на 2.`);



/**
 * Функция map
 * Функция должна принимать массив элементов и вторым аргументом -
 * функцию, которую нужно применить к каждому элементу, вместо 
 * умножения из прошлого примера.
 *
 * @param {any[]} inputArray
 * @param {function} operation
 * @returns {any[]}
 */
function map(inputArray, operation) {
    const result = [];
    
    inputArray.forEach(function(item) {
        result.push(operation(item));
    });

    return result;
}

function square(x) {
    return x * x;
}
  
const squares = map(mas, square);

console.log(`${squares} - элементы массива [${mas}] возвели в квадрат.`);

