function Buttons(props) {
  return (
    <div id='buttons'>
      <button
        id='seven'
        value='7'
        className='btn lnb'
        onClick={props.handleNum}
      >
        7
      </button>
      <button id='eight' value='8' className='btn' onClick={props.handleNum}>
        8
      </button>
      <button id='nine' value='9' className='btn' onClick={props.handleNum}>
        9
      </button>
      <button id='four' value='4' className='btn lnb' onClick={props.handleNum}>
        4
      </button>
      <button id='five' value='5' className='btn' onClick={props.handleNum}>
        5
      </button>
      <button id='six' value='6' className='btn' onClick={props.handleNum}>
        6
      </button>
      <button id='one' value='1' className='btn lnb' onClick={props.handleNum}>
        1
      </button>
      <button id='two' value='2' className='btn' onClick={props.handleNum}>
        2
      </button>
      <button id='three' value='3' className='btn' onClick={props.handleNum}>
        3
      </button>
      <button
        id='zero'
        value='0'
        className='btn  bnb'
        onClick={props.handleNum}
      >
        0
      </button>
      <button
        id='divide'
        value='/'
        className='btn orange tnb'
        onClick={props.onClick}
      >
        /
      </button>
      <button
        id='multiply'
        value='*'
        className='btn orange  tnb rnb'
        onClick={props.onClick}
      >
        x
      </button>
      <button
        id='subtract'
        value='-'
        className='btn orange  rnb'
        onClick={props.onClick}
      >
        -
      </button>
      <button
        id='add'
        value='+'
        className='btn orange  rnb'
        onClick={props.onClick}
      >
        +
      </button>
      <button
        id='equals'
        value='='
        className='btn orange   bnb rnb'
        onClick={props.getResult}
      >
        =
      </button>
      <button
        id='clear'
        value=''
        className='btn  tnb lnb'
        onClick={props.clear}
      >
        AC
      </button>
      <button
        id='decimal'
        value='.'
        className='btn  bnb'
        onClick={props.handleDot}
      >
        .
      </button>
    </div>
  );
}

export default Buttons;
