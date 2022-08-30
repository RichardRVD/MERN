class Card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor( name, cost, power, resilience ){
        super( name, cost );
        this.power = power;
        this.resilience = resilience;
    }
    attack( target ){
        //reduce target resilience by power
        if(target instanceof Unit){
            target.resilience -= this.power;
            console.log(`${ this.name } attacked ${ target.name } inflicting ${ this.power } damage.`);
        } else {
            throw new Error( "The attack missed!" );
        }
    }
}
class Effect extends Card{
    constructor( name, cost, stat, magnitude){
        super( name, cost );
        this.stat = stat;
        this.magnitude = magnitude;
        let raise_lower = "";
        if( magnitude > 0 ){
            raise_lower = "Raise";
        } else {
            raise_lower = "Lower";
        }
        this.text = `${ raise_lower } the  ${ this.stat } by ${this.magnitude}.`;
    }
    turn( target ){
        if( target instanceof Unit ){
            if( this.stat === "power" ){
                target.power += this.magnitude;
                console.log(this.text);
            } else if (this.stat === "resilience" ) {
                target.resilience += this.magnitude;
                console.log( this.text );
            } else { console.log ( "Attack missed!" )}
        } else {
            throw new Error( "Your attack missed! Make sure to target a unit." );
        }
    }
}

const redBeltNinja1 = new Unit( "Red Belt Ninja", 3, 3, 4);
const redBeltNinja2 = new Unit( "Daniel-Son", 5, 4, 6);
const redBeltNinja3 = new Unit( "Rafael", 5, 5, 5);
const hardAlgo1 = new Effect( "Hard Algorithm", 2, "resilience", 3);
console.log(`${ redBeltNinja1.name }s Resilience: ${ redBeltNinja1.resilience }`);
hardAlgo1.turn( redBeltNinja1 );
console.log(`${ redBeltNinja1.name }s Resilience: ${ redBeltNinja1.resilience }`);
const blackBeltNinja1 = new Unit( "Black Belt Ninja", 4, 5, 4);
const blackBeltNinja2 = new Unit( "Mr. Myagi", 8, 9, 7);
const blackBeltNinja3 = new Unit( "C. Norris", 10, 10, 10);
const upr = new Effect("Unhandled Promise Rejection", 1, "resilience", -2 );
console.log(`${ redBeltNinja1.name }s Resilience: ${ redBeltNinja1.resilience }`);
upr.turn( redBeltNinja1 );
console.log(`${ redBeltNinja1.name }s Resilience: ${ redBeltNinja1.resilience }`);
const pp = new Effect( "Pair Programming", 3, "power", 2)
pp.turn( redBeltNinja1 );
console.log(`${ redBeltNinja1.name }s Resilience: ${ redBeltNinja1.resilience } after the Pair Programming effect!`);
redBeltNinja1.attack( blackBeltNinja1 );
console.log(`${ blackBeltNinja1.name }s Resilience = ${ blackBeltNinja1.resilience }`);
blackBeltNinja2.attack(redBeltNinja2);
console.log(`${ redBeltNinja2.name }s Resilience = ${ redBeltNinja2.resilience }`);
blackBeltNinja3.attack(redBeltNinja1);
console.log(`${ redBeltNinja1.name }s Resilience = ${ redBeltNinja1.resilience }`);
