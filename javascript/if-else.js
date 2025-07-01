var prompt = require('prompt-sync')();

// let age = 3
// if(age > 18){
//     console.log('adult')
// }
// else{
//     console.log('minor')
// }

//question find out given no is negetive , positive or zero
// let n = -23;
// let n = prompt('enter a no. :- ')
// n = parseInt(n)

// let n = parseInt(prompt('enter a no. : - '))

// if(n > 0){
//     console.log('n is positive')
// }
// else if(n == 0){
//     console.log('n is zero')
// }
// else if(n < 0){
//     console.log('n is negetive')
// }
// else{
//     console.log('no condition match')
// }
//take a no from user and print day name 1 - monday, 2 - tuesday
// let n = parseInt(prompt('enter a no. b/w 1- 7 : '))
// switch (n) {
//     case 1:
//         console.log('monday')
//         break;
//     case 2:
//         console.log('tuesday')        
//         break;
//     case 3:
//         console.log('wed')        
//         break;
//     case 4:
//         console.log('thurs')        
//         break
//     case 5:
//         console.log('friday')        
//         break;
//     case 6:
//         console.log('saturday')        
//         break;
//     case 7:
//         console.log('sunday')        
//         break;
//     default:
//         console.log('no case matach')
//         break;
// }
//ternary operator => if -else short hand

// condition ? statement 1 : statement 2 
// let n = parseInt(prompt('enter a no. : '))

// n>=0 ? console.log('positive') : console.log('negetive')

/*
Check Even or Odd:
Write a program that takes a number as input and checks whether it is even or odd using if-else.

Positive, Negative, or Zero:
Write a program that takes a number as input and determines if it is positive, negative, or zero.

Greatest of Two Numbers:
Write a program that takes two numbers and prints which one is greater using if-else.

Voting Eligibility:
Write a program that takes age as input and checks if the person is eligible to vote (age ≥ 18).

Check Divisibility:
Write a program that takes a number and checks whether it is divisible by 5 and 11.

Check Leap Year:
Write a program that takes a year as input and checks if it is a leap year.

Pass or Fail:
Write a program that takes marks as input and checks if the student passed (passing marks: 33 or above).

Check Alphabet Case:
Write a program that takes a single character input and checks whether it is uppercase or lowercase.

Day of the Week:
Write a program that takes a number (1 to 7) and prints the corresponding day of the week using if-else.

Check Character Type:
Write a program that takes a character and checks if it is an alphabet, digit, or special character.

*/
//divisibility by 5 and 11
// let y = parseInt(prompt('enter a no :  '))
// if(y%5 == 0 && y%11 == 0){
//     console.log('divide')
// }
// else{
//     console.log('not divide')
// }

// Input marks in 5 subjects, calculate the average and print grade using if-else.
// let n1=parseInt(prompt('enter marks of subject 1 : '))
// let n2=parseInt(prompt('enter marks of subject 2 : '))
// let n3=parseInt(prompt('enter marks of subject 3 : '))
// let n4=parseInt(prompt('enter marks of subject 4 : '))
// let n5=parseInt(prompt('enter marks of subject 5 : '))

// let average = (n1+n2+n3+n4+n5) / 5

// if(average > 80 && average <= 100){
//     console.log('grade A')
// }else if(average > 50 && average <= 80){
//     console.log('grade B')
// }
// else if(average > 0 && average <= 50){
//     console.log('grade C')
// }
// else {
//     console.log('wrong marks ')
// }

// if(year % 400 == 0){}//yeap year
// else if (year % 100 == 0){} // not leap year
// else if (year % 4 == 0 ){} //leap year