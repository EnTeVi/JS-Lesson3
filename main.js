// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 4;
if (x !== 0) {
    console.log("Вірно");
}
else {
    console.log("Невірно");
}


let a = 1;
if (a !== 0) {
    console.log("Вірно");
}
else {
    console.log("Невірно");
}


a = 0;
if (a !== 0) {
    console.log("Вірно");
}
else {
    console.log("Невірно");
}


a = -3;
if (a !== 0) {
    console.log("Вірно");
}
else {
    console.log("Невірно");
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt("Enter a minute");
// if (time >= 0 && time <= 15) {
//     console.log("1 quarter of hour");
// }
// else if (time > 15 && time <= 30) {
//     console.log("2 quarter of hour");
// }
//
// else if (time > 30 && time <= 45) {
//     console.log("3 quarter of hour");
// }
//
// else if (time > 45 && time <= 60) {
//     console.log("4 quarter of hour");
// }
//
// else {
//     confirm("SYSTEM EROR, BABY!!!");
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt("Enter a number");
// if (day >= 1 && day <= 10) {
//     console.log("1 decade of the month");
// }
// else if (day > 10 && day <= 20) {
//     console.log("2 decade of the month");
// }
//
// else if (day > 20 && day <= 31) {
//     console.log("3 decade of the month");
// }
//
//
// else {
//     confirm("SYSTEM EROR, BABY!!!");
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).

// let schedule = +prompt("Enter number of week");
// switch (schedule){
//     case 1:
//         document.write("Monday");
//         break;
//     case 2:
//         document.write("Tuesday");
//         break;
//     case 3:
//         document.write("Wednesday");
//         break;
//     case 4:
//         document.write("Thursday");
//         break;
//     case 5:
//         document.write("Friday");
//         break;
//     case 6:
//         document.write("Saturday");
//         break;
//     case 7:
//         document.write("Sunday");
//         break;
//     default:
//         document.write("<h1>What? Let's go to the school, baby</h1>")
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

// let x = +prompt("Enter you number one");
// let y = +prompt("Enter You number two");
// if (x > y) {                /////тут можна вказати >=
//     document.write(x);
// }
// else if (x < y) {           /////тут можна вказати <=
//     document.write(y);
// }
// else if (x === y) {         /////тоді це порівняння можна не писати і
//     document.write(x + " = " + y);  /////якщо ввести 4 і 4 --- виведеться 4
// }
// else {
//     document.write(Math.PI);
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt("See what I can do") || "default";
// console.log(x);


// or (Обидва варіанти ніби працюють і ніби однаково. Розумію, що в завданні скоріш за все
// вимагався перший варіант, але хотілось знати, чи ці варіанти ідентичні по своїй роботі?)


// let x = prompt("See what I can do");
// if (!x) {
//     console.log(x || "default");
// }
// else {
//     console.log(x);
// }