// ------ callback functions -------

const makingPurchase = (person, price) => {
    console.log(`Processing purchase for ${person}, charged ${price}`);
};

const returningItem = (person, price) => {
    console.log(
        `Processing refund for ${person}, ${price} will be issued at ${person}'s bank account`
    );
};

const parentFunction = (callback, ruben, person, price) => {
    console.log("Welcome to the store, how can I help you? ")
    callback(person, price)
    ruben(person, price)
}

// parentFunction(makingPurchase, returningItem, "David", 1000);
// parentFunction(returningItem, "David", 1000)



// ------ Object.freeze() -------
const shoppingList = Object.freeze([
    { id: 3, itemName: "Dog Food", price: 1.29, shops: ["petco", "Trader Joes"] },
    { id: 5, itemName: "red gamer chair", price: 300, shops: ["amazon", "Best Buy"],},
    { id: 9, itemName: "soup dumplings", price: 3.29, shops: ["Trader Joes"] },
    { id: 2, itemName: "Air ticket to Japan", price: 1400, shops: ["expedia"] },
    { id: 10, itemName: "custard tart", price: 3.99, shops: ["Trader Joes"] },
]);

// ------ .map & .filter -------
// .map()
// DEMO: return an array of prices
const prices = shoppingList.map((item) => {
    return item.itemName + ': $' + item.price
})

const prices2 = shoppingList.map((t, i) => `${i}-- ${t.id} :${t.itemName} - ${t.price}`)

// console.log(prices)
// console.log(prices2)

// NOT RECOMMENDED FOR MAP
const prices3 = shoppingList.map(function(item){
    return item.price
})
// console.log(prices3)

// TODO: return a list of item names (write your own code)
// demonstrated in AM session
// .filter()
// DEMO: return a list of cheap items (cheap: price< 100)
const cheapItems = shoppingList.filter((elijah) => elijah.price < 500)
// console.log(cheapItems)
// DEMO: return a list of cheap items with only the names

// const cheapItemNames = shoppingList.filter(() =>)
const cheaperItems = shoppingList.filter((example) => example.price < 100).map((example)=>example.itemName +': $'+ example.price)
console.log(cheaperItems)


// TODO: given a deleteId, return a list of items without the item of that matching id
// will be demonstrated in PM session (write your own code)

// TODO: given an array index, return a list of items without the item of that index
// will be demonstrated in PM session (write your own code)

// TODO: filter the items that can be bought in Trader Joes
// HINT: .includes(keyword) returns a boolean
// will be demonstrated in PM session (write your own code)

class Athlete {
    constructor(name, country, sport, awards) {
        this.name = name;
        this.country = country;
        this.sport = sport;
        this.awards = awards;
        this.energyLevel = 100;
        this.salary = 10000
    }
    sayName() {
        console.log("Hi my name is " + this.name)
    }
    displayStats(){
        console.log(`${this.name}'s energy level is ${this.energyLevel} and they have ${this.awards} awards.`)
    }
    playSport() {
        this.energyLevel -= 75;
    }
    takeIceBath() {
        this.energyLevel = 100;
    }
}

let mack = new Athlete("Brittney Spears", "USA", "Singer", 2);

// mack.sayName();
// mack.playSport();
// mack.displayStats();
// mack.takeIceBath();
// mack.displayStats();

class Swimmer extends Athlete {
    constructor(name, country, lapSpeed, awards){
        super(name, country, "Swimming", awards)
        this.lapSpeed = lapSpeed;
    }
    swim(){
        console.log("Splasssh, I'm swimming");
        this.energyLevel -= 10;
    }
}

let s1 = new Swimmer("Michael Phelps", "USA", 9, 0)

s1.displayStats()
s1.swim()
s1.displayStats()