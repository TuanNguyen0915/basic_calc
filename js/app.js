// Instructions:  You've been given the HTML template for a JavaScript 'calculator.'
// Implement functionality such that when two numbers are entered in the input fields, 
//    pressing one of the 'operator' buttons results in the mathematical calculation for those two numbers.  
// (Example:  If the boxes contain 3 and 4, pressing the '+' button should put a 7 in the display box.)
// (If '-' is pressed, -1 should be displayed.  If '*' is pressed, 12 should be displayed, etc...)

// EASY BONUS:  If the result is odd, change it's color to salmon.
// MEDIUM BONUS:  Use a single event listener to accomplish this task, rather than 4 of them.

/************** Constants *******************/
const opObject = {
    plus: function (n1, n2) { return n1 + n2 },
    minus: function (n1, n2) { return n1 - n2 },
    times: function (n1, n2) { return n1 * n2 },
    divided: function (n1, n2) { return n1 / n2 }
}

/************** Document element *******************/
const operators = document.querySelectorAll(".operator")
const num1 = document.getElementById("mathInput1")
const num2 = document.getElementById("mathInput2")

/************** Event Listener ****************/
operators.forEach(op => {
    op.addEventListener("click", () => {
        opId = op.getAttribute("id")
        let result = opObject[opId](getValue(num1), getValue(num2))
        // Show value of result and styling
        let mathResult = document.getElementById("mathResult")
        mathResult.setAttribute("value", result)
        mathResult.style.color = result % 2 ? "salmon" : ""
    })
})


/************** Function *******************/
function getValue(number) {
    return parseFloat(number.value)
}
