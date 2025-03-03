import { useState } from 'react'
import './App.css'
import Screen from './Screen';
import Keys from './Keys';

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("0");

  const handleInput = (value, isOperator) => {

    if (isOperator) {
      if (value === "AC") {
        setExpression('');
        setResult("0");
      } else if (value === "DEL") {
        setExpression(expression.slice(0, -1))
      } else if (value === "=") {
        handleOperation();
      }  else if (value === "%"){
        const lastNumber = parseFloat(expression.split(/[\+\-x/]/).pop());
        const percentage = lastNumber / 100;
        setExpression((prev) => prev.replace(/[\d\.]+$/, percentage.toString()));
      } else {
        // Handle operators after "="
        if (result !== "0") {
          setExpression(result + value); // Start a new expression with the result
          setResult("0"); // Reset the result
        } else {
          // Handle consecutive operators
          const lastChar = expression.slice(-1);
          const secondLastChar = expression.slice(-2, -1);

          if (["+", "-", "x", "/"].includes(lastChar)) {
            // If the last character is an operator and the new input is "-", allow it
            if (value === "-") {
              if (expression === "" || ["+", "-", "x", "/"].includes(lastChar)){
                setExpression((prev) => prev + value);
              }
            } else if (["+", "/", "x", "%"].includes(expression.slice(-1)) && ["+", "/", "x", "%"].includes(value)) {
              // If the last character is an operator and the new input is also an operator,
              // replace the last operator with the new one.
              setExpression((prev) => prev.slice(0, -1) + value);
            } else if (lastChar === "-" && ["+", "/", "x"].includes(secondLastChar) && ["+", "/", "x"].includes(value)) {
              // If the last character is "-" and it follows an operator, replace the last two characters with the new operator.
              setExpression(expression.slice(0, -2) + value);
            }
          } else {
          setExpression(expression + value);
          }
        }
      }
    } else {

       // Prevent multiple leading zeros
      if (value === "0" && expression === "0") {
        return;
      }

      // Remove leading zeros when a non-zero number is entered
      if (value !== "0" && expression === "0") {
        setExpression(value); // Replace "0" with the new number
        return;
      }

       // Prevent multiple decimal points in a number
      if (value === ".") {
        const lastNumber = expression.split(/[\+\-x/]/).pop(); // Get the last number
        if (lastNumber.includes(".")) {
          return; // Don't allow multiple decimal points in one number
        }
        // Add a leading zero if the expression is empty or ends with an operator
        if (expression === "" || ["+", "-", "x", "/"].includes(expression.slice(-1))) {
          setExpression(expression + "0.");
          return;
        }
      }

        // If the result is not "0", reset it
        if (result !== "0") {
          setResult("0");
      }
      setExpression(expression + value)
    }
  };

  const handleOperation = () => {
    try {
      // Validate the expression
      const isValidExpression = /^[\d+\-x/.*]+$/.test(expression);
      if (!isValidExpression) {
        throw new Error("Invalid expression");
      }
      // Replaces 'x' with '*' and '%' with '/100' for evaluation
      //remember that eval() is a risky tool try to avoid it in your code
      const evalExpression = expression.replace(/x/g, '*').replace(/%/g, '/100');
      const evaluatedResult = eval(evalExpression);
      setResult(evaluatedResult.toString());
      setExpression("");
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <>
      <div id="container">
          <Screen 
            value={expression}
            result={result}
          />
        <div id="calculator">
          <Keys handleInput={handleInput} />
        </div>
        <div id="cal-footer">
          <p>@ 2025 Practice Project by <a href="https://github.com/rue-eru" target='_blank' title="Visit my GitHub profile">L</a></p>
        </div>
      </div>
    </>
  )
}

export default App
