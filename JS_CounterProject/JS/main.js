document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState === "complete"){
        console.log('ready')
        initApp();
    }
})

const initApp = ()=>{
    const increment = document.querySelector("#add");
    const decrement = document.querySelector('#sub');
    const result = document.querySelector('#result');
    
    increment.addEventListener("click",()=>{
        let val = parseInt(result.textContent);
        val += 1;
        result.textContent = val;
        console.log("Hi")
        if(val>0){
            result.style.color = "green";
        }else if(val === 0){
            result.style.color = "black"
        }else {
            result.style.color = "red";
        }
    })

    decrement.addEventListener("click",()=>{
        let val = parseInt(result.textContent);
        val -= 1;
        result.textContent = val;
        console.log("Hii");
        if(val>0){
            result.style.color = "green";
        }else if(val === 0){
            result.style.color = "black"
        }
        else {
            result.style.color = "red";
        }
    })
}
