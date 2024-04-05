


<p>. Write the correct answer from the following options and give an explanation (2-5 lines).</p>

let greeting;
greetign = {};
console.log(greetign);

   
    C: undefined
 <p>  It looks like there is a typo in your code. You have declared a variable called greeting but then assigned an empty object to a variable called greetign. Because of the typo in the variable name, when you try to log greetign, it will result in undefined because greetign is not defined </p>


<p> Write the correct answer from the following options and give an explanation (2-5 lines).</p>

function sum(a, b) {
  return a + b;
}

sum(1, "2");

   
   
    C: "12"
 <p>  the sum function takes two parameters a and b and returns the result of adding them together. However, when you call sum(1, "2"), you are passing a number (1) as the first argument and a string ("2") as the second argumen </p>

 
<p> Write the correct answer from the following options and give an explanation (2-5 lines). </p>

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

    A: ['🍕', '🍫', '🥑', '🍔']
  
 <p> However, modifying info.favoriteFood does not have any impact on the food array because info.favoriteFood is a separate variable that holds a copy of the string "🍕" initially. Changing the value of info.favoriteFood does not affect the original array or any of its elements </p>


<p> Write the correct answer from the following options and give an explanation (2-5 lines).</p>

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

    A: Hi there,
   <p> In the sayHi function, you have defined a single parameter name, which is used to create a greeting string. However, when you call sayHi() without providing any arguments, it will result in an error because the function expects an argument for the name parameter </p>

<p> Write the correct answer from the following options and give an explanation (2-5 lines).</p>

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

    C: 3
 <p>     num is 0. In JavaScript, 0 is considered falsy, so the condition if (num) evaluates to false, and count remains 0.

    num is 1. 1 is a truthy value, so the condition if (num) evaluates to true, and count is incremented by 1. Now count is 1.

    num is 2. 2 is also a truthy value, so count is incremented by 1 again. Now count is 2.

    num is 3. 3 is also a truthy value, so count is incremented by 1 again. Now count is 3. </p>
   
