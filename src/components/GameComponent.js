import React from 'react'
import rockImg from "../img/rock.png";
import paperImg from "../img/paper.png";
import scissorsImg from "../img/scissors.png";

export default function GameComponent (props) {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Rock Paper Scissors</h1>
            </header>

            <div className='score-board'>
                <div id='user-label' className='badge'>user</div>
                <div id='comp-label' className='badge'>comp</div>
                <span id='user-score'>{props.data.userScore}</span>
                :
                <span id='computer-score'>{props.data.computerScore}</span>
            </div>

            <div className='result'>
                <p>{props.data.result}</p>
            </div>

            <button className='choice' id='r' onClick={props.handleClick}>
                <img src={rockImg} alt="rock"/>
            </button>
            <button className='choice' id='p' onClick={props.handleClick}>
                <img src={paperImg} alt="paper"/>
            </button>
            <button className='choice' id='s' onClick={props.handleClick}>
                <img src={scissorsImg} alt="scissors"/>
            </button>

            <p className='action-message'>Make your move</p>
        </div>
    )
}
