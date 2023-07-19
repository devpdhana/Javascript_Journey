document.addEventListener('readystatechange',(event)=>{
    if (event.target.readyState === "complete"){
        initApp();
    }
})

const initApp = ()=>{
    const buttons = document.querySelectorAll('.btn')
    const equal = document.getElementById("equal");
    const clear = document.getElementById('clear');
    let display = document.querySelector('.result');

    buttons.forEach((button)=>{
        button.addEventListener('click',(event)=>{
         display.value += event.target.textContent;
        })
    });

    equal.addEventListener('click',(event)=>{
        let ans = eval(display.value);
        display.value = ans;
    });

    clear.addEventListener('click',()=>{
        display.value = '';
    })
}