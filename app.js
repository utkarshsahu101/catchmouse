// show index.html - index.html
function showIndexPage() {
  let playNowButton = document.getElementById("playNowButton");
  let gameType = document.getElementById('gameType');
  let highScoreOnIndexPage = document.createElement('DIV');
  function getCookie() {
    let highScore = document.cookie.split('=')[1];
    if(highScore == undefined) {
      highScore = 0;
    }
    return highScore;
  }
  highScoreOnIndexPage.innerHTML = "High Score: " + getCookie();
  gameType.appendChild(highScoreOnIndexPage);

  playNowButton.addEventListener('click', () => {
     setTimeout(()=>{
      window.location.href = "./game.html";
      console.log('test');
     }, 1000);
  })
}
// show game - game.html
function game() {
  function MoleAfterClicked(){
    moleImg.style.display = "block";
  }
  
  let userScore = 0;
  let userTime = 60;
  let showGameBody = document.querySelector('.showGameBody');
  let gameOverDiv = document.createElement('DIV');
  let score = document.getElementById('score');
  let time = document.getElementById('time');
  score.innerHTML += userScore;
  time.innerHTML += userTime;
  
  let highScore = "";
  let timeZero = setInterval(timer, 1000);
  function timer(){
    time.innerHTML = "TIME: " + userTime;
    userTime--;
  }
  
  function setCookie(userScore) {
    let highScore;
    document.cookie = "highScore="+userScore;
  }
  function getCookie() {
    let highScore = document.cookie.split('=')[1];
    if(highScore == undefined) {
      highScore = 0;
    }
    return highScore;
  }
  
  setTimeout(() => {
    showGameBody.innerHTML = "";
    clearInterval(timeZero);
    let textInsideGameOveDiv = document.createElement("DIV");
    textInsideGameOveDiv.innerHTML = "Game Over";
    gameOverDiv.appendChild(textInsideGameOveDiv);
    showGameBody.appendChild(gameOverDiv);
    gameOverDiv.className = "gameOver";
    textInsideGameOveDiv.className = "gameOverText";
    
    let yourScore = document.createElement('H6');
    yourScore.innerHTML = "Your Score: " + userScore;
    yourScore.className = "yourScore";
    textInsideGameOveDiv.appendChild(yourScore);
  
    let restartTime = 5;
    let timeCounter = restartTime;
    let gameRestartTime = document.createElement("DIV");
    gameRestartTime.innerHTML = "Game Restart In: " + timeCounter;
    timeCounter--;
    yourScore.appendChild(gameRestartTime);
    setInterval(() => {
      gameRestartTime.innerHTML = "Game Restart In: " + timeCounter;
      timeCounter--;
      yourScore.appendChild(gameRestartTime);
    }, 1000);
    clearInterval(interval);
    setTimeout(() => {
      window.location.href = "./index.html";
    }, restartTime*1000);
    
  }, (userTime+2)*1000);
  
  function moleClickedCheck(){
    userScore++;
  
    score.innerHTML = "Score: " + userScore;
    if(highScore < userScore) {
      setCookie(userScore);
    }
  }
  
  function createGameBody() {
    highScore = getCookie();
    let moleImgIDs = ["moleImg1", "moleImg2", "moleImg3", "moleImg4", "moleImg5", "moleImg6"];
    let randomNumber = Math.floor(Math.random() * moleImgIDs.length);
    let img = document.createElement('IMG');
    img.setAttribute("src", "mouse.png")
    img.className = "mole";
    document.getElementById(moleImgIDs[last]).innerHTML = "";
    document.getElementById(moleImgIDs[randomNumber]).appendChild(img);
    last=randomNumber;
    // let moleImg = document.getElementById(moleImgIDs[randomNumber]);
    img.addEventListener('click', moleClickedCheck);
  }
  let last = 0;
  let interval = setInterval(createGameBody, 1000);
  
}