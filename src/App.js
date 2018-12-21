import React, { Component } from 'react';

import './App.css';
import Box from './components/box';
import Winner from './components/winner';

class App extends Component {

  state = {
    userMoves: [],
    computerMoves: [],
    possibilities: {
      1: [[2, 3], [5, 9], [4, 7]],
      2: [[1, 3], [5, 8]],
      3: [[2, 1], [6, 9], [5, 7]],
      4: [[1, 7], [5, 6]],
      5: [[2, 8], [4, 6], [3, 7], [1, 9]],
      6: [[4, 5], [3, 9]],
      7: [[1, 4], [3, 5], [8, 9]],
      8: [[2, 5], [7, 9]],
      9: [[3, 6], [1, 5], [7, 8]]
    },
    winner: '',
    turn: 'user',
    filled: false
  }

  playAgain = () => {
    this.setState({
      userMoves: [],
      computerMoves: [],
      winner: '',
      turn: 'user',
      filled: false
    })
  }

  showResults = (player) => {
    console.log(`${player} won`);
    this.setState({
      winner: player
    });
  }

  isGameOver = (player) => {
    console.log('called with ', player);

    let { possibilities, userMoves, computerMoves } = this.state;
    let flag = false;
    let target = player === 'user' ? userMoves : computerMoves;
    for (let i = 0; i < target.length; i++) {
      const move = target[i]; // get a move from either user or computer moves
      const lines = possibilities[move];
      // traverse through each lines which can be formed with current move
      for (let j = 0; j < lines.length; j++) {
        const line = lines[j];
        for (let k = 0; k < line.length; k++) {
          const point = line[k];
          console.log(`checking for ${point} in ${target}`);
          if (!target.includes(point)) {
            flag = false;
            break;
          }
          flag = true;
        }
        console.log(line, flag);
        if (flag) {
          // this.showResults(player);
          return true;
        }
      }
    }
    return flag;
  }

  handleUserMove = (event) => {
    if (this.state.turn === 'user') {
      console.log(this.state.userMoves.length);
      let target = event.target;
      let moves = this.state.userMoves;
      let { computerMoves } = this.state;
      if (moves.includes(parseInt(event.target.id)) || computerMoves.includes(parseInt(event.target.id))) {
        this.setState({ filled: true });
      }
      else {
        moves.push(parseInt(event.target.id));
        this.setState({
          userMoves: moves,
          turn: 'computer',
          filled: false
        });
        target.innerHTML = "X";
        let length = this.state.userMoves.length + this.state.computerMoves.length;
        if (this.state.userMoves.length >= 3) {
          if (this.isGameOver('user')) {
            this.showResults('user');
            return;
          };
        }
        if (length < 8) {
          const val = this.ComputerMoves();
          if (this.state.computerMoves.length >= 3) {
            if (this.isGameOver('computer')) {
              this.showResults('computer');
              return;
            }
          }
          setTimeout(() => {
            document.getElementById(val).innerHTML = "O";
            this.setState({ turn: 'user' });
          }, 800);
          console.log(this.state);
        } else {
          setTimeout(() => {
            this.setState({ winner: 'tie' });
          }, 100);
        }
      }
    }
  }

  ComputerMoves = () => {
    let val = Math.floor(Math.random() * 9) + 1;
    let { computerMoves, userMoves } = this.state;
    while (computerMoves.includes(val) || userMoves.includes(val)) {
      val = Math.floor(Math.random() * 9) + 1;
    }
    computerMoves.push(val);
    this.setState({ computerMoves });
    return val;
  }

  render() {
    if (this.state.winner) {
      let winner = this.state.winner;
      if (winner === 'user') {
        return (
          <Winner playAgain={this.playAgain} user={this.state.userMoves} computer={this.state.computerMoves} status="User Won"></Winner>
        );
      } else if (winner === 'computer') {
        return (
          <Winner playAgain={this.playAgain} user={this.state.userMoves} computer={this.state.computerMoves} status="Computer Won"></Winner>
        );
      } else {
        return (
          <Winner playAgain={this.playAgain} user={this.state.userMoves} computer={this.state.computerMoves} status="Game tied"></Winner>
        );
      }
    }
    else {
      let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      let turn = this.state.turn === 'user' ? "Your" : "Computer's"
      const idNames = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
      }
      let boxes = a.map(id => {
        return (
          <div className="col-4 px-0" key={id}>
            <Box id={id} idName={idNames[id]} clickEvent={this.handleUserMove} />
          </div>
        );
      });
      return (
        <div className="App">
          <div className="container">
            <div className="mt-5 heading">Tic Tac Toe </div>
            <div className="row boxWrap mt-4">
              {boxes}
            </div>
            <div className="mt-3 turn">
              {!this.state.filled ? turn + ' turn' : "Box Already Filled !!"}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
