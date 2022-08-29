// // var name="orange";
// // console.log(typeof name);

// // var num= 359;
// // console.log(typeof num);

// // // console.log(typeof function);


// // var array=[0,2,5];
// // console.log(typeof array);


// // var text="3955";
// // console.log(typeof text);

// // console.log(typeof true);

// // var x=5;
// // var x=7;
// // console.log(x);

// // // let z=5;
// // // let z=7;
// // // console.log(z);

// // console.log("bara");
// // console.log('bara');
// // console.log(`bara`);



// // // var something [ 1181 ,255,709];
// // // console.log(something[1]);

// // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log( fruits[fruits.length-1]);


// // var fruits = ["Banana", "Orange", "Apple", "Mango"];
// // var fruit = fruits[fruits.length - 2];
// // console.log(fruit);

// // console.log(7e-5);

// // let snack=["Chips", "chocolate", "gum"];
// // console.log(snack[2])
// // console.log(snack)

// // // let snacks=new Array["Chips", "chocolate", "gum"];
// // // console.log(snacks[0])

// // let governorates={
// //     north:"Irbid",
// //     center:["Amman","Al-Salt","Zarqa"],
// //     south:"Aqaba"
// // }
// // console.log(governorates.center[1])
// // console.log(governorates.center)
// // console.log(fruits[fruits.length-1])



// // const cities=["Amman","Whashington","paris","Rome"]
// // document.getElementById("demo").innerHTML=cities

// // function citiesfunction() {
// //     cities.push("Cairo");
// //     document.getElementById("demo").innerHTML = cities;
// //   }

// // console.log(cities.join(" * "))
// // cities.pop()
// // console.log(cities)
// // cities.push="NewYork"
// // console.log(cities)
// // console.log(cities.join("*"))
// // cities.shift()
// // console.log(cities)
// // cities.splice(2,0,"Juresulem", "Narway")
// // console.log(cities)


// // let c = 5;
// // let b = 2;
// // let n= c * b;
// // console.log(n)
// // console.log(c+=b)
// // console.log(c%b)


// // function myFunction(p1, p2) {
// //     return p1 * p2;
// //   }
// //  console.log( myFunction(4, 3));
// //  console.log( myFunction(10, 5));



// //  function toCelsius(x) {
// //     return (5/9) * (x-32);
// //   }
// //  console.log( toCelsius(60));
  



// // const d = new Date();
// // console.log(d) ;



// // // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// // // var today  = new Date();

// // // console.log(today.toshortd("en-US")); 

// // function textexample(b){
    
// //     console.log( "Hi my name is "+b);
// // }
// // textexample("Amani")






// // function double(h){
// //     return h*2
// // }

// // console.log(double(100))


// // let mark=73
// // switch (true) {
// //     case mark>=95 && mark<=100:
// //       console.log( "A")
// //       break;

// //     case mark>=85 && mark<=94:
// //         console.log( "B")
// //         break;

// //      case mark>=70 && mark<=84:
// //       console.log( "C")

// //       break;

// //     case mark>=50 && mark<=70:
        
// //         console.log( "D")
// //         break;

// //     case mark>=0 && mark<=50:
// //          console.log( "F")
// //          break;
        
    
// // }  


// // let lunch=["mansaf",'Shawerma','kabseh']
// // for(let i=0; i<lunch.length; i++){
// //     console.log(lunch[i])
// // }



// // const person = {fname:"bara", lname:"Abusaleem", age:23}; 

// // for (x in person){
// //     console.log(person[x])
// // }



// const numbers1 = [45, 4, 9, 16, 25];

// let txt = "";
// numbers1.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value, index, array) {
//   txt += value + "<br>"; 
// }



// let language = "JavaScript";

// let text = "";
// for (let x of language) {
//   console.log(x)
// }



// let i=0
// while (i<5){
//     console.log("the number is"+i)
//     i++
// }


// // let mark=98
// // while (mark>=95){
// //   console.log("A")
// // }

// let snack=["Chips", "chocolate", "gum"];
// snack.push("candy")
// snack.unshift("candy bear","Coke")
// snack.shift()
// snack.pop()
// console.log(snack)




// let h=0
// do{
//     console.log(h)
//     h++
// }while(i<-2)

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
evens=[]
function evenNumberEvenIndex(nums){
    for (i=0; i<nums.length; i++){
        if (nums[i]%2==0 && i%2==0){
            evens[i]=nums[i]
        }
        else{
            nums.splice(i, 0);
            i--
        }
    }
}
evenNumberEvenIndex(nums)
console.log(evens)