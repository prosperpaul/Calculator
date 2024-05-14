// document.addEventListener("DOMContentLoaded", function() {
//     const result = document.getElementById("result");
//     const buttons = document.querySelectorAll("button");

//     buttons.forEach(button => {
//         button.addEventListener("click", function() {
//             if (button.classList.contains("number")) {
//                 result.value += button.textContent;
//             } else if (button.classList.contains("operator")) {
//                 result.value += " " + button.textContent + " ";
//             } else if (button.classList.contains("clear")) {
//                 result.value = "";
//             } else if (button.classList.contains("calculate")) {
//                 try {
//                     result.value = eval(result.value);
//                 } catch (error) {
//                     result.value = "Error";
//                 }
//             }
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const display = document.getElementById("result");
//     let currentOperand = "";
//     let previousOperand = "";
//     let operation = undefined;
  
//     const numberButtons = document.querySelectorAll(".number");
//     const operatorButtons = document.querySelectorAll(".operator");
//     const clearButton = document.querySelector(".clear");
//     const plusMinusButton = document.querySelector(".operator[value='+/-']");
//     const percentageButton = document.querySelector(".operator[value='%']");
//     const equalButton = document.querySelector(".operator[value='=']");
  
//     numberButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         appendNumber(button.innerText);
//         updateDisplay();
//       });
//     });
  
//     operatorButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         chooseOperation(button.value);
//       });
//     });
  
//     clearButton.addEventListener("click", clear);
  
//     plusMinusButton.addEventListener("click", toggleSign);
  
//     percentageButton.addEventListener("click", handlePercentage);
  
//     equalButton.addEventListener("click", () => {
//       compute();
//       updateDisplay();
//     });
  
//     function appendNumber(number) {
//       if (number === "." && currentOperand.includes(".")) return;
//       currentOperand += number;
//     }
  
//     function chooseOperation(selectedOperation) {
//       if (currentOperand === "") return;
//       if (previousOperand !== "") {
//         compute();
//       }
//       operation = selectedOperation;
//       previousOperand = currentOperand;
//       currentOperand = "";
//     }
  
//     function compute() {
//       let computation;
//       const prev = parseFloat(previousOperand);
//       const current = parseFloat(currentOperand);
//       if (isNaN(prev) || isNaN(current)) return;
//       switch (operation) {
//         case "+":
//           computation = prev + current;
//           break;
//         case "-":
//           computation = prev - current;
//           break;
//         case "*":
//           computation = prev * current;
//           break;
//         case "/":
//           computation = prev / current;
//           break;
//         case "%":
//           computation = prev % current;
//           break;
//         default:
//           return;
//       }
//       currentOperand = computation;
//       operation = undefined;
//       previousOperand = "";
//     }
  
//     function updateDisplay() {
//       display.value = currentOperand;
//     }
  
//     function clear() {
//       currentOperand = "";
//       previousOperand = "";
//       operation = undefined;
//       updateDisplay();
//     }
  
//     function toggleSign() {
//       currentOperand = -currentOperand;
//       updateDisplay();
//     }
  
//     function handlePercentage() {
//       currentOperand = currentOperand / 100;
//       updateDisplay();
//     }
//   });
  
// document.addEventListener("DOMContentLoaded", function() {
//     const display = document.getElementById("result");
//     let currentOperand = "";
//     let previousOperand = "";
//     let operation = undefined;
  
//     const numberButtons = document.querySelectorAll(".number");
//     const operatorButtons = document.querySelectorAll(".operator");
//     const clearButton = document.querySelector(".clear");
//     const plusMinusButton = document.querySelector(".operator[value='+/-']");
//     const percentageButton = document.querySelector(".operator[value='%']");
//     const equalButton = document.querySelector(".operator[value='=']");
  
//     numberButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         appendNumber(button.innerText);
//         updateDisplay();
//       });
//     });
  
