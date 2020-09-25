// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge
// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) Imports a separate file called Dice so that this file can use the class and methods from the Dice file.
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component {
  constructor(props) {
    super(props)
    // 2) Holds values belonging to components that can dynamically change through a DOM.
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 3) Deconstructs some of the state objects so that developers don't have to keep writing this.state.object
    let { rollImages, diceLog } = this.state
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    // 4) Initializes a new variable that is equal to one of the index values of the state object rollImages.
    let newRoll = rollImages[randomNum]
    // 5) Sets the state of the state object currentPic to the value of newRoll, and the state object diceLog to every value inside the diceLog array and adds the value of newRoll. This way, the components are updated and visible on a webpage.
    this.setState({ currentPic: newRoll, diceLog: [...diceLog, newRoll] })
  }

  render() {
    const { currentPic, diceLog } = this.state
    return (
      <div id="board-container">
        //6 Passing the variable roll and currentPic as props to the child component Dice, giving it access to those objects and methods.
        <Dice
          roll={this.handleRoll}
          currentPic={currentPic}
        />
        <Log
          diceLog={diceLog}
        />
      </div>
    )
  }
}

export default Board



// src/component/Dice.js

import React, { Component } from 'react'

class Dice extends Component {
  // 7) Everything below the render allows react to display information from Dice on a webpage.
  render() {
    // 8) Deconstructs some of the state objects so that developers don't have to keep writing this.state.object 
    const { currentPic, roll } = this.props
    return (
      <div id="dice-container">
        <h2>Click to Roll</h2>
        <img
          id="dice-img"
          // 9) This essentially changes the name of the img file on the webpage.
          alt="images of dice"
          // 10) Sets the source of the image to whatevet the currentPic value is after going through the handleRoll method.
          src={currentPic}
          onClick={roll}
        />
      </div>
    )
  }
}

export default Dice
