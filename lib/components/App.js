const React = require('react');
const ReactDOM = require('react-dom');
import scoreWord from '../helpers/score-word.js';

export default class App extends React.Component{
  constructor() {
    super();
    this.state = {
      playedWord: '',
      playedWordScore: null
    };
    this.scoreWord = scoreWord;
  }

  typeWord(e) {
    this.setState({ playedWord: e.target.value });
  }

  displayScore() {
    let val = this.scoreWord(this.state.playedWord);
    this.setState({ playedWordScore: val});
  }

  render() {
    return(
      <div>
      <h1>Scrabble</h1>
      <input value={this.state.playedWord} onChange={(e)=>this.typeWord(e)}/>
      <button onClick={()=>this.displayScore()}>Score Word</button>
      <h2>{this.scoreWord(this.state.playedWord)}</h2>
      <h3>{this.state.playedWordScore}</h3>
      </div>
    )
  }
}
