

const user = {
    name: 'Vasya',
    birthday: '03/09/2022'
}

function date () {
    let out = ''
    let now = new Date()
    let nowDay = now.getDate()
    let nowMonth = now.getMonth() + 1

    let num = user.birthday.split('/')
    
    for(let i = 0; i < num.length; i++){
          parseInt(num[i], 10)
         
    }

    if(num[0] == nowMonth && num[1] == nowDay) out = 'BIRTHDAY'
    else out = 'ЖДИ';

    return out
   
    
   
}

 console.log(date()+ ' ' + ': первый способ');
 
function date1() {
    let out = ''

    let birthdayDay = new Date(user.birthday).getDate()
    let birthdayMonth = new Date(user.birthday).getMonth()

    let todayDay = new Date().getDate()
    let todayMonth = new Date().getMonth()
    
  
   if(todayDay == birthdayDay && birthdayMonth == todayMonth) out = 'birthday'
    else out = 'wait';

    return out 
}

console.log(date1()+ ' ' + ': второй способ');


function isBirthDay (a) {
    const birthdaydayData = new Date(a.birthday);
    const now = new Date()

    if(birthdaydayData.getDate() !== now.getDate()) return false
    if(birthdaydayData.getMonth() !== now.getMonth()) return false

    return true
    
}

console.log(isBirthDay(user)+ ' ' + ': урок');

let a = '2009-10-10'

function ee (year){
    
    const now = new Date()
    const b = new Date(year)
    if((now.getFullYear() - b.getFullYear()) < 14) return false

    return true
    

}
console.log(ee(a) + ' ' + ': Домашнее задание');

//console.log(Math.round(new Date(a) / 365));

function z (t) {

    const now = new Date()
    const b = new Date(t)
    let year = (now.getFullYear() - b.getFullYear()) * 365  // дней в году
    let wonth = ((now.getMonth() + 1 - b.getMonth() + 1) * 30) // дней в месяце
    let days = now.getDate() - b.getDate() // дни
    let minDay = 14 * 365

    if(year + wonth + days > minDay) return true
    else return false
   // return (year + wonth + days > war);
   
}
console.log(z(a) + ' ' + ': Домашнее задание 2');