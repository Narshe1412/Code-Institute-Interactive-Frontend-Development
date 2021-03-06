const defaultState = {
    currentLevel: 0,
    gameMode: "ladder",
    sequence: [],
    playerName: "anonymous",
    lost: false,
    canLose: false
}

// Setup Constants for different game modes
function setupRules(gameState) {
    switch (gameState.gameMode) {
        case "ladder":
            gameState.MAXLEVEL = 20;
            break;
        case "survival":
            gameState.MAXLEVEL = 500;
            break;
        case "strict":
            gameState.MAXLEVEL = 20;
            break;
        default:
            stopGame();
    }
}

function startGame(gameState = defaultState) {
    gameState.currentLevel = 5; //TODO change to 1 after testing
    gameState.lost = false;
    gameState.canLose = false;
    setupRules(gameState);
    gameState.sequence = generateSequence(gameState.MAXLEVEL);
    console.log(gameState.sequence)
    playGame(gameState)
}

function playGame(gameState) {
    while (gameState.lost === false) {
        let hasFailed = false;

        // Computer Turn
        playSequence(gameState.sequence, gameState.currentLevel);
        // Player Turn

        // Check if player has failed the sequence
        if (hasFailed) {
            // Survival fails instantly
            if (gameState.gameMode === "survival") {
                loseGame();
            }
            // Check if player can lose the game
            else if (gameState.currentLevel === 4 && gameState.canLose) {
                loseGame();
            }
            // Change the sequence on strict mode
            else {
                if (gameState.gameMode === "strict") {
                    gameState.sequence = generateSequence(gameState.MAXLEVEL);
                }
            }
        } else {
            // Increase a level if sequence is complete
            gameState.currentLevel++;

            // Check if player can start losing
            if (!gameState.canLose && gameState.currentLevel > 4) {
                gameState.canLose = true;
            }

            // Check win condition
            if (gameState.currentLevel > gameState.MAXLEVEL) {
                winGame();
            }
        }
        gameState.lost = true; //TODO
    }
}

function playSequence(sequence, level) {
    for (var index = 0; index < level; index++) {
        setTimeout((item) => {
            setBackground(sequence[item])
        }, index * 2000, index);
    }
}

function winGame() {
    // TODO Placeholder
}

function loseGame() {
    // TODO Placeholder
}

function stopGame() {
    // TODO Placeholder
}

function generateSequence(amount = 20) {
    let sequence = [];

    if ((typeof amount !== "number") || // If amount is not a number
        (amount <= 0) || // If amount is not higher than 1
        (amount % 1 > 0)) { // If amount is not integer
        return sequence;
    } else {
        for (let i = 0; i < amount; i++) {
            sequence.push(getColor(Math.floor((Math.random() * 4) + 1)));
        }
        return sequence;
    }
}

function getColor(num) {
    let gameColors = {
        1: "red",
        2: "green",
        3: "yellow",
        4: "blue"
    }
    return gameColors[num] ? gameColors[num] : '';
}
