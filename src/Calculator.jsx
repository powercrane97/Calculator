import Display from "./Display";
import Buttons from "./Buttons";
import { useState } from "react";
import { evaluate, format } from "mathjs";

function Calculator(props) {
  const [input, setInput] = useState("");
  const [zeroAtStart, setZeroAtStart] = useState(false);
  const [dotUsed, setDotUsed] = useState(false);

  function handleOperation(e) {
    /* TODO make only minus at start*/
    if (input.length === 0 && ["*", "/", "+"].includes(e.target.value)) return;
    if (
      ["*", "/", "+", "-"].includes(input.at(-1)) &&
      ["*", "/", "+", "-"].includes(input.at(-2))
    ) {
      setInput(input =>
        input.slice(0, input.length - 2).concat(e.target.value)
      );
    }
    setDotUsed(state => false);
    if (["*", "/", "+", "-"].includes(input.at(-1))) {
      if (e.target.value === "-") {
        setInput(input => input + e.target.value);
        return;
      }
      setInput(input => input.replace(input.at(-1), e.target.value));
      return;
    }
    setInput(input => input + e.target.value);
    console.log(e.target.value);
  }

  function handleNumber(e) {
    if (zeroAtStart && e.target.value === "0") return;
    if (
      (input.length === 0 || ["*", "/", "+", "-"].includes(input.at(-1))) &&
      e.target.value === "0"
    )
      setZeroAtStart(true);
    setInput(input => input + e.target.value);
    console.log(e.target.value);
  }

  function handleDot(e) {
    if (dotUsed) return;
    setInput(input => input + e.target.value);
    setDotUsed(state => true);
    setZeroAtStart(state => false);
  }

  function clearInput() {
    setInput(input => "");
    setZeroAtStart(false);
    setDotUsed(false);
  }

  function getResult() {
    if (input.length === 0) return;
    if (["*", "/", "+", "-"].includes(input.at(-1))) return;
    setInput(input =>
      format(evaluate(input), {
        notation: "auto",
        precision: 14,
        lowerExp: -9,
        upperExp: 9,
      })
    );
    setDotUsed(state => false);
  }

  return (
    <div id='calculator'>
      <Display input={input} />
      <Buttons
        onClick={handleOperation}
        clear={clearInput}
        getResult={getResult}
        handleNum={handleNumber}
        handleDot={handleDot}
      />
    </div>
  );
}

export default Calculator;
