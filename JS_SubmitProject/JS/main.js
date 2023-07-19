// console.log("Hi");

//Modules
//Method one
// import stuData from "./multiFunctions.js";
// import { stuTown,stuVilage
//  } from "./multiFunctions.js";

//Method two
// import stuData from "./multiFunctions.js";
// import { stuTown as Town,stuVilage as Village } from "./multiFunctions.js";

//Method Three

import * as functions from "./multiFunctions.js"



//Web Storage API
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log("completed");
        initApp();
    }
});

// const initApp = ()=>{
//     const page = document.querySelector('#infoPage');
//     const form = page.querySelector("#infoForm");
//     const submitButton = form.querySelector("#btnSubmit");

//     form.addEventListener('submit',(event)=>{
//         event.preventDefault();
//         console.log('Data submitted');
//     })

//     const myInput = document.querySelector('#myInput');
//     let  myData;
//     submitButton.addEventListener("click",()=>{
//         myData = myInput.value;
//         console.log(myData);
//         window.localStorage.setItem("myFirst",myData);
//         retriveData();
//     });
//     const retriveData = ()=>{
//         const myRetriveData = localStorage.getItem("myFirst");
//         console.log(myRetriveData);
//     }

//     const myObj = {
//         name : "dhana",
//         age : 10,
//         myFav : ["java","javascript",10],
//         myFun : ()=>{
//             return console.log("Hi");
//         }
//     }

//     localStorage.setItem("myFirstObj",JSON.stringify(myObj));
//     //retriving data from local storage and converting it back to object using JSON parse method
//     console.log(JSON.parse(localStorage.getItem("myFirstObj")));


//     const clearButton = document.querySelector("#btnClear");
//     clearButton.addEventListener('click',()=>{
//         localStorage.clear();
//     })

//     // localStorage.clear();

// }


//Modules


const initApp = ()=>{
console.log(functions.default());
console.log(functions.stuVillage());
console.log(functions.stuTown());

const dhana = new functions.stuBiodata("dhanasekar");
console.log(dhana);
console.log(dhana.displayData());

//Higher order functions

functions.stuDetails.forEach((post)=>{
    console.log(post);
});

// console.clear();

const postFilter = functions.stuDetails.filter((post)=>{
    return post.userId === 1;
});
console.log(postFilter);

const postMap = postFilter.map((post)=>{
    return post.postId; 
})
console.log(postMap);
}

// console.log(functisons.stuDetails);


