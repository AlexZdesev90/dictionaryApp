import "./App.css";
import AddEnglishWord from "./AddEnglishWord";
import React from "react";
import AddList from "./AddList";
import Edit from './Edit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wordEn: "",
      wordRu: "",
      array: [],
      editMode: false
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
    this.setState({array : newArr })
  };

  openEdit = () => {
    this.setState({editMode: true})
  }

  closeEdit = () => {
    this.setState({editMode: false})
  }

  delete = (el) => {
    const newArray = this.state.array.filter((item) => item !== el);
    this.setState({array: newArray})
  }

  render() {
    return (
      <div>
        {this.state.editMode ? <Edit closeEdit={this.closeEdit} array={this.state.array} delete={this.delete}/> : <span>
          <AddEnglishWord
            onChangeIt={this.changeStateWord}
            onChangeItToo={this.changeStateWordRu}
            updateArray={this.updateState}
            wordE={this.state.wordEn}
            wordR={this.state.wordRu}
          />
          <AddList array={this.state.array}
            
            />
          <button onClick={this.openEdit}>Edit</button>
        </span>}
      </div>
    );
  }
}

export default App;
