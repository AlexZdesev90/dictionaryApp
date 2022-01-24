import "./App.css";
import AddEnglishWord from "./AddEnglishWord";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      wordEn: "",
      wordRu: "",
      array: []
    };
  }

  changeStateWord = (englishWord) => {
    this.setState({ wordEn: englishWord });
  };

  changeStateWordRu = (russianWord) => {
    this.setState({ wordRu: russianWord });
  };

  componentDidMount() {
    let x = JSON.parse(localStorage.getItem("arr"));
    this.setState({ array: [x] });
  }

  updateState = (arr) => {
    let newArr = [...this.state.array, arr];
    localStorage.setItem("arr", JSON.stringify(newArr));
  };

  render() {
    return (
      <div>
        <AddEnglishWord
          onChangeIt={this.changeStateWord}
          onChangeItToo={this.changeStateWordRu}
          updateArray={this.updateState}
          wordE={this.state.wordEn}
          wordR={this.state.wordRu}
          array={this.state.array}
        />
      </div>
    );
  }
}

export default App;
