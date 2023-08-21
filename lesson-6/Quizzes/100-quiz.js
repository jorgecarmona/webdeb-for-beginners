/*
JavaScript Quiz

Directions: Uncomment the // console.log() lines one at a time as you are working on the quiz so you don't see any errors.

Hint: If you want to print the test results on your terminal, you can do it by using node
Example to see the answers in your terminal. 

Open terminal and type:
node /path/to/100-quiz.js
*/

/* Questions */

/*
==========================
 Primitives
===========================
*/
// 1. Create a variable named `adds` of type const where the numbers 2 and 20 are added using the addition operator

// console.log("[Question #1]: ", adds); // should print 22

// 2. Declare a variable named 'stringVar' of type let and assign it a value of "Hello".

// console.log("[Question #2]: ", stringVar); // should print Hello

// 3. Create a constant named 'numberVar' with a value of 5.

// console.log("[Question #3]: ", numberVar); // should print 5

// 4. Let 'booleanVar' be a variable that holds the value false.

// console.log("[Question #4]: ", booleanVar); // should print true or false

/*
==========================
 Object
===========================
*/
// 5. Create an object named 'student' with keys 'name' and 'age' having values 'John' and 20 respectively.

// 6. Access the 'name' property of the 'student' object and store it in a variable named 'studentName'.

// console.log("[Question #6]: ", studentName); // should print John

// 7. Add a new property 'grade' to 'student' and set its value to 'A'.

/*
==========================
 Array
===========================
*/
// 8. Declare an array named 'fruits' with values 'apple', 'banana', and 'cherry'.

// 9. Access the second element of 'fruits' and store it in a variable named 'secondFruit'.

// console.log("[Question #9]: ", secondFruit); // should print banana

// 10. Add 'orange' to the end of the 'fruits' array.

/*
==========================
 let and const
===========================
*/
// 11. Create a variable of type let named 'temperature' and assign it a value of 25.

// console.log('[Question #11]: ', temperature); // should print 25

// 12. Change the value of 'temperature' to 30. Print a console again.

// console.log('[Question #12]: ', temperature); // should print 30

/*
==========================
 If Statements
===========================
*/
// 13. Write an if statement that checks if 'temperature' is greater than 28 and logs "It's hot!" to the console.

// 14. Extend the previous if statement to check if 'temperature' is less than 15 and logs "It's cold!" to the console.

// Math Operators
// 15. Declare a constant named 'product' which is the result of multiplying 5 and 7.

// console.log('[Question #15]: ', product); // should print 35

// 16. Create a variable 'remainder' which stores the remainder when 15 is divided by 4.

// console.log('[Question #16]: ', remainder); // should print 3

// Comparative Operators
// 17. Check if 'numberVar' is equal to 5 using the strict equality operator.

// console.log('[Question #17]: ', remainder); // should print true

// 18. Check if 'stringVar' is not equal to "Hello World".

// console.log("[Question #18]: ", variableHere); // should print true

// Logical Operators
// 19. Check if 'temperature' is less than 5 or greater than 29.

// console.log("[Question #19]: ", variableHere); // should print true

// 20. Confirm that 'stringVar' is "Hello" and 'numberVar' is not 6.

// console.log("[Question #20]: ", variableHere); // should print true

// Assignment Operators
// 21. Add 10 to 'temperature' using the += assignment operator.

// console.log("[Question #21]: ", temperature); // should print 40

// 22. Subtract 5 from 'temperature' using the -= operator.

// console.log("[Question #22]: ", temperature); // should print 35

// 23. Multiply 'temperature' by 2 using the *= operator.

// console.log("[Question #23]: ", typeHere); // should print 80

// 24. Divide 'temperature' by 5 using the /= operator.

// console.log("[Question #24]: ", typeHere); // should print 16

// More Questions
// 25. Check if the type of 'stringVar' is "string".

// console.log("[Question #25]: ", typeHere); // should print true

// 26. Compare the values of 'numberVar' and the string "5" using the loose equality operator.

// console.log("[Question #26]: ", typeHere); // should print true

// 27. Declare an array named 'colors' and push 'red' and 'blue' into it.

// console.log("[Question #27]: ", colors); // should print array with red and blue

// 28. Remove the last element from 'fruits' array.

// console.log("[Question #28]: ", fruits); // should print [ 'apple', 'banana', 'cherry' ]

// 29. Check if 'numberVar' is greater than or equal to 5.

// console.log("[Question #29]: ", typeHere); // should print true

// 30. Determine if the length of 'stringVar' is strictly equal to 5.

// console.log("[Question #30]: ", typeHere); // should print true

// 31. Use the modulo operator to determine if 10 is even.

// console.log("[Question #31]: ", typeHere); // should print true

// 32. Create a variable 'result' and assign it the result of 10 raised to the power of 3.

// console.log("[Question #32]: ", result); // should print 1000

// 33. Compare the value of 'stringVar' to the string "hello" in a case insensitive manner.

// console.log("[Question #33]: ", typeHere); // should print true

// 34. Check if 'booleanVar' is truthy.

// console.log("[Question #34]: ", typeHere); // should print falsey

// 35. Log the opposite value of 'booleanVar' to the console using the NOT operator.

// console.log("[Question #35]: ", typeHere); // should print opposite

// 36. Check if 'fruits' array contains more than 3 elements.

// console.log("[Question #36]: ", typeHere); // should print true if it does, false if it does not

// 37. Create an object named 'car' with keys 'make' and 'model'.

// console.log("[Question #37]: ", typeHere); // should print object with above structure and keys with empty strings

// 38. Change the 'make' property of 'car' to 'Toyota'.

// console.log("[Question #38]: ", typeHere); / should print object with make key = Toyota

// 39. Declare a variable named 'isRainy' and assign it a boolean value based on if 'temperature' is less than 20.

// console.log("[Question #39]: ", isRainy); // should print true

// 40. Write an if statement that checks if 'numberVar' is even.

// 41. Check if both 'numberVar' is less than 10 and 'temperature' is greater than 20.

// console.log("[Question #41]: ", variable-or-expression); // should print false

// 42. Use the ternary operator to assign "cold" or "warm" to a variable 'weather' based if 'temperature' is less than 16 celsius.

// console.log("[Question #42]: ", weather); // should print warm

// 43. Check if 'fruits' includes 'banana'.

// console.log("[Question #43]: ", typeHere); // should print warm

// 44. Check if the value of 'numberVar' is between 4 and 6.

// console.log("[Question #44]: ", variable-or-expression); // should print true

// 45. Declare a variable named 'divided' which is the result of dividing 100 by 'numberVar'.

// console.log("[Question #45]: ", divided); // should print 20

// 46. Check if 'stringVar' starts with the letter "H".

// console.log("[Question #46]: ", variable-or-expression); // should print true

// 47. Declare a variable 'squared' and assign it the result of squaring 'numberVar'.

// console.log("[Question #47]: ", squared); // should print 25

// 48. Find out if 'stringVar' ends with the letter "o".

// console.log("[Question #48]: ", variable-or-expression); // should print true

// 49. Use the remainder operator to determine if 'numberVar' is odd.

// console.log("[Question #49]: ", variable-or-expression); // should print true

// 50. Write an if-else statement that checks if 'temperature' is above 25, logs "Too hot!", otherwise logs "Just right!".

// console.log("[Question #50]: ", variable-or-expression); // should print Just right!
