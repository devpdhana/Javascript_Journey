// // console.log("Welcome yours");

// // //String property
// // const myName = "Dhanasekar";
// // console.log(myName.length);

// // //String methods
// // console.log(myName.charAt(9));
// // console.log(myName.indexOf("ar"));
// // console.log(myName.lastIndexOf("a"));
// // console.log(myName.slice(0,5));
// // console.log(myName.includes("sekar"));
// // console.log(myName.split("se"));
// // console.log(myName.toUpperCase());
// // console.log(myName.toLowerCase());

// //Numbers

// const myNumber = "10.069aban";
// const mySecondnumber = 10.0;
// console.log(myNumber === mySecondnumber);
// console.log(Number(myNumber === mySecondnumber));

// //Number methods

// console.log(Number.isInteger(10));
// console.log(Number.parseFloat(myNumber));
// console.log(Number.parseFloat(myNumber).toFixed(2));
// console.log(Number.parseInt(myNumber));
// console.log(mySecondnumber.toString())

// isNaN();
// Number.isNaN();
// console.log(isNaN("dhana"));
// console.log(Number.isNaN("dhana"));


// //Math

// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(Math.PI));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.8));
// console.log(Math.floor(Math.random()*10)+1);

// //chellenge
// const myName = "Dhanasekar";
// console.log(myName.charAt(Math.floor(Math.random()*10)));


// //IF Statement
// const req = 11;
// let rep;
// if (req >= 18){
//     rep = "Eligible for voting";
// }
// else if (req <= 10 && req <= 1) {
//     rep = "You are child"
// }
// else {
//     rep = "Not eligible for voting";
// }
// console.log(rep);

// //SWITCH Statements
// let player = "stone";
// let computer = "paper";
// switch(player){
//     case computer:
//         console.log("It's a tie!");
//         break;
//     case "sissors":
//         if (computer === "paper"){
//             console.log(`Player win! ${computer}`);   
//         }
//         else {
//             console.log("Computer wins!");
//         }
//         break;
//     case "stone":
//         if (computer === "sissors"){
//             console.log("Player wons!");
//         }
//         else {
//             console.log("Computer wons!");
//         }
//         break;
//     case "paper":
//         if (computer === "sissors"){
//             console.log("computer won!");
//         }
//         else {
//             console.log("Player Won");
//         }
// }

// // console.log('Hi');

// //Ternary operator 

// //Chellange 
// let myPlayer = 'paper';
// let myComputer = 'sissors';
// let respone = myPlayer === myComputer 
//     ? "Tie" 
//     : myPlayer === "stone" && myComputer === "paper" 
//     ? "Computer wons!" 
//     : myPlayer === "paper" && myComputer === "sissors" 
//     ? "computer wons!" : myPlayer === "sissors" &&myComputer==="stone" 
//     ? "Computer wons"  : "Player wons!";

// console.log(respone);

// //USER Input alert,confirm,prompt

// let myData = prompt("Enter your name");
// if (myData) {
//     console.log(myData);
//     myData = myData.trim();
//     console.log(myData.length);
// }
// else {
//     console.log("You didn't enter your name");
// }


// Chellange


// let alertT = confirm("Are you play rock,paper,sisors");
// let computerPlay = (Math.floor(Math.random()*3)+1);
// let computerChoice = computerPlay === 1 ? "rock" : computerPlay ===2 ? "sisors" : "paper";
// if (alertT){
//     let player = prompt("Enter you rock , paper , sisors ");
//     if (player){
//         player = player.trim().toLowerCase();
//         if (player === "rock"){
//             if (computerChoice === player){
//                 alert(`Tie player: ${player}\n computer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//             else if (computerChoice === "paper") {
//                 alert(`Computer wons! player: ${player}\n computer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//             else {
//                 alert(`Player wons! player: ${player}\n computer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//         }
//         else if (player === "paper"){
//             if (computerPlay === 2){
//                 alert(`Tie player: ${player}\ncomputer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//             else if (computerPlay === 1) {
//                 alert(`Player wons! player: ${player}\ncomputer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//             else {
//                 alert(`Computer wons! player: ${player}\ncomputer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//         }
//         else if (player === "sisors"){
//             if (computerPlay === 3){
//                 alert(`Tie player: ${player}\ncomputer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//             else if (computerPlay === 1){
//                 alert(`Computer wons! player: ${player}\n computer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//             else if (computerPlay === 2){
//                 alert(`Player wons! player: ${player}\ncomputer: ${computerChoice}`);
//                 confirm("Play again") ? location.reload() : alert("Thanks for playing...!");
//             }
//         }
//         else {
//             confirm("Please enter correct chooice") ? location.reload() : alert("Thank you for your interest");
//         }
    
