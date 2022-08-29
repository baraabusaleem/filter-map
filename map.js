/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
array=[4, 10, 200]
const newArray= array.map(myfunction) 

function myfunction(num){
    return num*2
}
console.log(newArray)


 /* Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
 /* Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/
const array1=[2, 5, 100]
const newArray1= array1.map(stringFunction)

function stringFunction(num){
    
        return `${num}`
    
}
console.log(newArray1)

/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
// function namesOnly(arr) {
//     return arr.map(i => i.name);
//   }
//   var res = namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80
//     },
//     {
//       name: "Eric Jones",
//       age: 2
//     },
//     {
//       name: "Paris Hilton",
//       age: 5
//     },
//     {
//       name: "Kayne West",
//       age: 16
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
//     }
//   ])
//   console.log(res);


/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 * 
 */


var array10 = ([
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
    },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
    },
    {
      name: "Bob Ziroll",
      age: 100
    }
  ])
  function makeStrings(array10){
    let strings=array10.map(function (string){
     if (string.age >=18){
      return string.name+'can go to the Matrix'
     }
     else {
      return string.name+' is under age!!'

     }
    }
    )
  }
console.log(makeStrings(array10))
/* Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */

// function readyToPutInTheDOM(arr) {
//     arr.map(c=> {
//        document.write("<h1>" + c.name + "</h1>");
//        document.write("<h2>" + c.age+ "</h2>");
//     });
    
//     arr.forEach(c=> {
//        document.write("<h1>" + c.name + "</h1>");
//        document.write("<h2>" + c.age+ "</h2>");
//     });
//   }
  
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80
//     },
//     {
//       name: "Eric Jones",
//       age: 2
//     },
//     {
//       name: "Paris Hilton",
//       age: 5
//     },
//     {
//       name: "Kayne West",
//       age: 16
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
//     }
//   ]) 




/* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
array2=[2,-4,-6]
const newArray2= array2.map(myfunction2) 

function myfunction2(num){
    return num*2
}
console.log(newArray2)






  /* Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */

  function valTimesIndex(array4){
    return array4.map(function(value,index,array){
      return value*index;
  });   
}
let array4=[1,2,3]
console.log(valTimesIndex(array4))




  /* Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */
  function extractKey(array5, key){
    return array5.map(function(value,index,array){
         return value[key];
     });   
 }
 array5=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
 console.log(extractKey(array5, 'name'))
 
 



  /* Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
  function extractFullName(array7){
    return array7.map(function(value,index,array){
  return value.first+" "+value.last;
});   
}
array7= [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]

console.log(extractFullName(array7))





//Filter 10 - 15 you should use Array.prototype.filter
/*
10
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
array8= [1,8,6,4]
const even = array8.filter(number => {
    return number % 2 === 0;
  });
  
  console.log(even); 
  

/*
11
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4
Ex: multiFour([1,8,6,4]) => [8,4]
*/
var arr = [1,8,6,4];
var multiFour = arr.map(function(item) {
    if (item%4==0){
   return item ;
    }
   
});
console.log(multiFour);



/*
12
**this question not that easy mybe you will need to use two function inside each other
Create a function called containChar
that accept an array of string
and return an array of these string that contain this char
Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr, str) {
  return arr.filter(a => {
    if (a[0] == str) {
      return a;
    }
  });
}
console.log(containChar(["hello", "world","wing","web","rewind"], "w"));

function evenIndexOddLength(arr) {
  return arr.filter((n, i) => {
    if (n.length % 2 == 1 && i % 2 == 0) {
      return n;
    }
  });
}

//use indexOf (it returns position of substring or -1 if not found)


/*
13
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
evenodd=[]
function evenIndexOddLength(strings){
    for (i=0; i<strings.length; i++){
        if (i%2==0 && strings[i].length%2==1){
            console.log(strings[i])
        }

    }
}
evenIndexOddLength(strings)


/*
14
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number
Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
persons = [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]

function olderThan(persons,ageNum){
    if (persons[0].age >ageNum){
        console.log(persons)
        }

}
olderThan(persons,56)




/*
15
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function printStringArray(strings){
    return strings.filter((str) => str.length <= 5 || str.startsWith('e'));
  }
  
  console.log(printStringArray(["alex","merceh","madrasa","rashed2","emad","hala"]));





var stringArray = new Array('10','9','3','4','5','6','7','8','2','1');

var intArray = stringArray.map(Number);

var second = intArray.sort(function(a,b){return b-a})[1]; 

console.log(second)