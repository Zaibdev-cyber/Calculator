const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click",()=>{
        const value =button.textContent;   //jab btn click ho ga to button k ander wali value variable value k ander store ho gi.
        if(button.classList.contains("allClear")){
            display.value = "";
        }
        else if(button.classList.contains("delete")){
            display.value = display.value.slice(0,-1);
        }

        else if(button.classList.contains("equal")){
            try{
                  display.value = eval(display.value);
            }
            catch{
                display.value = "Error";
            }
          
        }
        else{
            display.value += value; 
        }

        

    
    });
});