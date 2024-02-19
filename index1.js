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


// function cached() {
//     const cache = {}
//     return function fib(n) {
// if (cache[n]) return cache[n]
//         if (n<=1) {
//     } else {
//     let res = fib(n - 1) + fib(n - 2)
//     cache[n] = res
//     return res
//      }
//     }

// }


// Запрашивать данные у пользователя необходимо с помощью
// prompt(), а выводить результат с помощью alert().
// 1
// let userdata = prompt(`Enter the username`)
// alert(userdata)

// Запросите у пользователя его имя и выведите в ответ:
// // «Привет, его имя!».
// let greetings = prompt(`Please state your name here: `)
// alert(`Hello, ${greetings}`)

// 2
// Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.

// let yearOfBirth = +prompt(`Enter your year of birth`)
// const currentYear = 2023
// result = currentYear - yearOfBirth
// alert(`You are ${result} years old`)

// 3
// Запросите у пользователя длину стороны квадрата и вы-
// ведите периметр такого квадрата.
// let length = +prompt(`Enter the length of one side of the square`)
// perimeter = length * 4
// alert(`The perimeter is: ${perimeter}`)

// 4
// Запросите у пользователя радиус окружности и выведите
// площадь такой окружности.

// let radius = +prompt(`Enter the radius of the circle: `)
// area = (radius**2)* 3.14
// alert(`The area of the circle is the following: ${area}`)

// 5
// Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчи-
// тайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.

// let distance = +prompt(`Enter the distance between the cities in km`)
// let time = +prompt(`Enter the time in hours you need to arrive to the desired city`)

// speed = distance * time
// alert(`You need to drive at the of ${speed} km/h to reach your destination`)

// 6
// Реализуйте конвертор валют. Пользователь вводит долла-
// ры, программа переводит в евро. Курс валюты храните в
// константе.


// let usdToEur = +prompt(`Enter the amount of USD that you want to convert to EUR`)
// const eur = 0.93
// ratio = usdToEur / eur
// alert(`You have ${ratio} EUR`)

// 7
// Пользователь указывает объем флешки в Гб. Программа
// должна посчитать сколько файлов размером в 820 Мб по-
// мещается на флешку.
// 1

// let space = +prompt(`Enter the amount of gb in your flash-drive`)
// const gb = 1000
// fileAmount = (space * gb) / 820
// alert(`You can upload ${fileAmount} sized 820 each`)

// Пользователь вводит сумму денег в кошельке и цену одной
// шоколадки. Программа выводит сколько шоколадок может
// купить пользователь и сколько сдачи у него останется.

// let sum = +prompt(`Enter the number of the available funds`)
// let price = +prompt(`Enter the price of the chocolate bar`)
// amout = sum / price
// change = sum % price 
// alert(`You can buy ${Math.floor(amout)} bars and still have ${change} dollars`)

// Запросите у пользователя трехзначное число и выведите
// его задом наперед. Для решения задачи вам понадобится
// оператор % (остаток от деления).

// let enter = prompt(`Enter a super-big digit integer`)
// alert(enter.split().reverse().join())


// 10 Запросите у пользователя целое число и выведите в ответ,
// четное число или нет. В задании используйте логические
// операторы. В задании не надо использовать if или switch.

// let enterNum = +prompt(`Enter an integer`)
// switch(enterNum % 2) {
//     case 0:   
//       alert(`The number is even`);
//       break;
  
//     default:
//       alert(`The number is odd`);
//       break;
//   }


// Week 2

// Вам необходимо самостоятельно решить, для какого задания
// какой оператор ветвления лучше использовать: if, switch или
// тернарный.
// 1
// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–12), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

// age = +prompt(`Enter the age`)
// const string = (age > 0 && age <= 12) ? `You're an infant on an ipad, go to sleep` : 
//                (age > 12 && age <= 18) ? `You're a teenager` : 
//                (age > 18 && age <= 60) ? `You're an adult` : 
//                `You're a senior person`
// alert(string)

// 2
// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

// let num = +prompt(`Enter a number ranging from 0 to 9`)
// switch(num) {
//         case 0:   
//           alert(`)`);
//           break;
//           case 1:   
//           alert(`!`);
//           break;
//           case 2:   
//           alert(`@`);
//           break;
//           case 3:   
//           alert(`#`);
//           break;
//           case 4:   
//           alert(`$`);
//           break;
//           case 5:   
//           alert(`%`);
//           break;
//           case 6:   
//           alert(`^`);
//           break;
//           case 7:   
//           alert(`&`);
//           break;
//           case 8:   
//           alert(`*`);
//           break; 
//           case 9:   
//           alert(`(`);
//           break;
//         default:
//           alert(`Wrong input data`);
//           break;
//       }

// 3
// Запросить у пользователя трехзначное число и проверить,
// есть ли в нем одинаковые цифры.
let number = +prompt(`Enter a three digit number`)
alert(number.split().compare().join())



// 4


// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

let year = +prompt(`Enter the year in YYYY format`)
if (year % 400 == 0) || (year % 4 == 0 && year % 100 !==0 )
// 5
// Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.
// 6
// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.