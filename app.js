// 1) for
console.log("task N1");
for (let i = 0; i < 15; i++) {
  console.log(i);
}

// 2) while
console.log("task N2");
let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}

// 3) do/while
console.log("task N3");
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 25);

// 4)
console.log("task N4");
const numbers = [4, 5, 6, 7, 8, 9, 23, 24, 25, 26, 29];
let length = numbers.length;
for (let i = 0; i < length; i++) {
  //   console.log(numbers[i]);
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}

// 5)
console.log("task N5");
const currentDay = new Date().getDay();
let weekDay = "";
switch (currentDay) {
  case 0:
    weekDay = "Sunday";
    break;
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";
    break;
  case 3:
    weekDay = "Wednesday";
    break;
  case 4:
    weekDay = "Thursday";
    break;
  case 5:
    weekDay = "Friday";
    break;
  case 6:
    weekDay = "Saturday";
    break;

  default:
    break;
}
console.log(weekDay);
