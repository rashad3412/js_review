- Adding Javascript file to html page so it can show in console and interact with the webpage.

  - <script src="name of file"> <script>

- Value

  - smalled unit of information that will have in JS you can store values in varible.

- Varible

  - A varible is a container that holds values. Ex.. If you have a bucket of Food the food is the container(varible)
    if you have Apples, oranges and peaches in the container(varible) the food inside of the the container are your values(Apple, Oranges, and Peaches)

- Primitive Data Types

  - Number data type: use Float number or Decimals
  - String data type: Used for text always put in ""
  - Boolean data type: Logical type that can only be true or false Used for making decisions.
  - Undefined data type: Value taken by a varible that is not yet defined
  - null data type: Also means empty value

- Type Of

  - type of shows what type of value of a operator is ex typeof(true) will return a Boolean value. Another ex typeof("Rashad") will return String.

- Undefined

  - Undefined is a varible that is empty. ex container(varible) of food does not have any food in it(value)

- Operators in JS

  - Arithmetic + - += -=

  - comparison 10 > 20 this is saying is 10 greater than 20 it will be false... 10 >= 20 This is saying is 10 greater than or equal to 20 this will be false,

- Operator Precedence

  - This shows you how your code will work based on how you use operators in JS ex (10 >(<---- Greater than operator) 20) the precedence of this operator goes left-to-right. Meaning each time you use these types of operators if will always precede left-to-right. Check MDN for more information.

- Template Literals

  - Using the back ticks `${} <----- another name for place holders ` to tell JS we are using varibles to insert information together. you can use backticks `for regular strings as well.`
    can use `Back ticks to make multi-line strings as well putting strings on a new line.`

- If Statements
  - If statements are created using if() {} <--- followed by paratheses. Than after the paratheses you use curly braces.
    Also called an controlled structure because it controls the way the code works.
- You can use an else block as well ex
  if (ex){ <--- this entire if statement is an (ex) of code block..
  code here...
  } else{
  code here..
  } elif {
  code here..
  } elif {
  code here ...
  }

  - Your if statements is the logic in your code. If statements should desrcibe what you are trying to do with your code.

- Type Conversion and Coercion
  - This is when you convert strings to numbers when you manually convert one type of a primitive data types to another ex("1991" which is a string) you can use (Number(1991) to convert it to a number)
- Coercion

  - is JS converting types on its own if you concate strings and numbers together JS will automcatically convert it. Im + 23 + years.

- Falsey Values

  - 0, "", undefined, null, NAN

- Equality Operators

  - Comparison operator === three equal is strick it only returns true when both values are equal. 18 === 18 true same number
  - Comparisons == two equal signs performs type conversion. "18" and 18 will be true because its a loose eqaulity operator. Avoid loose equality operator as much.

- Prompt
  - Prompt is an input method for javascript it will display an input box on the webpage for an user to input information and you will need to store it in a varible to console log it.
- Not Equal !==

  - You will use the Not Equal Operator for comparing values that are not equal to each other.

- Basic Boolean Logic

  - And | or | Not

- Switch Statment

  - Switch statement is a strick statement using equality operators like ===... for ex(Monday and Tuesday) if you have a switch statement and the (case <---- another name for value) is Monday, the task for Monday will be posted. If you have a (case <----- another name for value in switch statement) for Tuesday the task for Tuesday will be posted.

- Teranry Operator

  - When you use the ? operator. Remember this is in three parts and one line of code. You have the conditional statement ex(4 >(greater than sign) 10) ? (after the question mark is the expression) "yes"(<---- this is the truthy value) : "no"(<---- This is the falsey value); this is sometimes used to replace if(statment)

- Functions

  - are used to create a block of code you are going to resuse. functions can also contain varibles inside of them. That will eventually hold a value. ex
    Fucntion typeOfFodd(meat,starch){ <----- parameters(varibles)
    const food = `${meat} and ${starch}` <----- when function invoke it stores the values..
    return food
    }
    typeOfFood(chicken, potatoes) <---- arguements(values)

  well will be logged in the console is (chicken and potatoes)

- Additonal to functions

  - Arguments are the placeholders inside of the function for ex function Rashad (myName)

  <-- this is an Arguments.
  when you invoke the function ex console.log(Rashad(1)) <----- the 1 is a parameter.

- functions are a value and you can store them in a varible

