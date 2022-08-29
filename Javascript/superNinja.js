
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
class Sensei extends Ninja{
    constructor( name, wisdom = 10 ){
        super( name, 200, 10, 10, wisdom )
    }
    speakWisdom(message){
        super.drinkSake();
        console.log(message);
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
const message1 = "What one programmer can do in one month, two programmers can do in two months.";
const message2 = "Wax on, Wax of. This is the way of self-defense.";
const message3 = "Balance, focus, patience... All of these will help you catch a fly with chopsticks.";
const sensei1 = new Sensei("Mr. Miyagi");
const sensei2 = new Sensei("Hanshi Skywalker");
const sensei3 = new Sensei("Kyoshi Splinter");
const sensei4 = new Sensei("Renshi Donotello");
sensei1.speakWisdom(message1);
sensei2.speakWisdom(message3);
sensei3.speakWisdom(message2);
sensei4.speakWisdom(message1);
sensei1.showStats();