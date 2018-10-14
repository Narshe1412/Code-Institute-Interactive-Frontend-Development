const startButton = $("#start-btn");
const blueButton = $("#blue-btn");
const redButton = $("#red-btn");
const yellowButton = $("#yellow-btn");
const greenButton = $("#green-btn");
const background = $("#game-background")

function setBackground(color) {
    background.addClass("bg-" + color)
    setTimeout(()=> {
        background.removeClass("bg-" + color)
    }, 1900)
}