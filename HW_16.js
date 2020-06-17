//A.

/**
 * Какие значения становятся "false", в процессе приведения к
 * логическому типу (Boolean)?
 *
 * Запишите значения соответствующих типов в массивы.
 */

// Значения типа Number, которые при приведении к Boolean станут false
const falseNumberValues = [0,-0, NuN];

// Значения типа Object, которые при приведении к Boolean станут false
const falseObjectValues = [null];

// Значения типа String, которые при приведении к Boolean станут false
const falseStringValues = [''];

// Другие значения, которые при приведении к Boolean станут false
const otherFalseValues = [undefined,false];



//B.


var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// что выведется на экран и почему?
/**
 * undefined
 * 
 * Обьяснение:
 * var text = 'inside'; - локальная переменная
 * var text = 'outside'; - глобальная переменная
 * При выполнении функции предпочтение отдаётся не глобальной, а локальной переменной, 
 * (если она имеет точно такое же имя).
 * Но локальная переменная задается не до вывода на консоль, а после => undefined
*/

//C.

/**
 * @param {string[]} lines - array of strings
 */
function addLine(lines) {
  lines.push(`Line ${lines.length + 1}`);
}

const mainPageLines = ['Line 1', 'Line 2', 'Line 3'];

addLine(mainPageLines); //здесь в конец массива добавляется "Line 4"
addLine(mainPageLines); //здесь в конец массива добавляется "Line 5"


console.log(mainPageLines);

// Сколько элементов выведется в консоль? Объясните ваш ответ.
/**
 * Выведется 5 элементов в консоль, 
 * так как было 3 элемента и еще 2 мы добавили 
 * с помощью 2х повторов функции addLine.
*/