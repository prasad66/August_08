function display(ownerName, place) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand + " and bought at " + place);
}

var car = {
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function (ownerName, place) {
        console.log(ownerName + ", this is your car: " + this.brand + " " + this.registrationNumber + " and bought at " + place);
    },

    details: () => console.log(this.brand)
};
var car2 = {
    registrationNumber: "GA125",
    brand: "TATA",

    displayDetails: function (ownerName, place) {
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand + " and bought at " + place);
    },

    details: () => console.log(this.brand)
};


//display(); => This is an independent function, so calling this will be error

car.displayDetails.call(car2, 'Prasad', 'call');
car2.displayDetails.call(car, 'Prasad', 'call');
// In above two call() stmts , car & car2 is passed as the object to refer as 'this' and the ownerName is passed along here. 
//So it doeas not depend upon the object or function it is present in, but to which the 'this' object points to.

car.displayDetails.apply(car2, ['Prasad', 'apply']);
// in the apply (), the same is passed as in the call(), but here it is passed as array of arguments instead of individual arguments





//object
var geeks1 = {
    brand: "Mahindra",
    carName: "Scorpio"
}
//object
var geeks2 = {
    brand: "Volkswagen",
    carName: "Lamborghini"
}

//object
var geeks3 = {
    brand: "TATA",
    carName: "Altroz"
}

function printVal() {
    console.log(this.brand + " owns " + this.carName);
}

function multiArguments(date, month, year) {
    console.log(this.brand + " owns " + this.carName + " initially introduced on " + date + " " + month + " " + year)
}


var printFunc2 = printVal.bind(geeks1); //bound function is assigned to the variable, so that it can be
//using bind()
// bind() takes the object "geeks1" as parameter//
printFunc2();

var printFunc3 = printVal.bind(geeks2);
printFunc3();

var printFunc4 = printVal.bind(geeks3);
printFunc4();
//uniquely defines each objects

//if we try to print the function names it will return the bounded function stored in this variables
console.log(printFunc2, printFunc3, printFunc4)


