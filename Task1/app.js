let text = prompt('Введите колличество дней: ')
let a = 100 - text
if (a>10&&a<20){
    console.log('Осталось',a,'дней')

}else {
    switch ( a % 10 ){
        case 1: 
            console.log('Остался',a,'день')
            break
        case 2: 
            console.log('Осталось',a,'дня')
            break
        case 3: 
            console.log('Осталось',a,'дня')
            break
        case 4: 
            console.log('Осталось',a,'дня')
            break
        case 5: 
            console.log('Осталось',a,'дней')
            break
        case 6: 
            console.log('Осталось',a,'дней')
            break
        case 7: 
            console.log('Осталось',a,'дней')
            break
        case 8: 
            console.log('Осталось',a,'дней')
            break
        case 9: 
            console.log('Осталось',a,'дней')
             break 
        default:
            console.log('error')
            break
    }
}
