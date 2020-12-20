let name
do{
    name = prompt('Введите ваше имя:')
    if(name==false||name==null){
        continue
    }
    if(!confirm('Вы правильно ввели имя?')){
        name = null
    }
} while(name==true||name===null||name==='')
alert('Привет '+name)