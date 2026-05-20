import { Component } from "react";
import "./App.css";
import EmojiList from "./components/EmojiList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counts: JSON.parse(localStorage.getItem("counts")) || [0, 0, 0],
      emojis: ["😂", "😁", "🥰"],
      result: "",
    };
  }

  componentDidUpdate() {
    localStorage.setItem("counts", JSON.stringify(this.state.counts));
  }

  showResult = () => {
    const max = Math.max(...this.state.counts);
    const winnerIndex = this.state.counts.indexOf(max);

    this.setState({
      result: this.state.emojis[winnerIndex],
    });
  };

  addCount = (index) => {
    const newCounts = [...this.state.counts];

    newCounts[index]++;

    this.setState({
      counts: newCounts,
    });
  };

  clear = () => {
    localStorage.removeItem("counts");

    this.setState({
      counts: [0, 0, 0],
      result: "",
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Голосування за найкращий смайлик</h1>
        <EmojiList
          emojis={this.state.emojis}
          counts={this.state.counts}
          addCount={this.addCount}
        />
        <button className="firstBtn" onClick={this.showResult}>
          Показати результати
        </button>
        <button onClick={this.clear}>Очистити результати</button>
        <p className="winner">Переможець:</p>
        <h2>{this.state.result}</h2>
      </div>
    );
  }
}

export default App;
