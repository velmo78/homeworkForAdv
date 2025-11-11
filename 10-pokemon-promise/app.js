 function getPokemon (url){
     return fetch (url)
      .then(response =>{
         if(!response.ok){
            throw new Error(`Ошибка запроса: ${response.status} ${response.statusText}`)
         }
            return response.json()
     })
}


getPokemon('https://pokeapi.co/api/v2/pokemon/ditto')
   .then(({ abilities }) =>{
   return getPokemon(abilities[0].ability.url)
   })
   .then(data => {
      const res = data.effect_entries.find(entry => entry.language.name === 'en')
   console.log(res.effect)
   })
   .catch(erorr =>{
      console.error(erorr)
   })
