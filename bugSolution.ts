function greeter(person: string) {
    return "Hello, " + person;
}

function greeterArray(persons: string[]) {
    return "Hello, " + persons.join(', ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Correct way to handle an array

let userString = "Jane Doe";
console.log(greeter(userString)); // Correct way to handle string