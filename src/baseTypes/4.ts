/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/
let person : [string, number];
person = ['Max', 21];

let name :string = person[0];
let age:number = person[1]

export {name,age,person};