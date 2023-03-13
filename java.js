



// class Person {
//   #login
//   #passvord

//   constructor (login, passvord){
//     this.#login = login
//     this.#passvord = passvord
//   }

//   createPass (oldPass, newPass){
    
//     if(oldPass === this.#passvord) return true
    
//     else return false
//   }
// }


// let user = new Person('qqqq@mail.ru', '123')

// console.log(user.createPass('321'));

class User {
  #login
  #_password

    constructor(login, password){
      this.#login = login
      this.#password = password
    } 

    set #passvord (pass){
      this.#_password = pass.split('').reverse().join('')
    }

    get #passvord (){
      return this.#_password.split('').reverse().join('')
    }

    get login () {
      return this.#login
    }

    checkPassword (pass){
      return this.#password === pass
    }

    changePass(oldPass,newPass){
      if(!this.checkPassword(oldPass)) {
        return false
      }
      this.#password = newPass
      return true
    }

}

const user = new User('qwe@.ru', '123')
console.log(user.changePass('123'));
console.log(user.changePass('123','342'));
console.log(user);





/////////// Домашняя работа

// class Car {
//     #brand
//     #model
//     #run
//    constructor (brand,model,run){
//     this.#brand = brand
//     this.#model = model
//     this.#run= run
    
//   }

//   info(){
//     console.log(`brand: ${this.#brand}, model: ${this.#model}, run: ${this.#run}`);
//   }
  
//     set createRun (r) {
//      this.#run = r
//   }

//     get createRun () {
//      return this.#run
//   }
// }


// let carCreate = new Car('mers','600','150000')

// carCreate.createRun = '2000'
// console.log(carCreate);
