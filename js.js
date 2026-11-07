logItems(['Mango', 'Poly', 'Ajax'])

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}



function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(' ');
    return words.length * pricePerWord;
}
console.log(calculateEngravingPrice('barabolia 123', 10));



function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

console.log(findLongestWord('Js 123 983'));


function formatString(string) {
  if (string.length <= 40) {
    return string;
  }

  return string.slice(0, 40) + '...';
}

console.log(formatString(' 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20'));



function checkForSpam(message) {
  const lowerMessage = message.toLowerCase();

  return lowerMessage.includes('spam') ||
         lowerMessage.includes('sale');
}

console.log(checkForSpam('This is SPAM'));
console.log(checkForSpam('Hello world'));




let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число');

  if (input === null) {
    break;
  }

  numbers.push(Number(input));
}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(`zagal sum = ${total}`);