//     }
//     else {
//         alert("Thank you for your interest , may be play next time")
//     }
// } 
// else {
//     alert("Thank you for interest"); 
// }

//Loops while,do-while,for,break,continue

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// let count = 0;

// do {
//   console.log("Count: " + count);
//   count++;
// } while (count < 5);


// do {
//     console.log(i);
//     i++;
// }
// while(i>10)


// let name = "dhanasekar";
// for (let i = 0;i < name.length;i++){
//     if (name.charAt(i)== 'a'){
//         continue;
//     }
//     console.log(name.charAt(i));
// }

//Functions 

// let name = "dHanAseKaR";

// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
// }

// console.log(toProperCase(name));

// function getUsername(email){
//     return email.slice(0,email.indexOf("@"));
// }

// console.log(getUsername("dhana@gmail.com"));

//Scope var,let,const => var -> functional scope, let,const -> block scope

// let myName = "dhana";
// const myAge = 21;
// var myTech = "tech";

// function myFunction() {
//     var myAge = 20;
//     console.log(myAge);
//     if (true){
//         var myTech = "AI";
//         var myAge = 19;
//         console.log(myTech);
//     }
//     console.log(myTech);
//     console.log(myAge);
// }
// myFunction();
// console.log(myAge);
// console.log(myTech);


//Arrays

// const array = [];
// array[0] = "dhana";
// array[1] = 21;
// array[2] = true;

// console.log(array);

// //Adding element into an array
// array.push("sekar");
// array.unshift(10);
// console.log(array);

// //Removing element into an array
// array.pop();
// array.shift();
// console.log(array);


// //Join
// const newArray = array.join();
// console.log(newArray);

// const firstarray = newArray.split(',');
// console.log(firstarray);

// //Joining two arrays
// const merregedArray = firstarray.concat(array);
// // const merregedArray = [array,firstarray];
// console.log(merregedArray);

// //Splice
// merregedArray.splice(1,1,"welcome");
// console.log(merregedArray);

// //slice
// const secondArray = merregedArray.slice(1,2);
// console.log(secondArray);

// //Delete
// delete secondArray[0];  
// console.log(secondArray);

// //Multi dimentional arrays
// const arrayIn = ["Html","CSS"];
// const arrayOne = ["AI","ML","Blockchain",arrayIn];
// const arrayTwo = ["Web Development","App Development"];
// const arrayThree = ["IOT","Embeded System"];
// const newFirst = [arrayOne,arrayTwo,arrayThree];
// console.log(newFirst[0][3][1]);

//Chellange

// const play = confirm("Shell we play rock,paper,sicsors");


// if (play){
//     while(play){
//         function playGame(){
//             const userChooice = prompt("Enter rock,paper or sicsors");
//             console.log(userChooice);
    
//             if (userChooice){
//                 const playerChooice = userChooice.trim().toLowerCase();
//                 const machineChooice = Math.floor(Math.random()*3);
//                 console.log(machineChooice);
//                 const chooiceArray = ["rock","paper","sicsor"];
//                 const computerChoice = chooiceArray[machineChooice];
//                 console.log(computerChoice);
//                 console.log(playerChooice);
    
//                 if(playerChooice === "rock"){
//                     if(computerChoice === playerChooice){
//                         alert(`Tie \nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                     else if (computerChoice === "paper"){
//                         alert(`computer wons\nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                     else{
//                         alert(`Player wons\nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                 }
//                 else if(playerChooice === "paper"){
//                     if(computerChoice === playerChooice){
//                         alert(`Tie \nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                     else if (computerChoice === "rock"){
//                         alert(`player wons\nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                     else{
//                         alert(`computer wons\nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                 }
//                 else if(playerChooice === "sicsors"){
//                     if(computerChoice === playerChooice){
//                         alert(`Tie \nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                     else if (computerChoice === "paper"){
//                         alert(`player wons\nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                     else{
//                         alert(`computer wons\nplayer: ${playerChooice}\ncomputer: ${computerChoice}`);
//                         confirm("play again")? playGame() :alert("Thank you!");
//                     }
//                 }
//                 else {
//                     alert("Enter correct chooice!");
//                     confirm("play again")? playGame() :alert("Thank you!");
//                 }
//             }else {
//                 alert("Thank for your interest");
//         }
        
