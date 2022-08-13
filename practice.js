//  *     Task1           13 August 2022


// const user = {
//   name: 'NAME',
//   cardName: 'private',
//   balance: 2000,

//   getSum() {
//     console.log(this.balance)
//   },

//   addSum(sum) {
//     this.balance += sum;

//     user.getSum.call(this)
//   }
// };

// // user.getSum()

// // user.addSum(1000);


// const user2 = {
//   name: "ANNA",
//   cardName: "private",
//   balance: 1500,
// };


// // user.getSum.call(user2)

// // user.addSum.call(user2, 200)

// const user3 = {
//   name: "OLEKII",
//   cardName: "private",
//   balance: 3000,
// };

// // user.getSum.apply(user3);
// // user.addSum.apply(user3, [200]);

// const user4 = {
//   name: "ANTON",
//   cardName: "private",
//   balance: 4000,
// };

// const foo = user.getSum.bind(user4)
// foo()
// const foo1 = user.addSum.bind(user4)
// foo1(500)
// foo1(500);
// foo1(500);

//  *     Task2           Game  13 August 2022

// class User {
//   #password
//   constructor(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.#password = password;
//   }

// get password(){
//   console.log(this.#password);
// }

// set password(newPassword){
//   if (newPassword.length >7){
//     this.#password = newPassword;
//     console.log(this.#password);
//   }else {
//     console.log(`Довжина пароля повинна бути більше 7 символів`)}

// }
// }

// // const user1 = new User("Miki", "javascreapt@ukr.net", "qwert1123");
// // console.log(user1);
// // console.log(user1.name);
// // // console.log(user1.#password);
// // user1.password; //getter
// // user1.password = `4dhds`; //setter

// //якщо прибираємо '#' у password - то не зможемо контролювати властивості обʼєкту


// class Human extends User{
// constructor(name, email, password, hp, damage){
//   super(name, email, password) //вказуємо всі ключі, які хочемо витягнути
// this.hp = hp;
// this.damage = damage;

// }
// arrowShot (){
// console.log(`Critical = ${this.damage*0.6}`);
// }


// }
// // const user1 = new Human("Miki", "javascreapt@ukr.net", "qwert1123", 100, 2500);
// // console.log(user1);
// // user1.password;  //getter from prototype
// // user1.password = `4dhds`; //setter from prototype

// class Warrior extends Human{
//   constructor(name, email, password, hp, damage, armor){
//     super(name, email, password, hp, damage);
//     this.armor = armor;
    
//   }
//   attack (){
//       console.log(`Atack = ${this.damage}`);
//       }
//   block (damage){
//         const value = Math.random();
//         if (value>0.5) {
//         console.log(`Attack block`);
//   } else{
//           console.log(`Miss attack with ${damage}`);
//   }
//   }
// }
// class Magic extends Human{
//   constructor(name, email, password, hp, damage, manna){
//     super(name, email, password, hp, damage);
//     this.manna = manna;
//   }
//   spell (){
//     this.manna -= 20;
//     console.log(`Attack with ${this.damage}, cost 20 ${this.manna}`);
//   }

// }
// const user1 = new Warrior("Miki", "javascreapt@ukr.net", "qwert1123", 100, 2500, 1050);
// console.log(user1);
// user1.block(300);
// user1.block(300);
// user1.block(300);

// user1.arrowShot();

//  *     Task3           Замикання  13 August 2022

function init(arr){
  let sum = 0;
  function add (){
    console.log(arguments);
    return sum;
  }
  return add(arr);
}
init([1,2,4,5,7]);
// console.log(sum); не достучимся из вне, только внутри функции
add() //тоже не доступна