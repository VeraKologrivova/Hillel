console.log ("С помощью цикла FOR:");

const names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

for (let i = 0; i < names.length; i = i + 1) {
    console.log (`${i+1} элемент массива - ${names[i]}`);
}

//Сделайте то же самое, с помощью метода forEach

console.log ("\nС помощью метода forEach:");

names.forEach(function(item, index) {
    console.log (`${item} имеет позицию ${index}`);
  });