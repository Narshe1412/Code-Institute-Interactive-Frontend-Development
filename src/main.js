$( document ).ready(function() {

    startButton.click(()=>{
        startGame();
    })
    
    blueButton.click(()=> {
        setBackground("blue");
    })

    redButton.click(()=> {
        setBackground("red");
    })

    yellowButton.click(()=> {
        setBackground("yellow");
    })

    greenButton.click(()=> {
        setBackground("green");
    })
});