//     operatorButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         chooseOperation(button.value);
//         updateDisplay();
//       });
//     });
  
//     clearButton.addEventListener("click", () => {
//       clear();
//       updateDisplay();
//     });
  
//     plusMinusButton.addEventListener("click", () => {
//       toggleSign();
//       updateDisplay();
//     });
  
//     percentageButton.addEventListener("click", () => {
//       handlePercentage();
//       updateDisplay();
//     });
  
//     equalButton.addEventListener("click", () => {
//       compute();
//       updateDisplay();
//     });
  
//     function appendNumber(number) {
//       if (number === "." && currentOperand.includes(".")) return;
//       currentOperand += number;
//     }
  
//     function chooseOperation(selectedOperation) {
//       if (currentOperand === "") return;
//       if (previousOperand !== "") {
//         compute();
//       }
//       operation = selectedOperation;
//       previousOperand = currentOperand;
//       currentOperand = "";
//     }
  
//     function compute() {
//       let computation;
//       const prev = parseFloat(previousOperand);
//       const current = parseFloat(currentOperand);
//       if (isNaN(prev) || isNaN(current)) return;
//       switch (operation) {
//         case "+":
//           computation = prev + current;
//           break;
//         case "-":
//           computation = prev - current;
//           break;
//         case "*":
//           computation = prev * current;
//           break;
//         case "/":
//           computation = prev / current;
//           break;
//         case "%":
//           computation = prev % current;
//           break;
//         default:
//           return;
//       }
//       currentOperand = computation;
//       operation = undefined;
//       previousOperand = "";
//     }
  
//     function updateDisplay() {
//       display.value = currentOperand;
//     }
  
//     function clear() {
//       currentOperand = "";
//       previousOperand = "";
//       operation = undefined;
//     }
  
//     function toggleSign() {
//       currentOperand = -currentOperand;
//     }
  
//     function handlePercentage() {
//       currentOperand = currentOperand / 100;
//     }
//   });
  



// // document.addEventListener("DOMContentLoaded", function() {
//     const result = document.getElementById("result");
//     const buttons = document.querySelectorAll("button");

//     buttons.forEach(button => {
//         button.addEventListener("click", function() {
//             if (button.classList.contains("number")) {
//                 appendNumber(button.textContent);
//             } else if (button.classList.contains("operator")) {
//                 handleOperator(button.textContent);
//             } else if (button.classList.contains("clear")) {
//                 clearResult();
//             } else if (button.classList.contains("calculator")) {
//                 calculateResult();
//             }
//         });
//     });

//     function appendNumber(number) {
//         result.value += number;
//     }

//     function handleOperator(operator) {
//         const lastChar = result.value[result.value.length - 1];
//         // If last character is an operator, replace it with the new operator
//         if (isOperator(lastChar)) {
//             result.value = result.value.slice(0, -1) + operator;
//         } else {
//             result.value += operator;
//         }
//     }

//     function clearResult() {
//         result.value = "";
//     }

//     function calculateResult() {
//         try {
//             result.value = eval(result.value);
//         } catch (error) {
//             result.value = "Error";
//         }
//     }

//     function isOperator(character) {
//         return ["+", "-", "*", "/"].includes(character);
//     }
// });



// document.addEventListener("DOMContentLoaded", function() {
//     const resultDisplay = document.getElementById("result");
//     let currentOperand = "";
//     let previousOperand = "";
//     let operation = undefined;

//     const numberButtons = document.querySelectorAll(".number");
//     const operatorButtons = document.querySelectorAll(".operator");
//     const switchButtons = document.querySelectorAll(".switch");

//     numberButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             appendNumber(button.innerText);
//             updateDisplay();
//         });
//     });

//     operatorButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             chooseOperation(button.innerText);
//             updateDisplay();
//         });
//     });

