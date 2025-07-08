let arr = [2,5,7]
//destructuing 
let [x,y,z] = arr 

// console.log(x,y,z) 
let name;
let obj = { name: 'sunil' , age : 34}
let {name : personName,age}  = obj 
// console.log(obj.name, name )
// console.log(personName)
//spread operator 
let a = [3,4]
let b = [6,7]

let c = [...a,45,23,...b]
// console.log(c)

function sum (a,...rest){
    console.log(rest)
    console.log(arguments)
    return rest
}

sum(3,4,6,7,8,89)

// Array Destructuring
// Destructure the first three elements from this array:
// const nums = [100, 200, 300, 400, 500];

// Extract the first element and group the rest into another array.

// Swap two variables using array destructuring.

// ✅ Object Destructuring
// Destructure name, age from:
// const user = { name: "Alice", age: 30, email: "alice@example.com" };

// Destructure a nested property from:
// const employee = { id: 1, details: { designation: "Manager", dept: "Sales" } };

// Rename properties while destructuring:
// Destructure title as heading and desc as description from this object:
// const article = { title: "News", desc: "Breaking news" };

// Use default values while destructuring:
// Destructure theme (default: "light") and layout (default: "grid") from:
// const config = { layout: "list" };


















