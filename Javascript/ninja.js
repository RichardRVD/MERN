class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(ninja){
        console.log(this);
    }
    drinkSake(){
        this.health += 10;
    }
    hurtKnee(){
        this.health -= 5;
    }
}
const ninja1 = new Ninja("Ricky", 100);
const ninja2 = new Ninja("Alex", 100);
const ninja3 = new Ninja("Paige", 100);
ninja1.sayName();
ninja2.sayName();
ninja3.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja2.showStats();
ninja2.drinkSake();
ninja3.showStats();
ninja3.drinkSake();
ninja1.showStats();
ninja2.showStats();
ninja3.showStats();
ninja2.hurtKnee();
ninja3.hurtKnee();
ninja2.showStats();
ninja3.showStats();