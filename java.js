// let produckt = { id: 1, name: 'Bread', count: 1};

// const Mag = function (){
//   this.id = produckt.id
//   this.name = produckt.name
//   this.count = produckt.count
// }
// produckt = new Mag


// Mag.prototype.plus = function () {
//     this.count++
//     if(this.count = isNaN) return this.count = 1 // чтобы корзина не была пустой
   
   
//  }
//  Mag.prototype.del = function () {
//   this.count--
//   if(this.count < 0) delete this.count // чтобы корзина не была пустой
// }
// produckt.plus() //добавляет 
// produckt.del() //удаляет 
// produckt.del()
// produckt.plus()

//  console.log(produckt);

/// Упрвжнение

// const produckt = { id: 1, name: 'Bread', count: 1};

// const Cart = function() {

//   this.produckt = []

// }

// Cart.prototype.addProduct = function (produckt) {
// if(this.produckt.find(produckt => produckt.id === produckt.id)) {
//   return
// }
// this.produckt.push(produckt)
// }

// Cart.prototype.increaseAmont = function (id){
//   this.produckt = this.produckt.map(produckt => {
//     if(produckt.id == id) {
//       produckt.count++
//       return produckt
//     }
//     return produckt
//   })
// }

// Cart.prototype.decreaseAmont = function (id){
//   this.produckt = this.produckt
//   .map(produckt => {
//       if(produckt.id == id) {
//         produckt.count--
//         return produckt
//       }
//       return produckt
//     })
//   .filter(produckt => produckt.count > 0);
// }

// const cart = new Cart()
// cart.addProduct(produckt)
// cart.increaseAmont(1)
// cart.decreaseAmont(1)

// console.log(cart);

const Person = function (race,name,lang) {
  this.race = race
  this.name = name
  this.lang = lang
}

Person.prototype.speac = function (lang,name) {
  console.log(lang + " " + name);
}


Person.prototype.weapon = function() {
  console.log('damadge')
}
Person.prototype.spell = function() {
  console.log('create a spell')
}

const elf = new Person()
const orc = new Person()
console.log(orc.weapon());