//     switchButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             if (button.innerText === "AC") {
//                 clear();
//             } else if (button.innerText === "+/-") {
//                 toggleSign();
//             } else if (button.innerText === "%") {
//                 handlePercentage();
//             } else if (button.innerText === ".") {
//                 addDecimal();
//             }
//             updateDisplay();
//         });
//     });

//     function appendNumber(number) {
//         if (number === "." && currentOperand.includes(".")) return;
//         currentOperand += number;
//     }

//     function chooseOperation(selectedOperation) {
//         if (currentOperand === "") return;
//         if (previousOperand !== "") {
//             compute();
//         }
//         operation = selectedOperation;
//         previousOperand = currentOperand;
//         currentOperand = "";
//     }

//     function compute() {
//         let computation;
//         const prev = parseFloat(previousOperand);
//         const current = parseFloat(currentOperand);
//         if (isNaN(prev) || isNaN(current)) return;
//         switch (operation) {
//             case "+":
//                 computation = prev + current;
//                 break;
//             case "-":
//                 computation = prev - current;
//                 break;
//             case "*":
//                 computation = prev * current;
//                 break;
//             case "/":
//                 computation = prev / current;
//                 break;
//             default:
//                 return;
//         }
//         currentOperand = computation;
//         operation = undefined;
//         previousOperand = "";
//     }

//     function updateDisplay() {
//         resultDisplay.value = currentOperand;
//     }

//     function clear() {
//         currentOperand = "";
//         previousOperand = "";
//         operation = undefined;
//         resultDisplay.value = "";
//     }

//     function toggleSign() {
//         currentOperand = currentOperand * -1;
//         updateDisplay();
//     }

//     function handlePercentage() {
//         currentOperand = currentOperand / 100;
//         updateDisplay();
//     }

//     function addDecimal() {
//         if (!currentOperand.includes(".")) {
//             currentOperand += ".";
//             updateDisplay();
//         }
//     }
// });

  

// document.addEventListener("DOMContentLoaded", function() {
//     const display = document.getElementById("result");
//     let currentOperand = "";
//     let previousOperand = "";
//     let operation = undefined;
  
//     const numberButtons = document.querySelectorAll(".number");
//     const operatorButtons = document.querySelectorAll(".operator");
//     const switchButtons = document.querySelectorAll(".switch");
  
//     numberButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         appendNumber(button.innerText);
//         updateDisplay();
//       });
//     });
  
//     operatorButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         chooseOperation(button.innerText);
//         updateDisplay();
//       });
//     });
  
//     switchButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         if (button.innerText === "AC") {
//           clear();
//         } else if (button.innerText === "+/-") {
//           toggleSign();
//           updateDisplay();
//         } else if (button.innerText === "%") {
//           handlePercentage();
//           updateDisplay();
//         } else if (button.innerText === ".") {
//           addDecimal();
//           updateDisplay();
//         }
//       });
//     });
  
//     function appendNumber(number) {
//       if (number === "." && currentOperand.includes(".")) return;
//       currentOperand += number;
//     }
  
//     function chooseOperation(selectedOperation) {
//       if (currentOperand === "") return;
//       if (previousOperand !== "") {
//         compute();
//       }
//       operation = selectedOperation;
//       previousOperand = currentOperand;
//       currentOperand = "";
//     }
  
//     function compute() {
//       let computation;
//       const prev = parseFloat(previousOperand);
//       const current = parseFloat(currentOperand);
//       if (isNaN(prev) || isNaN(current)) return;
//       switch (operation) {
//         case "+":
//           computation = prev + current;
//           break;
//         case "-":
//           computation = prev - current;
//           break;
//         case "*":
//           computation = prev * current;
//           break;
//         case "/":
//           computation = prev / current;
//           break;
//         case "=":
//           computation = current;
//           break;
//         default:
//           return;
//       }
//       currentOperand = computation;
//       operation = undefined;
//       previousOperand = "";
//     }
  
//     function updateDisplay() {
//       display.value = currentOperand;
//     }
  
