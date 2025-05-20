//object 
const mySym = Symbol("key2")
const user = {
    name:"alamgir",
    nick: "rejvi",
    student:"IDB",
    email: "alamgirrejvi@gmail.com",
    district:"cullia",
    mobile: 1842433856,
    isLoggedIn: false,
    loggedInDays:["sunday","Monday", "friday"],
    [mySym]:"key1"
}
 console.log(user.email) // these two method of console are valid. dot notition and arry-like command
 console.log(user["email"])


 console.log(user.mySym)
 console.log(user[mySym])


 user.email = "alamgirrejvi65@gmail.com" // for override or modification.
 console.log(user.email)

//  Object.freeze(user); // freeze is used for fixed
//  console.log(user.email) here email name will be showed alamgirrejvi65@gmail.com

// user.email = "alamgir@gmail.com"

//  console.log(user.email) It will not show alamgir@gmail.com becouse of freeze

console.log(user) // this is for showing  whole object

user.studyPlace ="new horizon" // this for including new information directly not override 
delete user.nick // this for deleting information

console.log(user.height); // height is not included in object so it will be showen undefined or not defined...

// another way of checking if height included or not , we can use following syntex of "in". but it will show 'false or true' in result format
console.log("height" in user);

// for checking propertis and value , we can aslo do this by 'for in loop' method
for(let key in user){
    console.log(key) //only for properties
};

// this is for properties with values

for(let key in user){
    console.log(key +" :" +user[key]) //here 'key' is just a variable...
};
