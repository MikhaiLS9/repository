let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

let b = a[(Math.floor(Math.random() * (a.length)))]

//console.log(b);

// function random(min,max) {
//     return (Math.floor(Math.random() * max - min + 1) + min)
// }

function random(min,max) {
    return (Math.floor(Math.random() * max - min + 1) + min)
}

 //console.log(new Intl.NumberFormat('ru_RU', option).format(20000));

 //console.log(new Intl.NumberFormat('en-US', usd).format(1222));

 function convert (sum, initialCurrency, convertCurrency){
    const  allCurrency = [
        { name: 'USD', mult: 1},
        { name: 'RUB', mult: 1/60},
        { name: 'EUR', mult: 1.1}
    ]

    const initial = allCurrency.find(c => c.name === initialCurrency) 
        if(!initial) return null

    const convert = allCurrency.find(c => c.name === convertCurrency) 
        if(!convert) return null

    return new Intl
    .NumberFormat('ru-RU', {style: 'currency', currency: convert.name})
    .format(sum * initial.mult / convert.mult)
 }
 console.log(convert( 1000, 'RUB', 'USD'));