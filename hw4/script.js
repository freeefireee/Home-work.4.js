function copyEvenNumbers(firstArray, secondArray) {
    for (let i = 0; i < firstArray.length; i++) {
        if (firstArray[i] % 2 === 0) {
            secondArray.push(firstArray[i]);
        }
    }
}

const firstArray = [1, 2, 2, 3, 4, 55, 45];
const secondArray = [];

copyEvenNumbers(firstArray, secondArray);

console.log(secondArray);
