class Pastry {
    constructor(name = "Generic Pastry", flavor = "Plain", price = 5){
        this.name = name;
        this.flavor = flavor;
        this.price = price;
    }
    describe() {
        console.log(`This is a ${this.flavor}-flavored ${this.name} with only ${this.price}.`)
    }
}
class PainAuChocolat extends Pastry {
    constructor(name, flavor, price, chocolateBars = 2, isWarm = false){
        super(name, flavor, price)
        this.chocolateBars = chocolateBars;
        this.isWarm = isWarm;
    }
    warmUp() {
        this.isWarm = true;
    }
    addChocolate() {
        this.chocolateBars += 1;
    }
    describe() {
        const warm = this.isWarm ? "Warm" : "Cold";
        console.log(`${warm} ${this.name} with ${this.chocolateBars} bars of chocolate. Price: ${this.price}.`)
    }
}
function serveBreakfastPastry(){
    const pastry = new PainAuChocolat("Pain au Chocolat", "Chocolate")
    pastry.warmUp();
    pastry.addChocolate();
    pastry.describe();
}
serveBreakfastPastry()
