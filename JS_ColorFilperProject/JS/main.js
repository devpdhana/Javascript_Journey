const fPage = document.getElementById("firstPage");
console.log(fPage);
const colorCode = fPage.querySelector("#colorCode");
console.log(colorCode);
const clicktBtn = fPage.querySelector("#btnClick");
console.log(clicktBtn); 

const colors = ["red","green","purple","violet"];
clicktBtn.addEventListener("click",(event)=>{
    const random = colorRandom();

    fPage.style.backgroundColor = colors[random];
    colorCode.textContent = (colors[random]);
    // console.log(random);
    // if (colors[random] === "red"){
    //     colorCode.textContent = ("red");
    //     fPage.classList.add("red");
    //     fPage.classList.remove("white");
    // }else if (colors[random] === "green"){
    //     colorCode.textContent = ("green");
    //     fPage.classList.add("green");
    //     fPage.classList.remove("white");
    //     fPage.classList.remove("red");
    // }
    // else if (colors[random] === "purple"){
    //     colorCode.textContent = ("purple");
    //     fPage.classList.add("purple");
    //     fPage.classList.remove("white");
    //     fPage.classList.remove("red");
    //     fPage.classList.remove("green");
    //     fPage.classList.remove('violet');
    // }
    // else if (colors[random] === "violet"){
    //     colorCode.textContent = ("violet");
    //     fPage.classList.add("violet");
    //     fPage.classList.remove("white");
    //     fPage.classList.remove("red");
    //     fPage.classList.remove("green");
    //     fPage.classList.remove("purple");
    // }

})

const colorRandom = ()=>{
    const random = Math.floor(Math.random()*colors.length);
    console.log(random);
    return random;
}