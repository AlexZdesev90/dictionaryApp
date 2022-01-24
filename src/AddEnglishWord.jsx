import React from "react";

const AddEnglishWord = (props) => {
  let changeWord = (e) => {
    props.onChangeIt(e.target.value);
  };

  let changeWordToo = (e) => {
    props.onChangeItToo(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter english word"
        value={props.wordE}
        onChange={changeWord}
      />
      <input
        type="text"
        placeholder="enter russian word"
        value={props.wordR}
        onChange={changeWordToo}
      />
      <button onClick={() => props.updateArray([props.wordE, props.wordR])}>
        add
      </button>
      <button onClick={() => console.log(props.array)}>console</button>
    </div>
  );
};

export default AddEnglishWord;
