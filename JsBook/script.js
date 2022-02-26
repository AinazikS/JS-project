
//1st task
let admin;
let names = 'John';
admin = names;
console.log(admin);

//2nd task
let Earth;
let CurrentUser = 'John';






//3rd one
let name = "Ilya";

// выражение - число 1
alert( `hello ${1}` ); // hello 1

// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name

// выражение - переменная, вставим её в строку
alert( `hello ${name}` ); // hello Ilya





//4th ONE
<script>
"use strict";

let yourName = prompt("What is your name?");

alert( yourName ); 
</script>


//
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
// a = 2
// b = 2
// c = 2
// d = 1

let a = 2;

let x = 1 + (a *= 2); // a = 4; x = 5;

/*

"" + 1 + 0 = "10" 
"" - 1 + 0 = -1
1 = true + false
2 = 6 / "2"
6 = "2" * "3"
"9px" = 4 + 5 + "px" 
"$45" = "$" + 4 + 5 
2 = "4" - 2
NaN  = "4px" - 2
7 / 0 = Infinity
"  -9  " + 5 = "  -9  5"
-14 = "  -9  " - 5
1 = null + 1 
undefined + 1 = NaN 
" \t \n" - 2 = -2 

*/



<script>
"use strict";

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", +2);

alert(+a + +b); // 12
</script>






"use strict";

let jsName = prompt("Какое «официальное» название JavaScript? ", "");
(jsName == "ECMAScript")? alert("Верно!"):
alert("Не знаете? ECMAScript!");

let num = prompt("Enter the number:", 0);
if (num > 0) {
    alert("1");
} else if (num < 0){
    alert("-1");
} else if (num == 0){
    alert("0");
}






let a = 1;
let b = 3;
(a + b <= 4) ? console.log("Мало") : console.log("Много");

let message = (login == 'Сотрудник') ?'Привет':
(login == 'Директор')? 'Здравствуйте':
(login == '') ?'Нет логина':'';




if (!(age >= 14 || age <= 90) );
if (age < 14 || age > 90);

if (age >= 14 && age <= 90)



  
  

let login = prompt("Who is this? " , "" );
let pswd;

(login == "Admin")? pswd = prompt("Enter the password: " , "" ):
(login == null)? alert("Denied"):
alert("I don`t know you");

(pswd == "I`m in charge")? alert("Hello!"):
(pswd == null)? alert("Denied"):
alert("Wrong password");





let i = 0;
while (1<5) alert (i);
// 4
// 3
// 2
// 1
let i = 0;
while (0<5) alert (i);
// 5
// 4
// 3
// 2
// 1  // because of "while" loop

for (let i = 0; i < 5; i++) alert( i );
// 01234


for (let i = 0; i < 5; ++i) alert( i );
// 01234 // because of "for" loop instructions




for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  console.log(i);
}





for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
}




let i = 0;
while (i < 3) {
  console.log(`number ${i}!`, i++);
}



//MY VERSION

let num = prompt("Enter the number that is more than 100: ");

while (!(num > 100)) {
  if (num > 100 || num == null) {
    break;
  }
  prompt("Enter the number again, please");

}






//BOOK`S VERSION

let num;

do {
num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);


//MY VERSION
let n = 10;
hello: 
for (let j = 2; j <= n; j++) {
  for (let i = 2; i < j; i++) {
    if (j % i == 0) continue hello;
  }
  console.log(`The result is ${j}`);
}



//BOOK`S VERSION
const mainNum = 450;

label:
for (let first = 2; first <= mainNum; first++) {
  for (let second = 2; second < first; second++) {
    if (first % second == 0) continue label;
  }
  console.log(`The result is ${first}`);
}


/*
Если бы тут был вложенный цикл, т.е. внутри while лежал еще один while,
то чтобы выйти из двух циклов сразу, находясь внутри вложенного цикла,
было бы верным использование метки. А так она бессмысленна.
*/


/*
Друг. Я для себя правило выделил что на изучение одной темы надо 3 дня. 
К примеру первый день я изучаю несколько разных тем, информация усваивается сумбурно, во многом нет понимания.
Во второй день я повторяю и прорабатываю эти темы снова, и еще может начинаю изучать новые темы. 
То что повторял уже становится понятнее и яснее, приходит понимание как это работает, а то что изучал новое - пока еще не усвоил.
В третий день снова повтор - и на этот раз уже все понятно, что как работает и крутится. 
Я думаю это связано с тем что мозгу после каждой порции информации надо сложить все по полочкам,
и пока мы спим он этим занимается и восстанавливает силы. Кроме того важно не просто читать урок
но еще и активно прописывать все это дело в редакторе кода и результаты смотреть в браузере.
*/


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser = prompt("", "");
// if(browser=="Edge") {
//   alert( "You've got the Edge!" );
// } else if (browser == 'Chrome'
// ||'Firefox'
// || 'Safari'
// || 'Opera') {
//   alert( 'Okay we support these browser too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }

const number = +prompt("Введите число между 0 и 3", "");

if (number === 0) {
  alert("Вы ввели число 0");
}

if (number === 1) {
  alert("Вы ввели число 1");
}

if (number === 2 || number === 3) {
  alert("Вы ввели число 2, а может и 3");
}

const number = +prompt("Введите число между 0 и 3", "");

switch (number) {
  case 0:
    alert("Вы ввели число 0");
    break;
  case 1:
    alert("Вы ввели число 1");
    break;
  case 2:
  case 3:
    alert("Вы ввели число 2, а может и 3");
    break;
}




// function checkAge(age) {return(age > 18)? true:confirm('Родители разрешили?');}
// 
// function checkAge(age) {return(age > 18) || confirm('Родители разрешили?');}

// function min(a,b) {return (a > b)? b : a}




// function pow(x,n) {return x ** n;}

// let a = prompt("Enter 1st numbers: " , "");
// let b = prompt("Enter 2nd numbers: " , "");

// alert(pow(+a,+b));


function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else {
  alert( pow(x, n) );
}





function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);






















































