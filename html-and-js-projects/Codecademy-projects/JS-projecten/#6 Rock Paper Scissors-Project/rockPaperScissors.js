const getUserChoice = userInput => {

    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
        return userInput
    } else {
        console.log('Error, please type: rock, paper or scissors');
    }
}

console.log(getUserChoice('scissors'));

const getComputerChoice = () => {
const randomNumber = Math.floor (Math.random() * 3);
switch (randomNumber) {
case 0:
    return 'rock';
case 1:
    return 'paper';
case 2:
    return 'scissors';
}
};

/* to test
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
*/

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'You won! Bomb always wins.';
    }
    if (userChoice === computerChoice) {
        return 'This game is a tie';
    }


    if (userChoice === 'rock') { 
        if (computerChoice === 'paper') {
            return "Computer won!";
        } else { 
            return "You won!";
        }

    };


if (userChoice === 'paper') { 
    if (computerChoice === 'scissors') {
        return "Computer won!";
    } else { 
        return "You won!";
    }

}

if (userChoice === 'scissors') { 
    if (computerChoice === 'rock') {
        return "Computer won!";
    } else { 
        return "You won!";
    }

}

};

const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));


};

playGame();