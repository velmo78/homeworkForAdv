new Promise ((res,rej) =>{
   navigator.geolocation.getCurrentPosition(
     (position) => res(position),
     (error) => rej (error)
   )
})
.then((coord) => {
   if(!coord){
      throw new Error('Ошибка при получении геопозиции:')
   }
    console.log(coord.coords.latitude)
    console.log(coord.coords.longitude)
}
).catch(error => console.error('Ошибка геолокации:',error.message))
