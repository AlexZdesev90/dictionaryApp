import "./App.css";
import AddEnglishWord from "./AddEnglishWord";
import React from "react";
import AddList from "./AddList";

class App extends React.Component {
  constructor(props) {
    super(props);
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
    this.setState({ array: (JSON.parse(localStorage.getItem("arr")) || []) });
    
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
        />
        <AddList array={this.state.array}/>
      </div>
    );
  }
}

export default App;
