// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  const scoreParagraph = document.getElementById('score');

  scoreParagraph.textContent = `${game.userName}: ${game.score.user} v CPU ${game.score.cpu}`;
}


// updateGameHistoryUI
function updateGameHistoryUI(){
  const gameHistoryParagraph = document.getElementById(`game-history`);

  game.gameHistoryParagraph.textContent = '';

  game.gameHistoryLog.array.forEach((entry) => {
    const entryElement = document.createElement('p');
    entryElement.textContent = entry;
    gameHistoryParagraph.appendChild(entryElement)
  });

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.value
  game = new RockPaperScissors(username);
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  
  const userSelection = userSelection.value;

  game.play(userSelection);

  updateScoreTallyUI();

  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
const resetGameButton = document.getElementById(`reset-game-button`)

 resetGameButton.addEventListener(`click`, function(e) { 
  game = new RockPaperScissors(userName);

  updateScoreTallyUI();
  updateGameHistoryUI();
});