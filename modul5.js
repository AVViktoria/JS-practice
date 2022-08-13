//  *     20/20 modul 5
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
 
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
 

//   constructor({ email, accessLevel, blacklistedEmails=[]  }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   };

// blacklist(email){
//  this.blacklistedEmails.push(email);
// };

// isBlacklisted(email){
//   return this.blacklistedEmails.includes(email);
// };

// };

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true


const hi = 'hello'
console.log(hi);