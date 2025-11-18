function greet(username="Guest") {                  //here we have set a default parameter value i.e. "Guest"
    return "Hello, " + username + "!";
}

const mygreeting = greet();
const arunsgreeting = greet("Arun");

console.log(arunsgreeting);
console.log(mygreeting);