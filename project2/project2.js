const form=document.querySelector("form");

form.addEventListener("click",function(e){
e.preventDefault();
    const height=parseFloat(document.querySelector("#height").value);
    const weight=parseFloat(document.querySelector("#weight").value);
    const result =document.querySelector("#result");

    if(height ==="" || weight ===""){
        result.innerHTML="please enter both height and weight";
    }
    else if(isNaN(height) || isNaN(weight)){
        result.innerHTML="please enter valid numbers for height and weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>Your BMI is ${bmi}</span>`;
    }
});
