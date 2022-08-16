//variables
const gameList = document.querySelector(".game-list");
const image = document.querySelector("#detail-image");
const score = document.querySelector("#detail-high-score");
const title = document.querySelector("#detail-title");
const form = document.querySelector("#high-score-form");


//challenge #1 fetch function 
fetch(`http://localhost:3000/games`)
  .then(response => response.json())
  .then(gameData => {
    navBar(gameData);
    addHiScore(gameData[0]);
  })

//challenge #1 and 3 navbar function
function navBar(gameData){
    gameData.forEach(game => {
        let navItem = document.createElement('h5');
        navItem.innerText = `${game.name} (${game.manufacturer_name})`
        gameList.append(navItem);
        navItem.addEventListener('click', (e) => {
            addHiScore(game)
        })
    })
}
//challenge #2 add hi score function
let clickedGame;
function addHiScore(gameData){
    clickedGame = gameData;
    image.src = clickedGame.image;
    title.textContent = clickedGame.name;
    score.textContent = clickedGame.high_score;
}

//challenge #4 submit high score function
function submitHighScore(){
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        clickedGame.high_score = e.target["score-input"].value;
        addHiScore(clickedGame);
    })
}




submitHighScore();
