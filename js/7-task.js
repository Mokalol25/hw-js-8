console.log("Завдання 7");
let num = 1;
while (num <= 20) {
    if (num % 3 === 0) {
        num++;
        continue;
    }
    console.log(num)
    num++;
}