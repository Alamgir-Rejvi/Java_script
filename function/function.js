// function myFunction(){
//     console.log("hello function")
//     console.log("I am here to know about You")
// }

// myFunction()



// function myFunction(para){ // here "para" is called parameter , parameter can be more than one...
//     console.log(para); // same as parmeter . now an input be written in argument following...
    
// }

// myFunction("I am learning js function"); // this is called argument



function sum(x,y){
    let s = x + y;
    return s;
    // it can be done without variable
    return x + y

}

let total = sum (4,5);
console.log(total)
console.log(sum(4,5)) this short way


// arrow function

function multi(a,b){
    return a*b;
};

const arrowFunction = (a,b) =>{
    return(a*b);
};