- Arrow functions

  - arrow functions can be used to write one line of code if applicable ex
    const age = (birthYear) => 2050 - birthYear; <----- arrow func on one line
    const ageYear = age(1993);
    console.log(ageYear);
    will return 57

    - const yearsUntilRetirement = birthYear => () { <--- multiline
      arrowfunc
      const age = 2037 - birthYear
      const retirement = 65 - age;
      return retirement
      }
      console.log(yearsUntilRetirement)

      yearsUntilRetirement - is the name of the function
      () - used for the parameters if applicable. - only defined in () parathenses this.
      birthYear - is the ia the name of the expression
      {}inside the curly braces is the block of code for the expressiong better known as statement.
      age - is a varible storing the value of birthYear
      retirement - is a varible storing the value of retirement age
      return - is returning the statement(retirement age.)
      console.log(yearsUntilRetirement) - calling the functions

- Arrays

  - Primitive values are immutable ex(strings, booleans, numbers)
  - An array is a list of values that you can change.
  - You can also add expressions to an Array ex(2023-1993,"rashad","age").

- Array methods

  - You us [] brackets to defined an Array
  - Push: is a function that adds an element to the end of the array.
  - Unshift: is a function will add element to beginning of the array.
  - Pop: will remove the last element of the array.
  - Shift: will remove the first element of the array.
  - indexOf: will show you the position of an element
  - includes: will show if the element is in the array.

- Objects

  - For objects you will use {} curly braces to define a new object.
  - Objects have key value pairs. Each key is called a property.
  - Using curly braces to create Objects are called an Object literal because you are literally writing an Object

- Data in Objects

  - Dot notation: using dot notation to get an property from an object. The . is an operator. ex---console.log(rashad.firstname)
    you must use the real property name ex(firstname)
  - Brackets: You can use bracket notation ex---console.log(rashad["firstname"]) in the square brackets you can add anything in the expression. and you can use the computed name and not just the property name. ex(first instead of the full property name firstname)
  - Using the . and bracket to get a property from the object is called an expression.
  - undefined is something we get on an object when a property does not exist.
  - you can add many different data types to objects ex(booleans,strings,numbers ext..)

- Objects

  - Objects are evaluated in JS when using bracket method if you are using the prompt function.

- Object Methods

  - you can add an function to an object, when using a function in an object you do not need the = sign because it does not need to be stored in a varible. However you will need a colon: ex
    calcAge: function(birthYear){ <---- the calcAge: is a key/property of the object.
    return birth year.
    }
    - any function in an object is called an Method.
    - you can use the this keyword to get any property from an Object with an function that is in the object.
    - you can use console.table for object to see it nicely formatted with the index and value. or key value pairs

- Loops
  - loops keeps while running while the condition is true..
    for (let rep = 1; rep <= 10; rep ++ ) {
    console.log("running laps")
    }
- for loops are in three parts initialize(expression) ; condition(value) ; statement.
- When looping through an array always start with 0 because its the first number started in an array.

- More Loops

  - for (counter, condition, updating the counter(to log all the elements))

- looping backwards:
  for(let i = ex.length; i >= 0; i --){
  console.log(ex)
  }

  - Loop within a Loop
    - for(let i = ex.length; i >= 0; i --){
      console.log(ex) <--- This will be on top of bottom loops
      for(let i = ex.length; i >= 0; i --){
      console.log(ex)
      }}

- expressions

  - can use a varible declaration ex(const = 4 + 2) or can be used without a varible declaration(4+2). But an expression evaluates to something of value.

- codition

  - a condition is used to determine if a expression is true or false. Basically code logic ex(2 === 2): true.

- statement

  - telling your expressions or condition to do something. ex if(){
    everything in the code block is an statement.
    }

- While
  let ex = 1

  - while (ex <= 0) {
    console.log("ex)
    rep++
    }
  - all while loops need is a condition to stay true than it will break.

  let dice = math.trunc(math.random())_ 6 + 1
  while (!= 6){
  console.log("You rolled a ${dice})
  dice = math.trunc(math.random() _ 6 + 1)
  }

- Being a problem solver as a coder

  - Ask yourself about the questions. Does it take numbers,strings, arrays?
  - Ask your self what should be returned when you are going through the question of the problem?
  - How to recognize if the argument is a number, string,or array.
  - Learn to break the problems down in chucks so you can understand what is being asked of you.

- Breaking up the problem in Sub-problems

  - Ask yourself what question can you research within the problem

- Debugging
  - software bug is a problem in the program.
  - be aware that it is a bug.
  - try to identify bugs before production.
  - isolate wear the bug is happening
  - Use google chrome for debugging tool
