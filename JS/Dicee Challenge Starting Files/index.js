const rendomDiceSelector = () => {
    let dice1 = Math.floor((Math.random() * 6) + 1);
    let dice2 = Math.floor((Math.random() * 6) + 1);
    return [dice1, dice2]
}

let output = rendomDiceSelector();
let dice1 = output[0];
let dice2 = output[1];

switch (dice1) {
    case 1:
        document.querySelector(".img1").classList.add('dice1');
        break;
    case 2:
        document.querySelector(".img1").classList.add('dice2');
        break;
    case 3:
        document.querySelector(".img1").classList.add('dice3');
        break;
    case 4:
        document.querySelector(".img1").classList.add('dice4');
        break;
    case 5:
        document.querySelector(".img1").classList.add('dice5');
        break;
    case 6:
        document.querySelector(".img1").classList.add('dice6');
        break;
}

switch (dice2) {
    case 1:
        document.querySelector(".img2").classList.add('dice1');
        break;
    case 2:
        document.querySelector(".img2").classList.add('dice2');
        break;
    case 3:
        document.querySelector(".img2").classList.add('dice3');
        break;
    case 4:
        document.querySelector(".img2").classList.add('dice4');
        break;
    case 5:
        document.querySelector(".img2").classList.add('dice5');
        break;
    case 6:
        document.querySelector(".img2").classList.add('dice6');
        break;
}