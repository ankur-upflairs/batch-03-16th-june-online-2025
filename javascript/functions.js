// function is a block of code that can be reused
//normal fn , fn expression , arrow functions
// normal fn 
// function sum(a, b){
//         // console.log(a+b)
//         return a+b 
// }
// let a = sum(45,23)
// console.log(a)

//function expression 
// let sum = function(a,b){
//     return a+b 
// }
// console.log(sum(2,3))
//arrow fn 
// let cube = (a)=>{return a**3}
//single argument- remove ()
//single statement -remove {} and return
// let cube = a=>a**3
// call back function => fn that passed as an argument in a function and call inside it
// function bankInterest(fnc , p , t ){
//     let r = fnc(p)
//     let i = (p*t*r) / 100
//     return i
// }
// let bob = p=>{
//     return p > 100000 ? 10 : 8
// } 
// console.log(bankInterest(bob,100,1))
// console.log(bankInterest(x=>x>100?10:5 ,100 , 1))




