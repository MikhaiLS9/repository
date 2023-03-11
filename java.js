// let count = 5;

// const interval = setInterval(() => {
    
//   if(count < 10)  console.log('00:0'+ count + ' '+'Упражнение');
//   else if(count > 10) console.log('00:'+ count +' '+ 'Упражнение');

//   count -= 1;

// }, 1000);

// const timeout = setTimeout(() => {
//     console.log('Готово'+ ' '+'Упражнение');
//     clearInterval(interval)
// }, 5000);

// function pizzaTimer(ms) {
//     const time = new Date().getTime() + ms
//     const interval = setInterval(() => {
//        console.log(
//         new Intl.DateTimeFormat('ru-RU',{
//             minute: "numeric",
//             second: "numeric"
//         }).format(time + 100 - new Date()) +' урок'
//        );
//     }, 1000);

//     setTimeout (() => {
//         console.log('Пицца');
//         clearInterval(interval)
//     },ms)
// }
//     console.log(pizzaTimer(5000));// (как мне убрать undefined в самом начале ?)

/// ПЕРВЫЙ ВАРИАНТ !!! 

const month = document.querySelector('#month')
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minute = document.querySelector('#minutes')
const second = document.querySelector('#seconds')

// const nowYear = new Date().getFullYear()
// const nextYear = new Date(`January 01 ${nowYear + 1} 00:00:00`)
// const date = new Date()

// function a() {
//   month.innerHTML = 11 - new Date().getMonth() // месяцев
//   days.innerHTML = Math.floor((nextYear - date)/86400000); // дней
//   hours.innerHTML = 23 - new Date().getHours() //  часов
//   minute.innerHTML = 59 - new Date().getMinutes() // минут
//   second.innerHTML = 59 - new Date().getSeconds() // секунд
// }
// a()
// setInterval(a,1000)


// /// ВТОРОЙ ВАРИАНТ !!!

const nowYear1 = new Date().getFullYear()
const nextYear1 = new Date(`January 01 ${nowYear1 + 1} 00:00:00`)
function xxx () {
const nowTime = new Date()
const diff = nextYear1 - nowTime

let = monthLeft =  Math.floor(diff / 86_400_000) % 12 + 2
// Перевод в дни
let daysLeft = Math.floor(diff / 86_400_000)
//часов всего
let hoursLeft = Math.floor(diff / 1000 / 60 / 60 ) % 24 
//минут всего
let minutesLeft = Math.floor(diff / 1000 / 60 ) % 60
// секунд всего
let secondsLeft = Math.floor(diff / 1000 ) % 60

  month.innerHTML = monthLeft
  days.innerHTML = daysLeft
  hours.innerHTML = hoursLeft
  minute.innerHTML = minutesLeft
  second.innerHTML = secondsLeft
  
}
xxx()

setInterval(xxx)
