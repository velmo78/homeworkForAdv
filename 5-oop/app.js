const Unit = function (race, name, language ){
  this.race = race;
  this.name = name;
  this.language =language;
};

Unit.prototype.speak =function(){
  console.log (`${this.name}, ${this.language}`)
};



const Orc = function ( name, language,weapon ){
  Unit.call(this,'орк',name,language)
  this.weapon = weapon;
};

Orc.prototype = Object.create(Unit.prototype)
Orc.prototype.constructor = Orc;

Orc.prototype.punch =  function(){
  console.log(`${this.name} ударить ${this.weapon}`)
};

const ulot = new Orc('Улот','Оркский','Дубина')
ulot.punch()

const Elf = function ( name, language, spell ){
  Unit.call(this,'эльф',name,language)
  this.spell = spell;
};


Elf.prototype = Object.create(Unit.prototype)
Elf.prototype.constructor = Elf;

Unit.prototype.preparingSpell =  function(spelNum){
  console.log(`${this.name} кастует:${this.spell[spelNum]}`)
};

const aredel = new Elf('Аредел','Синдарин',['Забвение','Огненный дождь','Стрела света']);
console.log(aredel)
aredel.preparingSpell(2)