//         }
//         playGame();
//         break;
//     }
// }
// else {
//     alert("May be next time!");
// }


// Chellange using function
// function startGame(){
//     const play = confirm("Shall we play rock,paper,sicsor") ? gamePlay() : alert("May be next time");

// }

// const gamePlay = () =>{
//     while(true){
//         let userChooice = determineUserChooice();
//         if (userChooice === ""){
//             alert("you didn't enter anything");
//             continue;
//         }else if (!userChooice){
//             alert("Thank for your interest");
//             break;
//         }
//         userChooice = validateUserChooice(userChooice);
//         if (!userChooice){
//             alert("you didn't enter rock,paper,sicsors");
//             continue;
//         }
//         const computerChoice = determineComputerChooice();
//         console.log(userChooice,computerChoice);
//         const gameWinner = determineWinner(userChooice,computerChoice);
//         alert(gameWinner);
//         if(playAgain()){
//             continue;
//         }
//         else{
//             break;
//         }
//         break;


//     }
// }

// function validateUserChooice(player) {
//     if (player === "rock" || player === "paper" || player === "sicsors" ){
//         return player;
//     }else {
//         return false;
//     }
// }

// const determineUserChooice = () => {
//     const chooiceUser = prompt("Enter rock,paper,sicsors");
//     if (chooiceUser || chooiceUser === ""){
//         return chooiceUser.trim().toLowerCase();
//     }else {
//         return false;
//     }
    

// }

// function determineComputerChooice(){
//     const computer = Math.floor(Math.random()*3);
//     const chooiceArray = ["rock","paper","sicsors"];
//     return chooiceArray[computer]; 
// }

// const determineWinner = (player,computer) => {
//     console.log(player,computer);
//     let winner = player === computer 
//     ? (`Tie!\nplayer: ${player}\ncomputer: ${computer}`)
//     :player === "rock" && computer === "paper"
//     ?  `Computer wons!\nplayer: ${player}\ncomputer: ${computer}`
//     :player === "sicsors" && computer === "rock" 
//     ?  `Computer wons!\nplayer: ${player}\ncomputer: ${computer}`
//     :player === "paper" && computer === "sicsors"
//     ?  `Computer wons\nplayer: ${player}\ncomputer: ${computer}`
//     :  `Player wons \nplayer: ${player}\ncomputer: ${computer}`;

//     return winner;
// }

// const playAgain = () => {
//     let againPlay = confirm(`Do you want to play again?`);
//     if (againPlay){
//         return true;
//     }else {
//         return false;
//     }
// }

// startGame();


//Objects 

// const vehicle = {
//     color: "black",
//     driving: true,
//     doors : 4,
//     twoWheeler : {
//         wheels : 2,
//         speed: 80,
//         model : "yamaha"
//     },
//     fourWheeler : {
//         wheels : 2,
//         speed: 60
//     },
//     petrol : function(){
//         return (`feual full in ${this.twoWheeler.model}`);
//     }
// };

// console.log(vehicle["twoWheeler"]["speed"]);

// //Obect inheritance

// const Yamaha = Object.create(vehicle);
// Yamaha.brand = "yamaha";
// console.log(Yamaha.brand);

// //For in loop

// for (let detail in Yamaha){
//     console.log(Yamaha[detail]);
// }

// //Object destructuring

// const r15 = Object.create(Yamaha);
// const {color,brand,driving: drive} = r15;
// console.log(color,brand,drive);
// console.log(r15.petrol());
// console.log(vehicle.hasOwnProperty("color"));

// function driveVehicle({color}){
//     return color;
// };

// console.log(driveVehicle(vehicle));

// console.log(Object.keys(vehicle));
// console.log(Object.values(vehicle));


//Class

// class Student {
//     constructor(sId,sName,sMark){
//         this.stuId = sId;
//         this.stuName = sName;
//         this.stuMark = sMark;
//         this.stuParentName = "Ellappan";
//         this.stuSubject = [];
//     }
//     calculateMark (){
//         return console.log(`${this.stuParentName} son student ${this.stuName} score ${this.stuMark}`);
//     }

//     getstuParentName(){
//         return this.stuParentName;
//     }
//     setstuParentName(parentName){
//         this.stuParentName = parentName;
//     }
//     getSubject(){
//         return this.stuSubject;
//     }
//     setSubject(subject){
//         this.stuSubject.push (subject);
//     }
// }

