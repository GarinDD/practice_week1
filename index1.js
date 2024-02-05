// Вычислить сумму чисел до данного
// важность: 5
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Например:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Сделайте три варианта решения:

// С использованием цикла.


// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) { /*... ваш код ... */ }

// alert( sumTo(100) ); // 5050

// function sumTo(n) {
//     let sum = 0;

//     for (let i = 0; i <= n; i++) {
//     sum += i; 
//     }
//     return sum;
// }

// console.log(sumTo(5))

// / Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.


// function sumTo(n) {
    
//  }


function cached() {
    const cache = {}
    return function fib(n) {
if (cache[n]) return cache[n]
        if (n<=1) {
    } else {
    let res = fib(n - 1) + fib(n - 2)
    cache[n] = res
    return res
    }
 }
}
