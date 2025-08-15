//singleton created here
// Object.create()


// Object literals

const symbol = Symbol("key1");

const user = {
    name: "Hecker",
    "full name": "hecker singh",
    age: 20,
    [symbol]: "mykey1",
    location: "India",
    email: "hecker@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]

}

console.log(user.email);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[symbol]);


user.email = "hecker2@gmail.com";

Object.freeze(user); //freezing object so no further changes in the objects

console.log(user);

