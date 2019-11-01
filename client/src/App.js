import React from 'react';
import axios from 'axios';
import './App.css';
import MappedPlayerCards from './components/MappedPlayerCards';

class App extends React.Component {
  state = {
    playerCards: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({
          playerCards: res.data
        });
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Searches</h1>
        <div className="women">
          <MappedPlayerCards playerCards={this.state.playerCards} />
        </div>
      </div>
    );
  }
}
export default App;
