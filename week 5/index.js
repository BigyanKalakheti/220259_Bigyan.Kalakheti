function hi(){
    document.getElementById("hi").innerHTML= "hello";
    alert("you clicked the button")

}

// var number= prompt("enter a number")
// const result = (number>0)?"positive":"negative"
// document.write(result)

// var i =5;
// for(var i= 0; i<10; i++){
//     // console.log("inside i loop",i)
// }
// console.log(i);

// let j =5;
// for(let j= 0; j<10; j++){
//     // console.log("inside j loop",j)
// }
// console.log(j);

// console.log(`${i}`)


// let myString = "hi my name is bigyan"
// for(x in myString){
//     console.log(myString[x]);
// }

element = 1
let x=Math.round(Math.random() * 10);
console.log(x);
for (let index = 1; index <= x; index++) {
    element = element * index;
    
}
console.log(element);