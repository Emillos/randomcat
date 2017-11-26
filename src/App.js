import React, { Component } from 'react';
import './App.css';

const tasks = [
  'Vandfald',
  'Giv 1 ud',
  'Reglkort',
  'Tissekort',
  '7 kabale',
  'Reglkort',
  'Emnekort',
  'Give ud 1',
  'Give ud 2',
  'Give ud 3',
  'Give ud 4',
  'Give ud 5',
  'Drik selv 1',
  'Drik selv 2',
  'Drik selv 3',
  'Drik selv 4',
  'Drik selv 5',
  'Konge',
];

class App extends Component {
 constructor(props){
    super(props);
    this.state = {
      pickedTasks: [],
      currentTask:[],
      opgaveCounter:0
    };
  }
  pickACard(){
    var item = tasks[Math.floor(Math.random()*tasks.length)];

    this.setState({
      pickedTasks:this.state.currentTask.concat(this.state.pickedTasks),
      currentTask:[item],
      opgaveCounter: this.state.opgaveCounter + 1
    })
  } 
  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      this.pickACard();
    }
  }

  render() {
    return (
      <div className="App" onKeyPress={this.handleKeyPress} tabIndex='0'>
        <header className="App-header">
          <h1 className="App-title">STJERNERNES MIDDAG!!!</h1>
          <div>
            <h1 style={{color:'red'}}>{this.state.currentTask}</h1>
          </div>
          <span style={{color:'#d3d3d3', fontSize:12, textAlign:'right'}}>OpgaveTæller: {this.state.opgaveCounter}</span>
        </header>
        <div className="App-intro" >
          <h2>Tryk enter og få din næste opgave!</h2>
          <div className='taskHistory'>
            <h4>Opgavehistorik</h4>
            {this.state.pickedTasks.map((task, i) => {
              return <h5 key={i} style={{color:'#d3d3d3'}}>{task}</h5>
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