//     function clear() {
//       currentOperand = "";
//       previousOperand = "";
//       operation = undefined;
//     }
  
//     function toggleSign() {
//       currentOperand = currentOperand * -1;
//     }
  
//     function handlePercentage() {
//       currentOperand = currentOperand / 100;
//     }
  
//     function addDecimal() {
//       if (!currentOperand.includes(".")) {
//         currentOperand += ".";
//       }
//     }
//   });
  

// document.addEventListener("DOMContentLoaded", function() {
//     const display = document.getElementById("result");
//     let currentOperand = "";
//     let previousOperand = "";
//     let operation = undefined;
  
//     const numberButtons = document.querySelectorAll(".number");
//     const operatorButtons = document.querySelectorAll(".operator");
//     const switchButtons = document.querySelectorAll(".switch");
  
//     numberButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         appendNumber(button.innerText);
//         updateDisplay();
//       });
//     });
  
//     operatorButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         chooseOperation(button.innerText);
//       });
//     });
  
//     switchButtons.forEach(button => {
//       button.addEventListener("click", () => {
//         if (button.innerText === "AC") {
//           clear();
//         } else if (button.innerText === "+/-") {
//           toggleSign();
//         } else if (button.innerText === "%") {
//           handlePercentage();
//         } else if (button.innerText === ".") {
//           addDecimal();
//         }
//         updateDisplay();
//       });
//     });
  
//     function appendNumber(number) {
//       if (number === "." && currentOperand.includes(".")) return;
//       currentOperand += number;
//     }
  
//     function chooseOperation(selectedOperation) {
//       if (currentOperand === "") return;
//       if (previousOperand !== "") {
//         compute();
//       }
//       operation = selectedOperation;
//       previousOperand = currentOperand;
//       currentOperand = "";
//     }
  
//     function compute() {
//       let computation;
//       const prev = parseFloat(previousOperand);
//       const current = parseFloat(currentOperand);
//       if (isNaN(prev) || isNaN(current)) return;
//       switch (operation) {
//         case "+":
//           computation = prev + current;
//           break;
//         case "-":
//           computation = prev - current;
//           break;
//         case "*":
//           computation = prev * current;
//           break;
//         case "/":
//           computation = prev / current;
//           break;
//         case "=":
//           computation = current;
//           break;
//         default:
//           return;
//       }
//       currentOperand = computation;
//       operation = undefined;
//       previousOperand = "";
//     }
  
//     function updateDisplay() {
//       display.value = currentOperand;
//     }
  
//     function clear() {
//       currentOperand = "";
//       previousOperand = "";
//       operation = undefined;
//     }
  
//     function toggleSign() {
//       currentOperand = currentOperand * -1;
//     }
  
//     function handlePercentage() {
//       currentOperand = currentOperand / 100;
//     }
  
//     function addDecimal() {
//       if (!currentOperand.includes(".")) {
//         currentOperand += ".";
//       }
//     }
//   });
  

// document.addEventListener("DOMContentLoaded", function() {
//   const display = document.getElementById("result");
//   let currentOperand = "";
//   let previousOperand = "";
//   let operation = undefined;

//   const numberButtons = document.querySelectorAll(".number");
//   const operatorButtons = document.querySelectorAll(".operator");
//   const switchButtons = document.querySelectorAll(".switch");

//   numberButtons.forEach(button => {
//     button.addEventListener("click", () => {
//       appendNumber(button.innerText);
//       updateDisplay();
//     });
//   });

//   operatorButtons.forEach(button => {
//     button.addEventListener("click", () => {
//       chooseOperation(button.innerText);
//     });
//   });

//   switchButtons.forEach(button => {
//     button.addEventListener("click", () => {
//       if (button.innerText === "AC") {
//         clear();
//       } else if (button.innerText === "+/-") {
//         toggleSign();
//       } else if (button.innerText === "%") {
//         handlePercentage();
//       } else if (button.innerText === ".") {
//         addDecimal();
//       }
//       updateDisplay();
//     });
//   });

