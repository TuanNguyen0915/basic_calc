// Instructions:  You've been given the HTML template for a JavaScript 'calculator.'  
// Implement functionality such that when two numbers are entered in the input fields, 
//    pressing one of the 'operator' buttons results in the mathematical calculation for those two numbers.  
// (Example:  If the boxes contain 3 and 4, pressing the '+' button should put a 7 in the display box.)
// (If '-' is pressed, -1 should be displayed.  If '*' is pressed, 12 should be displayed, etc...)

// EASY BONUS:  If the result is odd, change it's color to salmon.
// MEDIUM BONUS:  Use a single event listener to accomplish this task, rather than 4 of them.

// You've been given all the cached element references:
const mathResult = document.getElementById('mathResult');
const input1 = document.getElementById('mathInput1');
const input2 = document.getElementById('mathInput2');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const timesBtn = document.getElementById('times');
const dividedBtn = document.getElementById('divided');

// Use this cached element reference if you're attempting the bonus.
const mathDiv = document.getElementById('operators');

// Standard solution:

plusBtn.addEventListener('click', () => {
  mathResult.value = parseInt(input1.value) + parseInt(input2.value)
  checkForOdd()
})

minusBtn.addEventListener('click', () => {
  mathResult.value = parseInt(input1.value) - parseInt(input2.value)
  checkForOdd()
})

timesBtn.addEventListener('click', () => {
  mathResult.value = parseInt(input1.value) * parseInt(input2.value)
  checkForOdd()
})

dividedBtn.addEventListener('click', () => {
  mathResult.value = parseInt(input1.value) / parseInt(input2.value)
  checkForOdd()
})


// Easy bonus solution:

function checkForOdd(){
  mathResult.style.color = (mathResult.value % 2 != 0) ? 'salmon' : 'black'
}


// Medium bonus solution:

// mathDiv.addEventListener('click', (e) => {
//   let operator = e.target.innerText
//   if (operator === "+") {
//     mathResult.value = parseInt(input1.value) + parseInt(input2.value)
//   }
//   if (operator === "-") {
//     mathResult.value = parseInt(input1.value) - parseInt(input2.value)
//   }
//   if (operator === "*") {
//     mathResult.value = parseInt(input1.value) * parseInt(input2.value)
//   }
//   if (operator === "/") {
//     mathResult.value = parseInt(input1.value) / parseInt(input2.value)
//   }
//   checkForOdd()
// })
