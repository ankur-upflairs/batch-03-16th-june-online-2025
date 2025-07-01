//to repeat(iterate ) a blocck of code than we use loops
//start , end (condition) , update 

//while , do-while , for 
// let i =1
// while(i < 11){
//     //code
//     console.log(i)
//     i++
// }

// for(let i = 10 ; i > 0 ; i-- ){
//     console.log(i)
// }

// 5! => 5*4*3*2*1 
// let n = 5
// let fact = 1
// for(let i =1 ; i<=n ; i++){
//     fact = fact * i
// }
// console.log(fact)

// let i =100;
// do{
//     console.log(i)
//     i--
// }while(i >= 1)
//break - exit loops
//continue - go to next iteration 

// for(let i =1 ; i<=30 ; i++){
//     if(i%3==0) continue
//     console.log(i)
// }
for(let i =1 ; i<=10; i++){
    if(i%7==0) break
    console.log(i)
}

/*
Print numbers from 1 to 10 using a for loop.

Print numbers from 10 to 1 using a while loop.

Print even numbers between 1 and 20 using a loop.

Print odd numbers from 1 to 30 using a for loop.

Print all numbers divisible by 5 from 1 to 50.

➕ Sum, Product, and Math Logic
Find the sum of numbers from 1 to 100.

Find the product (multiplication) of numbers from 1 to 10.

Print the multiplication table of 7 (from 7×1 to 7×10).

Count how many numbers between 1 and 50 are divisible by 3.

Find the factorial of a number using a loop (e.g., 5! = 120).

🧠 Conditional + Loops
Print numbers from 1 to 20, but skip multiples of 4 using continue.

Print numbers from 1 to 20, but stop when the number is 13 using break.

Check if a number is prime using a loop.

Print all squares of numbers from 1 to 10.
(i.e., 1², 2², 3²…)

Reverse a number using a loop (e.g., input: 123, output: 321).
Use nested for loops to print a 3x3 grid of stars (*).

Create a triangle pattern of # using nested loops.
Example:

#
##
###
🔁 Conditionals inside Loops
Print numbers from 1 to 30, but skip multiples of 3 using continue.

Print numbers from 1 to 10, but stop when the number is 7 using break.
*/
// Reverse a number using a loop (e.g., input: 123, output: 321).


while(n > 0){
    d = n % 10
    n= parseInt(n/10)
    r = d *10 +d 
}