//   function appendNumber(number) {
//     if (number === "." && currentOperand.includes(".")) return;
//     currentOperand += number;
//   }

//   function chooseOperation(selectedOperation) {
//     if (currentOperand === "") return;
//     if (previousOperand !== "") {
//       compute();
//     }
//     operation = selectedOperation;
//     previousOperand = currentOperand;
//     currentOperand = "";
//   }

//   function compute() {
//     let computation;
//     const prev = parseFloat(previousOperand);
//     const current = parseFloat(currentOperand);
//     if (isNaN(prev) || isNaN(current)) return;
//     switch (operation) {
//       case "+":
//         computation = prev + current;
//         break;
//       case "-":
//         computation = prev - current;
//         break;
//       case "*":
//         computation = prev * current;
//         break;
//       case "/":
//         computation = prev / current;
//         break;
//       case "=":
//         computation = current;
//         break;
//       default:
//         return;
//     }
//     currentOperand = computation;
//     operation = undefined;
//     previousOperand = "";
//   }

//   function updateDisplay() {
//     display.value = currentOperand;
//   }

//   function clear() {
//     currentOperand = "";
//     previousOperand = "";
//     operation = undefined;
//   }

//   function toggleSign() {
//     currentOperand = currentOperand * -1;
//   }

//   function handlePercentage() {
//     currentOperand = currentOperand / 100;
//   }

//   function addDecimal() {
//     if (!currentOperand.includes(".")) {
//       currentOperand += ".";
//     }
//   }
// });



document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("result");
    let currentOperand = "";
    let previousOperand = "";
    let operation = undefined;
  
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const clearButton = document.querySelector(".clear");
    const plusMinusButton = document.querySelector(".operator[value='+/-']");
    const percentageButton = document.querySelector(".operator[value='%']");
    const equalButton = document.querySelector(".equal");
  
    numberButtons.forEach(button => {
      button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
      });
    });
  
    operatorButtons.forEach(button => {
      button.addEventListener("click", () => {
        chooseOperation(button.value);
        updateDisplay();
      });
    });
  
    clearButton.addEventListener("click", () => {
      clear();
      updateDisplay();
    });
  
    plusMinusButton.addEventListener("click", () => {
      toggleSign();
      updateDisplay();
    });
  
    percentageButton.addEventListener("click", () => {
      handlePercentage();
      updateDisplay();
    });
  
    equalButton.addEventListener("click", () => {
      compute();
      updateDisplay();
    });
  
    function appendNumber(number) {
      if (number === "." && currentOperand.includes(".")) return;
      currentOperand += number;
    }
  
    function chooseOperation(selectedOperation) {
      if (currentOperand === "") return;
      if (previousOperand !== "") {
        compute();
      }
      operation = selectedOperation;
      previousOperand = currentOperand;
      currentOperand = "";
    }
  
    function compute() {
      let computation;
      const prev = parseFloat(previousOperand);
      const current = parseFloat(currentOperand);
      if (isNaN(prev) || isNaN(current)) return;
      switch (operation) {
        case "+":
          computation = prev + current;
          break;
        case "-":
          computation = prev - current;
          break;
        case "*":
          computation = prev * current;
          break;
        case "/":
          computation = prev / current;
          break;
        case "%":
          computation = prev % current;
          break;
        default:
          return;
      }
      currentOperand = computation;
      operation = undefined;
      previousOperand = "";
    }
  
    function updateDisplay() {
      display.value = currentOperand;
    }
  
    function clear() {
      currentOperand = "";
      previousOperand = "";
      operation = undefined;
    }
  
    function toggleSign() {
      currentOperand = -currentOperand;
    }
  
    function handlePercentage() {
      currentOperand = currentOperand / 100;
    }
  });
  

