class Developer {
    constructor(name, health = 100, languages, braincell = 1){
        this.name = name
        this.languages = languages
        this.health = health
        this.braincell = braincell
    }
    sleep(){
        console.log("Zzzzzzzzz")
        this.braincell += 5
        this.health += 10
        return this;
    }
    completeProject(title){
        console.log(`${this.name} completed a project named ${title}`)
        this.health -= 15
        this.braincell += 2
        return this
    }
}

const theo = new Developer("Theo", 150, "Python, MERN", 5)
theo.sleep()
theo.completeProject("MERN project")
console.log(theo)

// Javascript -- web vs node

// ECMA

// ------------- Hoisting -------------
// Variable declarations (var) rise to the top of their scope like hot air balloons.
// Functions create their own scope and act like cages, preventing declarations from rising out.
// Assignments, or = signs, act like anchors. They stay put, no matter how the code is rearranged.
// Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value.
// An exception will be thrown if a variable declared with let or const is read before it is initialized.

// console.log(dog)
// var dog = "Petey"
// console.log(dog)

// //  ------------- const & let ------------
// const : variables that will not get reassigned
// let: variables that can get reassigned

// const food = "duck"
// console.log(food)

// for(let i=0; i<10;i++){
//     console.log(i)
// }

// const skills = ["debugging", "sleeping", "making coffee"]
// skills.push("tetris")
// console.log(skills)


// ------------- scope ------------
// let myName = "Ruben";
// function changeName() {
//     // let myName = "Pepper";
//     // myName = "Petey"; // search for the variables inside local scope, then the global one
//     console.log(myName);
//     }
// console.log(myName);
// changeName();
// console.log(myName);

// ------------- destructuring ------------
// const post = {
//     title: "First day in MERN",
//     viewers: 1000,
//     likes: 500,
//     description: "An awesome day with MERN. It works",
//     hashtags: ["excellent", "great", "fun"],
// };
// // const {title : newTitle, viewers, description, createdAt} = post

// console.log(post.description)
// console.log(post.viewers)

// const {title, viewers, likes} = post
// console.log(title)


// ------------- rest/spread ------------
// ES6 provides us with a new operator, ..., that is context dependent.
//Its purpose is to capture the rest of a data set, or to spread content of an existing structure.
const trips = ["Japan", "Spain", "France", "Norway"];
// console.log(trips)

const tripsCopy = [...trips]
// console.log(tripsCopy)

tripsCopy.push("Costa Rica")
// console.log(tripsCopy)
// console.log(trips);

const bigTrip = [...trips, ...tripsCopy, "Thailand"]
// console.log(bigTrip)


// ------------- arrow function ------------
//An anonymous function is simply a function without a name.
function printHello() {
    // console.log("Hello")
}
printHello();

const printHello2 = () => {
    console.log("Hello ES6");
}
printHello2();

function changePrice(price, discount) {
    return price * discount
}
// console.log(changePrice(100, 0.9))

const changePrice2 = (price, discount) => {
    return price * discount;
}
// console.log(changePrice2(100, 0.9));

const changePrice3 = (price, discount) => price * discount;
console.log(changePrice3(100, 0.9));
// console.log(changePrice3(100, 0.9));


// ------------- ternary operator ------------
//Takes three operands: condition followed by a ?, then an expression to execute if the condition is truthy followed by a colon (:),
//and finally the expression to execute if the condition is falsy. Essentially a short if statement

//If statement
const rating = 8;
if(rating > 7) {
    console.log("Yes Im great");
} else {
    console.log("No im not great");
}
//condition ? true : false
(rating > 7)? console.log("True") : console.log("false")