// let arr =  ["alamgir","pull","push","rasel","shifat"]

// // let remove = arr.splice(1,0,"rejvi")
// console.log(remove)

// let arry = [10, 20, 30] // making square number through map
// let ansArray = arry.map((Number)=> {
//     return Number*Number
//  });

//  console.log(ansArray)


// let arry = [10, 20, 30] // adding number into present 
// arry.map((Number)=> {
//     console.log(Number+1)
// })


// let arr = [10,20,30]
// arr.map((Number, index)=>{
//     console.log(Number);
//     console.log(index);
// })


// let arr = [10,20,30,11, 33,39 ,40]
// let evenArray = arr.filter((Number) =>{
//     if(Number % 2 ===0){ // set here 1 for odd number.
//         return true;
//     }else{
//         return false;
//     };
// });

// console.log(evenArray)


// let arr = [10,20,30,11, 33,39 ,40]
// let evenArray = arr.filter((Number) =>{
//     return ( Number % 2===1) // this is for short without if.
// });

// console.log(evenArray)



// let arr = [2,3, "Alamgir", "Rejvi", null]
// let stringArray = arr.filter((value)=>{
//     if(typeof (value) =="string"){ // here we can filter number by adding "number".
//         return true;
//     } else{
//         return false;
//     }
// })
// console.log(stringArray)



// using reduce array.

// let array = [10, 20, 30,40,50]

// let reArray =array.reduce((acc,curr)=>{
//     return acc + curr;
// }, 0);

// console.log(reArray);


// let array = [4,7,1,8,3,5,10,0]
// array.sort((a,b)=> a-b); // for accending sort.

// console.log(array);



let array = [4,7,1,8,3,5,10,0]
array.sort((a,b)=> b-a); // for descending sort.

console.log(array);
console.log(array.indexOf (5)); //for finding index position of an item