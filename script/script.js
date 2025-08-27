//part one: Mastering JS basics
let num1 = 20
let num2 = 3

if(num1 % num2 !== 0){
    console.log(num2, "is an odd number")
}else{
    console.log(num2, "is an even number")
}

//❤️ Part 2: JavaScript Functions — The Heart of Reusability
let markedPrice = 1200
let percentageDiscount = 8

let sellingPrice = () => {
    return markedPrice -((percentageDiscount / 100) * markedPrice)
}
console.log(sellingPrice())

// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!
//use of for...of loop
const emojis = ["😎","😂","💕","😘","❤️"]
for(let emoji of emojis){
    console.log("I Love " + emoji + " Emoji")
}
//use of for...in loop
const person = {name : "Phares", age : "22", career: "Student at PLP"}
for(let key in person){
    console.log(key + " : " + person[key])
}

//🌐 Part 4: Mastering the DOM with JavaScript
function manipulate(){
    let btn = document.getElementById("btn")
    btn.style.display = "none"

    let header3 = document.querySelector(".head")
    header3.textContent = "I'm Already Doing Wonders in DOM"
    let title = document.getElementById("ttl")
    title.textContent = "Hello!"
    title.style.textAlign = "center"
    title.style.color = "white"
    title.style.backgroundColor = "grey"
}

const list = document.getElementById("lists");
const add = document.getElementById("add")

add.addEventListener("click", () =>{
    const newSkill = document.createElement("li");
    newSkill.textContent = "Software Development"
    list.appendChild(newSkill);
    add.style.display = "none"
})