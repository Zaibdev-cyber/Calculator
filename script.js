const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;   //jab btn click ho ga to button k ander wali value variable value k ander store ho gi.
        // ✅ If display shows "Error", clear it before typing anything new
        if (display.value === "Error") {
            display.value = "";
        }
        if (button.classList.contains("allClear")) {
            display.value = "";
        }
        else if (button.classList.contains("delete")) {
            display.value = display.value.slice(0, -1);
        }

        else if (button.classList.contains("equal")) {
            try {

                let expression = display.value;

                // Handle the percentage operations
                expression = expression.replace(/(\d+)\s*([\+\-\*\/])\s*(\d+)%/g,
                    (match, num1, op, num2) => `${num1}${op}(${num1}*${num2}/100)`
                );
                  expression = expression.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
                if (expression.includes("//")) {
                    display.value = "Error";
                    return;
                }

                //  Evaluate 
                display.value = eval(expression);
            }
            catch {
                display.value = "Error";
            }

        }
        else {
            display.value += value;
        }




    });
});

