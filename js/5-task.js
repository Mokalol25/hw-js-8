console.log("Завдання 5");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] === 7) {
        break;
    }
    console.log(numbers[num]);
}