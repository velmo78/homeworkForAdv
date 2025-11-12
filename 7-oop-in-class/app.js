class Unit {
    constructor(race,name,language){
    this.race = race;
    this.name = name;
    this.language =language;
    }
    speak (){
        return console.log (`${this.name}, ${this.language}`)
    }

}

class Orc extends Unit{
    constructor(name,language,weapon){
        super('орк',name,language)
        this.weapon = weapon
    }
    
    punch (){
  console.log(`${this.name} ударить ${this.weapon}`)
    }

    speak (){
       return console.log (`${this.name} говорит на языке: ${this.language}: Я подожгу твой зад так, что в Гондоре подумают будто роковая гора проснулась !`)
        }
    };

const ulot = new Orc ('Улот','Оркский','Дубина')
ulot.punch()
ulot.speak()

class Elf extends Unit{
    constructor( name,language,spell){
        super('эльф',name,language)
        this.spell = spell
    }

    castSpell (spelNum){
   console.log(`${this.name} кастует:${this.spell[spelNum]}`)
    }

    speak (){
       return console.log (`${this.name} говорит на языке: ${this.language}: Да осветит нас Лориэн. `)
        }
    };
    

const aredel = new Elf ('Аредел','Синдарин',['Забвение','Огненный дождь','Стрела света'])
aredel.castSpell(0)
aredel.speak()
 