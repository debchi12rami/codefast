  
  // javascript arrays
  const fruits = ["apple", "Banana" , "Srawberry"]
  fruits[0] = "watermelon"
  console.log(fruits[0])

  console.log(fruits.length)

  fruits.push("grape")
  console.log(fruits.length)

  fruits.pop()
  console.log(fruits.length)

  fruits.forEach((fruits) => {
    console.log(fruits);
  })

  const fruitsEmojis = fruits.map((fruit) => {
    return `i love ${fruit}`
  });

  const fruitsWithoutBanana = fruits.filter((fruit) => {
    if(fruit !== "Banana"){
      return true;
    }
  });

  const stuff = [
    "apple" ,
    23,
    {name: "marc" , age: 23 , city: "bali"},
    false,
    ["watermelon" , "Strawberry"]
  ]



//   the eternary operator
   canvotee = age >= 19 ? "yes" : "no";
  let canvote;
  if(age >= 19){
    canvote = "yes"
  }
  canvote = "no"

  const greting1 = "hello" + name;
  console.log(greting1);

  const greting2 = `hello ${name}`;
  console.log(greting2);

  const greeting3 = `hello ${isLoggedIn ? name : "there"}`;
  console.log(greeting3)


 // OR || Operator
 // AND && Operator

const hasMap = 99;
const hasCompass = false;

const isReady = hasMap && hasCompass; // true if either is true
console.log(`Is ready: ${isReady}`); // Output: Is ready: true

if (hasMap || hasCompass) {
  console.log("You can navigate!");
} else{
  console.log("You need both a map and a compass to navigate successfully.");
}


// FALSY: hasMap =
// 0, "", null, undefined, NaN, false

// TRUTHY: hasMap
//Anything Else

