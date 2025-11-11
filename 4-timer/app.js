  const timeClass = document.querySelector('.time')

    function TimeNewYear (){
        const now = new Date();
        const year = now.getFullYear()+1;
        const nextYear = new Date (year, 0,1)
        const timeFor = nextYear - now;

        let month = (nextYear.getFullYear() - now.getFullYear()) * 12 + (nextYear.getMonth() - now.getMonth());
        let tempDate = new Date(now);
        tempDate.setMonth(tempDate.getMonth() + month);
      if (tempDate > nextYear) {
        month--;
        tempDate.setMonth(tempDate.getMonth() - 1);
      };

         const days = Math.floor((nextYear - tempDate) / (1000 * 60 * 60 * 24));
         const hours = Math.floor((timeFor / (1000 * 60 * 60)) % 24);
         const minute = Math.floor((timeFor / (1000 * 60)) % 60);
           const secunds = Math.floor((timeFor / (1000)) % 60)
        
        timeClass.innerHTML = `Осталось до Нового Года
        ${month}:Месяцев,
        ${days}:Дней,
        ${hours}:Часов, 
        ${minute}:Минут, 
        ${secunds}:Секунд,`
     
        
      }
      
      TimeNewYear ()
     setInterval(TimeNewYear,1000)