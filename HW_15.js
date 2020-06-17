/**
 * 1. getPopulationDensity
 * Функцию, которая принимает объект country c
 * со свойствами area и population и возвращает плотность населения
 * на квадратный километр
 *
 * @param {object} country
 * @param {number} country.area - площадь страны (квадратные км)
 * @param {number} country.population - население (чел)
 *
 * @returns {number} плотность населения на квадратный км
 */

function getPopulationDensity(country) {
    let populationDensity;
    populationDensity = country.population/country.area;
    return populationDensity;
}

const france = {
  area: 640_679,
  population: 67_067_000,
  capital: 'Paris',
}

// Плотность населения Франции ~104 чел / кв. км
console.log('Плотность населения Франции:', getPopulationDensity(france));


/**
 * 2. calcFreeFallTime
 * Функция вовращает время свободного падения тела у поверхности Земли.
 * Сопротивлением воздуха можно пренебречь.
 * Используйте Math.sqrt и формулу из школьного курса физики.
 *
 * @param {number} height
 * @returns {number} free-fall time
 */

function calcFreeFallTime(height) {
    const g = 9.8; //ускорение свободного падения
    let freeFallTime;
    freeFallTime = Math.sqrt(2*height/g);
    return freeFallTime;
}

// Для высоты 100м должно вывести примерно 4.516сек
console.log(`Время свободного падения с высоты 100 метров: ${calcFreeFallTime(100)} сек`);


/**
 * 3. calcTriangleAreaFromEdges
 * Функцию, которая находит площадь треугольника по
 * его трем сторонам
 * вам пригодится Math.sqrt и формула Герона
 *
 * @param {number} a - Side a
 * @param {number} b - Side b
 * @param {number} c - Side c
 *
 * @returns {number} triangle area
 */
function calcTriangleAreaFromEdges(a, b, c) {
    let p; //полупериметр
    p = (a+b+c)/2;
    let S; //площадь треугольника
    S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
    return S;
}

// для равностороннего треугольника со стороной 3 площадь ~3.897
console.log(calcTriangleAreaFromEdges(3, 3, 3));

// у треугольника со сторонами 3, 4, 5 площадь ровно 6
console.log(calcTriangleAreaFromEdges(3, 4, 5));