// const dhana = new Student(10,"Dhana",80);
// dhana.setstuParentName("Sekar");
// dhana.setSubject("tamil");
// dhana.setSubject("English");
// console.log(dhana.getSubject());
// console.log(dhana.getstuParentName());
// dhana.calculateMark();

// class Pizza {
//     constructor(pizzaSize,pizzaCurst){
//         this.size = pizzaSize;
//         this.curst = pizzaCurst;
//     }
// }

// class specialPizza extends Pizza{
//     constructor(pizzasize,pizzacurst,pizzaType,pizzaToppings){
//         super(pizzasize,pizzacurst);
//         this.type = pizzaType;
//         this.topping = pizzaToppings;
//     }
//     Display(){
//         return console.log(`Pizza type ${this.type} and toppings ${this.topping} and size ${this.size}`);
//     }
// }

// const myPizza = new specialPizza("medium","thin","margarito","egg");
// myPizza.Display();

// class Burgger {
//     #_size = "Medium";
//     constructor(burggerCurst){
//         // this._size = burggerSize;
//         this._curst = burggerCurst;
//     }
//     getBurggersize (){
//         return this._size;
//     }
//     setBurggersize(size){
//         this.#_size = size;
//     }
//     makeBurgger(){
//         return console.log(`Burgger with size ${this.#_size} and curst ${this._curst}`);
//     }
// }
// const b1 = new Burgger("ooo");

// b1.setBurggersize("Large");

// console.log(b1.getBurggersize());
// b1.makeBurgger();
// const myBurgger = new Burgger("Olives");
// myBurgger.makeBurgger();
// // console.log(myBurgger.#_size);


// function schoolFactory(id,name,mark){
//     const Id =id;
//     const Name = name;
//     const Mark = mark;
//     const ParentName = "Ganam";

//     return {
//         calculate: () =>{
//         console.log(`${ParentName} son student ${Name} and id ${Id} score ${Mark}`)
//         }
//     };
// }

// const prasanth = new schoolFactory(19,"Prasanth",80);
// prasanth.calculate();
// const prasanth = new schoolFactory(90,"prasanth",80);
// prasanth.calculateMark();

//JSON 

// const myObj = {
//     name : "dhana",
//     id : 10,
//     mark : 80,
//     myFavsub :["programming","android development"],
//     myLife : () => {
//         return console.log("myLife my rules");
//     }
// }

// myObj.myLife();
// console.log(myObj);
// const mysendJSON = JSON.stringify(myObj);
// console.log(mysendJSON);
// console.log(typeof(myObj));
// console.log(typeof mysendJSON);

// const myreceiveJOSN = JSON.parse(mysendJSON);
// console.log(myreceiveJOSN);
// console.log(typeof myreceiveJOSN);
// console.log(myreceiveJOSN.name);

//Error handling
// "use strict";
// const variable = "dhana";
// variable = 10;
// console.log(variable);

// const dhana = () => {
//     let i = 0;
//     while (i <= 5){
//         try{
//             if (i%2 !==0){
//                 throw new Error("this is an cuatom error for odd number");
//             } 
//             // throw new Error("This is an custom error");
//             console.log('even finaly');
//         }catch(error){
//             console.error(error.stack);
//         }finally{
//             i++;
//         }
// }
// }
// dhana();

// function customError(message){
//     this.message = message;
//     this.name = "Custom Error"
//     this.stack = `${this.name}:${message}`;
// }

//DOM

// document.addEventListener("DOMContentLoaded",function(){
// const box1 = document.getElementById("f-box");
// console.log(box1);
// const boxs = document.querySelector("#s-box") 
// console.log(boxs);
// const boxy = document.querySelector(".box2") 
// console.log(boxy);
// const box2 = document.querySelectorAll(".box");
// console.log(box2);
// const heading = document.getElementsByClassName("box");
// console.log(heading);
// const value = document.getElementsByTagName("div");
// console.log(value);

// const heading_main = document.getElementById("content-box");
// console.log(heading_main);
// const divs = heading_main.getElementsByTagName("div");
// console.log(divs);
// const samedivs = heading_main.querySelectorAll("div");
// console.log(samedivs);

// const evendivs = document.querySelectorAll("div:nth-of-type(2n)");
// console.log(evendivs);

// for (i = 0;i < evendivs.length;i++){
//     evendivs[i].style.backgroundColor = "white";
//     evendivs[i].style.color = "black"
// }

