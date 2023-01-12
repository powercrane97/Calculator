function Display(props) {
  return (
    <div id='display'>
      <span>{props.input || "0"}</span>
    </div>
  );
}

export default Display;
