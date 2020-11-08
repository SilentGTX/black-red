let cardColor, cardType, randomColor, randomType;

//Red click
document.querySelector('.btn-red').addEventListener('click', () => randomCard('red'));

//Black click
document.querySelector('.btn-black').addEventListener('click', () => randomCard('black'));

let tablecredits = document.querySelector('.table-credits');

let credits = document.querySelector('.credits');

document.querySelector('#cashout').addEventListener('click', function() {
    credits.value = +credits.value + +tablecredits.value;
    tablecredits.value = 0;
});

let initialBet = 0;
let currentBet = 0;
let color = document.querySelector('.table-credits');
let youWon = document.querySelector('.you-won');
let youLose = document.querySelector('.you-lose');


//10 credits bet
document.getElementById('10').addEventListener('click', function() {
    tablecredits.value = +tablecredits.value + +10;
    initialBet += 10;
    credits.value -= 10;
    enableButtons()
    youLose.style.display = "none";
    youWon.style.display = "none";
});

//40 credits bet
document.getElementById('40').addEventListener('click', function() {
    tablecredits.value = +tablecredits.value + +40;
    initialBet += 40;
    credits.value -= 40;
    enableButtons()
    youLose.style.display = "none";
    youWon.style.display = "none";
});

//160 credits bet
document.getElementById('160').addEventListener('click', function() {
    tablecredits.value = +tablecredits.value + +160;
    initialBet += 160;
    credits.value -= 160;
    enableButtons()
    youLose.style.display = "none";
    youWon.style.display = "none";
});

//Random Color
cardColor = ['C', 'S', 'D', 'H'];

//Random Type
cardType = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'K', 'Q'];


function randomCard(color) {
    randomType = cardType[Math.floor(Math.random() * cardType.length)];
    randomColor = cardColor[Math.floor(Math.random() * cardColor.length)];
    let randomrandom = (randomType + randomColor);

    //update UI
    let cardDOM = document.querySelector('.dice');
    cardDOM.src = 'img/' + randomrandom + '.png'

    if (getCardColor(randomColor) === color) {
        console.log('winner');
        // credits.value = +credits.value + (+tablecredits.value * 2);
        tablecredits.value = +tablecredits.value * +2;
        // color.style = "color:#00ff40"
        youWon.style.display = "block";
    } else {
        console.log('losser');
        initialBet = 0;
        tablecredits.value = 0;
        disableButtons()
        youWon.style.display = "none";
        youLose.style.display = "block";

    }
}

function getCardColor(color) {
    //check if winner
    if (color === 'D' || color === 'H') {
        return 'red';
    } else {
        return 'black';
    }
}


function enableButtons() {
    const enable1 = document.querySelector('.btn-red');
    enable1.disabled = false;
    const enable2 = document.querySelector('.btn-black');
    enable2.disabled = false;
}


function disableButtons() {
    const enable1 = document.querySelector('.btn-red');
    enable1.disabled = true;
    const enable2 = document.querySelector('.btn-black');
    enable2.disabled = true;
}