// // heading_main.style.display = "none";s

// const secondPage = document.getElementById("s-page");
// console.log(secondPage);
// secondPage.style.display = "none"
// secondPage.style.backgroundColor = "#0000"

// const s_heading = secondPage.querySelector("h1");
// console.log(s_heading);
// s_heading.textContent = "Welcome page";


// const tittle = secondPage.querySelector("div");
// console.log(tittle);
// tittle.innerHTML = "<h1>Hi Hello Welcome </h1> <p> so sweet </p>";

// //Tree navigation

// console.log(evendivs[0]);
// console.log(evendivs[0].parentElement);
// console.log(evendivs[0].parentElement.children);
// console.log(evendivs[0].parentElement.childNodes);
// console.log(evendivs[0].parentElement.hasChildNodes());
// console.log(evendivs[0].parentElement.lastChild);
// console.log(evendivs[0].parentElement.lastElementChild);
// console.log(evendivs[0].parentElement.firstChild);
// console.log(evendivs[0].parentElement.firstElementChild);
// console.log(evendivs[0].nextSibling);
// console.log(evendivs[0].nextElementSibling);
// console.log(evendivs[0].nextElementSibling.nextElementSibling);
// console.log(evendivs[0].previousSibling);
// console.log(evendivs[0].previousSibling.previousSibling);
// console.log(evendivs[0].previousElementSibling);

// //Remove an element
// // console.log(secondPage);
// secondPage.style.display = "grid";
// heading_main.style.display = "none"
// const sContenet = secondPage.lastElementChild;
// // secondPage.lastElementChild.remove();
// while(secondPage.lastChild){
//     secondPage.lastChild.remove();
// }
// console.log(sContenet);

// //Adding an Element
// const newElem = document.createElement("div");
// secondPage.append(newElem);
// // newElem.textContent = "Hi Welcome";


// const createDivs = (parent,val)=>{
//     const newDiv = document.createElement("div");
//     parent.append(newDiv);
//     newDiv.textContent = val;
//     newDiv.style.width = "100px";
//     newDiv.style.height = "100px";
//     newDiv.style.backgroundColor = "white";
//     newDiv.style.color = 'black';
//     newDiv.style.justifyContent = "center"
//     newDiv.style.alignContent = "center";
//     newDiv.style.margin = "10px";
// }

// for (let i = 1;i <= 6;i++){
//     createDivs(secondPage,i);
// }
// });


//Events and EventListners

//Syntax
//.addEventListner("event",function,capture);

// const fPage = document.querySelector("#content-box");
// const fBox = fPage.querySelector("#f-box");

// const divArr = fPage.querySelectorAll("div");
// console.log(divArr);


// const fFun = () =>{
//     alert(`This is first div`);
// }
// fBox.addEventListener("click",fFun,false);
// fBox.removeEventListener("click",fFun);

// fBox.addEventListener("click",(event)=>{
//     console.log(event.target);
//     event.target.textContent = "Welcome";
//     event.target.style.backgroundColor = "yellow"
// },false);
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log('completed');
        initApp();
    }
})

const initApp = () => {
    const fPage = document.querySelector("#content-box");
    const fBox = fPage.querySelector("#f-box");
    const fText = fBox.querySelector("#ftext");
    fPage.addEventListener("click",(event)=> {
        // event.stopPropagation();
        // fPage.style.backgroundColor = "pink";
        // fPage.classList.add("gray");
        // fPage.classList.remove("purple");
        fPage.classList.toggle("purple");
        fPage.classList.toggle("gray");


    });

    fBox.addEventListener("click",(event)=> {
        // event.stopPropagation();
        // fBox.style.backgroundColor = "Green";
        fBox.classList.toggle("black");
        fBox.classList.toggle('green');
    });

    fText.addEventListener("click",(event) => {
        // event.stopPropagation();
        // event.target.textContent = "Welcome1" ? "Hi Hello":"Welcome1" ;
        // event.target.style.color = "black";
        const text = event.target.textContent;
        text === "Welcome1" ?(event.target.textContent = "Hi Hello") :(event.target.textContent = "Welcome1");
    });

}

const navBar = document.querySelector(".nav");
navBar.addEventListener("mouseover",(event)=>{
    navBar.style.backgroundColor = "Green";
})

navBar.addEventListener("mouseout",()=>{
    navBar.style.backgroundColor = "Purple";
})
