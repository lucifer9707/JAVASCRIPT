function sum(num1, num2, ...rest) {
    let total = num1 + num2;
    for (let i = 0; i < rest.length; i++) {
        total += rest[i];
    }
    return total;
}

const total = sum(5,34,4,3,2,2,54);
console.log(total);
