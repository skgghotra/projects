const buttons=document.querySelectorAll(".button");
const body=document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.id==='lightyellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='lightpink'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='lightgreen'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='lightblue'){
            body.style.backgroundColor=e.target.id;
        }
    });
});


