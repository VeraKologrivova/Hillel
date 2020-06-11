const originalString = prompt('Enter the string');

function removeVowels(str) {
    let newStr = '';
   for (let i = 0; i < str.length; i = i + 1) {
       if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] !='u' && str[i] != 'y')
       {
           newStr = newStr + str[i];
       }
   }
   return newStr;
}
  console.log( removeVowels(originalString) );

  