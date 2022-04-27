const buttonPress1 = document.querySelector("#sound1button")
const buttonPress2 = document.querySelector("#sound2button")
const buttonPress3 = document.querySelector("#sound3button")
const buttonPress4 = document.querySelector("#sound4button")
const buttonPress5 = document.querySelector("#sound5button")

if(buttonPress == buttonpress1) {
            sound1.play();
        } else if { ()
})

const sound1 = new Audio();
sound1.src="C:/Users/leejo/OneDrive/Desktop/CodeNation/Week3/drumChallenge/chocobo-wark.mp3";

const sound2 = new Audio();
sound2.src="C:/Users/leejo/OneDrive/Desktop/CodeNation/Week3/drumChallenge/10.mp3";

const sound3 = new Audio();
sound3.src="C:/Users/leejo/OneDrive/Desktop/CodeNation/Week3/drumChallenge/doom-shotgun.mp3";

const sound4 = new Audio();
sound4.src="C:/Users/leejo/OneDrive/Desktop/CodeNation/Week3/drumChallenge/ff7-cursor.mp3";

const sound5 = new Audio();
sound5.src="C:/Users/leejo/OneDrive/Desktop/CodeNation/Week3/drumChallenge/wilhelm.mp3";


document.addEventListener("keydown", (event) => {
    if (event.keyCode == 81) {
        sound1.play();
    } else if (event.keyCode == 87) {
        sound2.play();
    } else if (event.keyCode == 69) {
        sound3.play();
    } else if (event.keyCode == 82) {
        sound4.play();
    } else if (event.keyCode == 84) {
        sound5.play();
    }
})

document.getElementById(id).sound1button;

document.getElementById("sound1button").play();
