import React from 'react';
import GameComponent from "./GameComponent";

export default class GameContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userScore: 0,
            computerScore: 0,
            result:'Ready? set... GO!',
        }
    }

    handleClick = (e) => {
        const userChoice = e.currentTarget.id;
        this.game(userChoice);
    };

    getComputerChoice = () => {
        const choices =['r','p','s'];
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    game = (userChoice) => {
        const computerChoice = this.getComputerChoice();
        switch (userChoice + computerChoice) {
            case 'rs':
            case 'pr':
            case 'sp':
                this.win(userChoice, computerChoice);
                break;
            case 'rp':
            case 'ps':
            case 'sr':
                this.lost(userChoice, computerChoice);
                break;
            case 'rr':
            case 'pp':
            case 'ss':
                this.draw(userChoice, computerChoice);
                break;
            default:
        }
    };

    convertToWord = (letter) => {
        if (letter === 'r') {return 'Rock'}
        if (letter === 'p') {return 'Paper'}
        if (letter === 's') {return 'Scissors'}
    };

    win = (userChoice, computerChoice) => {
        this.setState(prev => {
            return {
                userScore: prev.userScore + 1,
                result: `${this.convertToWord(userChoice)}(user) beat  ${this.convertToWord(computerChoice)}(comp). you win`
            };
        });
        document.getElementById(userChoice).classList.add('green-glow');
        setTimeout(() => {document.getElementById(userChoice).classList.remove('green-glow')}, 300);
    };

    lost = (userChoice, computerChoice) => {
        this.setState(prev => {
            return {
                computerScore: prev.computerScore + 1,
                result: `${this.convertToWord(computerChoice)}(comp) beat ${this.convertToWord(userChoice)}(user). you lost`
            }
        })
        document.getElementById(userChoice).classList.add('red-glow');
        setTimeout(() => {document.getElementById(userChoice).classList.remove('red-glow')}, 300);
    };

    draw = (userChoice, computerChoice) => {
        this.setState(prev => {
            return {
                result: `${this.convertToWord(computerChoice)} and ${this.convertToWord(userChoice)}. draw~`
            }
        })
    };

    render() {

        return (
            <GameComponent
                handleClick={this.handleClick}
                data={this.state}
            />
        )
    }

}
