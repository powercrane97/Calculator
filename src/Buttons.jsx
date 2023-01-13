import buttonValues from "./buttonValues";

function Buttons(props) {
  const { onClick, clear, getResult, handleNum, handleDot } = props;
  function filterHandlers(buttonValue) {
    switch (buttonValue) {
      case "=":
        return getResult;
      case "AC":
        return clear;
      case ".":
        return handleDot;
      case "+":
      case "-":
      case "/":
      case "x":
        return onClick;
      default:
        return handleNum;
    }
  }

  return (
    <div id='buttons'>
      {buttonValues.map(button => {
        return (
          <button
            id={button.id}
            key={button.id}
            value={button.value}
            className={"btn"}
            onClick={filterHandlers(button.value)}
          >
            {button.value}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
