function PlaySound (key) {
            switch(key){
            case "w":
                let tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;
            case "a":
                let tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;

            case "s":
                let tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;

            case "d":
                let tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;

            case "j":
                let snare = new Audio("./sounds/snare.mp3")
                snare.play();
                break;

            case "k":
                let kick_bass = new Audio("./sounds/kick-bass.mp3")
                kick_bass.play();
                break;

            case "l":
                let crash = new Audio("./sounds/crash.mp3")
                crash.play();
                break;
        }
}

for(let i = 0; i<7; i++){
    document.getElementsByClassName("drum")[i].addEventListener("click", function  () {

        let buttonClicked = this.innerHTML;
        PlaySound(buttonClicked);
        buttonAnimation(buttonClicked);

})}

document.addEventListener("keydown", function (event) {
    // console.log(event.key);
    PlaySound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
    document.querySelector('.' + currentKey).classList.add("pressed");
    setTimeout(function ()
    {document.querySelector('.' + currentKey).classList.remove("pressed")},100)
}