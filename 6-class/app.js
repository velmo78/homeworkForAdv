class Car {
    #brand
    #model
    #mileage
    constructor(brand,model,mileage){
    this.#model = model,
    this.#brand = brand,
    this.#mileage= mileage
    }
    set mileage (mile) {
        this.#mileage = mile
    } 
    get mileage (){
        return this.#mileage
    }
    info(){
        return console.log(`${this.#brand}, ${this.#model}, ${this.#mileage}`)
    }
};
const audi = new Car('audi','x5',1500)

console.log(audi.mileage)
audi.info()
audi.mileage = 120
console.log(audi.mileage)
audi.info()