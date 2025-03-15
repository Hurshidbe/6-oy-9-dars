//////////////////////////// 1- topshiriq
// type username = string;
// type age = number;
// type is_verified = boolean;

// const myage: username | age | is_verified = 19;
// const myname: username | age | is_verified = "Hurshidbe";
// const my_verification: username | age | is_verified = true;
// console.log(myname, myage, my_verification);

////////////////////////// 2- topshiriq
// let userId: number = 123;
// let username: string = "Hurshid";
// let hasPermission: boolean = true;

/////////////////////////  3- topshiriq

// function add(a: number, b: number): number {
//   return a + b;
// }
// const natija = add(12, 8);
// console.log(`natija: `, natija);

//////////////////////// 4- mashq

// type arrType = number[];

// const sonlar: arrType = [12, 15, 5, 4, 2, 5, 12, 2, 15, 56, 15];
// sonlar.push(12, 12, 45, 5);
// console.log(sonlar);

//////////////////////// 5- mashq

// type arrstring = string;
// type arrnumber = number;
// type arr = (arrnumber | arrstring)[];

// const informatons: arr = ["salomaat", 156];
// informatons.push(156165);
// console.log(informatons);

/////////////////////// 6- mashq

// interface Ikitob {
//   title: string;
//   author: string;
//   description?: string;
//   page_count: number;
// }

// const kitob: Ikitob[] = [
//   {
//     title: "Atomic Habits",
//     author: "James Clear",
//     page_count: 274,
//     description: "growing habits Truly",
//   },
//   { author: "Morgan Khauzel", page_count: 224, title: "money psycalogy" },
// ];

// console.log(kitob);

///////////////////////// 7- mashq

// interface Iuser {
//   id: number;
//   firstname: string;
//   email?: string;
// }

// const oneUser: Iuser[] = [{ firstname: "Hurshidbe", id: 1 }];
// console.log(oneUser);

///////////////////////// 8- mashq

// enum weekDays {
//   day1 = "dushanba",
//   day2 = "seshanba",
//   day3 = "chorshanba",
//   day4 = "payshanba",
//   day5 = "juma",
//   day6 = "shanba",
//   day7 = "yakshanba",
// }

// console.log(weekDays.day5);

///////////////////////// 9- mashq
// let person: [boolean, string, number];

// person = [true, "Hurshidbe", 19];

// console.log(person[0], person[1], person[2]);

///////////////////////// 10- mashq

// type id = number | string;

// let userId: id = 1156;
// let username: id = "Hurshidbe";

// console.log(userId, username);

///////////////////////// 11- mashq

// function add(a: number, b: number): number {
//   return a + b;
// }

// function minus(a: number, b: number): number {
//   return a - b;
// }
// const ADDnatija = add(12, 8);
// const MINUSnatija = minus(12, 8);
// console.log(ADDnatija, MINUSnatija);

///////////////////////// 12- mashq
// function getFirstElement<T>(arr: T[]): T | undefined {
//     return arr[0];
//   }

//   const numbers = [1, 2, 3, 4, 5];
//   const strings = ["apple", "banana", "cherry"];
//   const booleans = [true, false, true];

//   console.log(getFirstElement(numbers));
//   console.log(getFirstElement(strings));
//   console.log(getFirstElement(booleans));

///////////////////////// 13- mashq

// interface Animal {
//   name: string;
// }

// interface Dog extends Animal {
//   breed: string;
// }

// const myDog: Dog = {
//   name: "Rex",
//   breed: "laycha",
// };

// console.log(myDog);

///////////////////////// 14- mashq

let userInput: any = "Hello, TypeScript";
let userName = userInput as string;

console.log(userName.length);
