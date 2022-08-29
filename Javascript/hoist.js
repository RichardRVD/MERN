//************************************************* */
console.log(hello);                                   
var hello = 'world';                                 
// var hello;
// logs undefined;
// hello = world;

//************************************************* */
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// needle = haystack
// call function
// run function
// needle = magnet
// logs magnet

//************************************************* */
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// brendan = super cool
// logs super cool
// function isnt called

//************************************************* */
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// food = chicken
// logs chicken
// calls function
// runs function
// food = half-chicken
// logs = half-chicken
// food = gone



//************************************************* */
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// error mean is not a funtion
//


//************************************************* */
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//logs undefined
// genre = disco
// calls function
// runs function
//genre = rock
// logs rock
//genre = r&b
// logs r&b
// logs disco


//************************************************* */
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = san jose
// logs san jose
// calls function
// runs function
// dojo = seattle
// logs seattle
// dojo = burbank
// logs burbank
// logs san jose

//************************************************* */
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// log calls the function and passes in values
// runs function
// name = chicago and students = 65
// dojo hiring = true
// error with dojo in else if statement... cant reassign a const variable.
