class Billing {
    constructor(amount){
        this.amount = amount;
    }
    calculateTotal (){
        return 
    }
}


class FixedBilling extends Billing {
    constructor(amount){
        super(amount)
    }
    calculateTotal (){
        return this.amount
    }
}
const fb = new FixedBilling(1)

console.log(fb.calculateTotal())


class HourBilling extends Billing {
    constructor(amount,hour){
        super(amount),
        this.hour = hour
    }
    calculateTotal (){
        return this.amount * this.hour
    }
}
const hb = new HourBilling(3,2)
console.log(hb.calculateTotal())

class ItemBilling extends Billing {
    constructor(amount,item){
        super(amount),
        this.item = item
    }
    calculateTotal (){
        return this.amount * this.item
    }
}
const ib = new ItemBilling(6,2)
console.log(ib.calculateTotal())