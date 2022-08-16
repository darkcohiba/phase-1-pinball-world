//variables
const gameList = document.querySelector(".game-list")
const image = document.querySelector("#detail-image")
const score = document.querySelector("#detail-high-score")
const title = document.querySelector("#detail-title")
const form = document.querySelector("#high-score-form")
const input = document.querySelector("#score-input")

//fetch function
fetch("http://localhost:3000/games")
    .then(res => res.json())
    .then(gameData => {

        //wishlist of functions to code!
        navBar(gameData)
        hiScore(gameData[0])

    })


//navbar function
function navBar(gameData){
    gameData.forEach(game => {
        let navItem = document.createElement("h5");
        navItem.innerText += `${game.name} (${game.manufacturer_name})`;
        navItem.id = "navGame";
        // gameList.appendChild(navItem);
        gameList.append(navItem);
        navItem.addEventListener("click", (e) => {
            hiScore(game)
        })
    })
}

let clickedGame;
//add hi score function
function hiScore(gameData){
    clickedGame = gameData;
    image.src = clickedGame.image;
    score.innerText = clickedGame.high_score;
    title.innerText = clickedGame.name;
}

//submit high score function
function submitHighScore(){
    form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        // clickedGame.high_score = e.target.value
        clickedGame.high_score = e.target["score-input"].value
        hiScore(clickedGame);
    })

}

submitHighScore()
