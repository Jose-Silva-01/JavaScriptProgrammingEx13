// create our first object
let myFirstObject = {
    myFirstProperty: 'My property value',
    myFirstFloatProperty: 45.59,
    myFunction: function() {
        return this.myFirstFloatProperty / 2;
    },
    add: (a, b) => a + b,
}

// console.log(myFirstObject);
// console.log(myFirstObject.myFirstProperty);
// console.log(myFirstObject.myFirstFloatProperty);
// console.log(myFirstObject.myFunction());
// console.log(myFirstObject.add(1, 2));

//Create Person Object
let Person = function(firstName, lastName, dob) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.dateOfBirth = dob,
    
    this.age = function() {
        let now = new Date();
        let years = now.getFullYear() - this.dateOfBirth.getFullYear();    

        if (now.getMonth() < this.dateOfBirth.getMonth() ||
            (now.getMonth() == this.dateOfBirth.getMonth() && now.getDay() < this.dateOfBirth.getDay())) {
            years -= 1;
        }
        return years;
    }

    this.toString = function(){
        return `Name: ${this.firstName} ${this.lastName} Age:${this.age()}`
    }
}

let person = new Person('Jose', 'Silva', new Date(1998, 09, 3));

console.log(person);
console.log(person.toString());

let anotherPerson = new Person('Ana', 'Silva', new Date(2002,09,16));
let oneMorePerson = new Person('Pedro', 'Paulo', new Date(1997, 05, 31));
let finalPerson = new Person('Paulo', 'Antonio', new Date(1970, 07, 24));

let people = [];
people.push(person);
people.push(anotherPerson);
people.push(oneMorePerson);
people.push(finalPerson);

console.log('\nPrint all the people');
//foreach loop call toString
people.forEach(per => console.log(per.toString()));

//Use filter method to query collection of objects based off conditions
//Filter returns array
console.log(`\nQuery last name Silva`);
let query = people.filter(function(per) {return per.lastName == 'Silva'});
query.forEach(per => console.log(per.toString()));

let findJose = people.filter(function(p){return p.firstName == 'Jose' && p.lastName == 'Silva'});

if(findJose.length > 0){
    console.log(`\nRecordfound:`);
    console.log(findJose[0].toString());
}else{
    console.log(`\nRecord not found`);
}