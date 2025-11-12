function pokemon () {
 const reqeust = new XMLHttpRequest();
 reqeust.open ('GET','https://pokeapi.co/api/v2/pokemon/ditto')
 reqeust.send()

 reqeust.addEventListener('load', function(){
    const {abilities} = JSON.parse(this.responseText)
    const date = abilities[0].ability.url
    console.log(date);

    const efectRequst =  new XMLHttpRequest();
    efectRequst.open ('GET',`${date}`)
    efectRequst.send();

    efectRequst.addEventListener('load', function(){
    const ab = JSON.parse(this.responseText)
    const res = ab.effect_entries.find(entry => entry.language.name === 'en')
    console.log(res);
 })
})
}
pokemon ()