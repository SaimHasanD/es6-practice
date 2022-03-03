// if didn't call 2nd parameter

// ES6 way
function add(num1, num2 = 2) {
    return num1 + num2;
}
const total = add(15);
console.log(total);

// first way
// function add(num1, num2) {
//     if (num2 == undefined) {
//         num2 = 0;
//     }
//     return num1 + num2;
// }


// 2nd way
// function add(num1, num2) {
//     num2 = num2 || 1;
//     return num1 + num2;
// }
