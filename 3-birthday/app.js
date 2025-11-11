const birthdate1 = '2010-12-31'
const birthdate2 = '2022-01-01'
const birthdate3 = '2006-12-21'

function validation(date) {
    const count = [];
     for (let el of date){
        if (el == '-'){
            count.push(el)
        };
    };
    if (date.length === 10 && count.length == 2 ){
          const newDate = new Date(date);
          const nowDate = new Date();
          const staticYear = new Date();
          staticYear.setFullYear(nowDate.getFullYear() - 14)
          
        return newDate <= staticYear
    }else{
       return console.log('Введите коректную дату')
    };

   
}
console.log(validation(birthdate1))
console.log(validation(birthdate2))
console.log(validation(birthdate3))