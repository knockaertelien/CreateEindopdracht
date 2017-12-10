'use strict';

var category = undefined,currentQuestion = undefined, currentAnswer = undefined, question1 = undefined, answer0 = undefined, score = 0, showScore = undefined, scoreIncorrect = undefined, scoreCorrect = undefined, showVictoryContent = undefined, hideVictoryContent = undefined, showGeneralContent = undefined, hideGeneralContent = undefined;

var categories = [{
    id: "9",
    url: "https://opentdb.com/api.php?amount=1&category=9&type=boolean",
    name: "General"
},{
    id: "17",
    url: "https://opentdb.com/api.php?amount=1&category=17&type=boolean",
    name: "Science"
},{
    id: "18",
    url: "https://opentdb.com/api.php?amount=1&category=18&type=boolean",
    name: "Computers"
},{
    id: "19",
    url: "https://opentdb.com/api.php?amount=1&category=19&type=boolean",
    name: "Mathematics"
},{
    id: "21",
    url: "https://opentdb.com/api.php?amount=1&category=21&type=boolean",
    name: "Sports"
},{
    id: "22",
    url: "https://opentdb.com/api.php?amount=1&category=22&type=boolean",
    name: "Geography"
},{
    id: "25",
    url: "https://opentdb.com/api.php?amount=1&category=25&type=boolean",
    name: "Art"
},{
    id: "28",
    url: "https://opentdb.com/api.php?amount=1&category=28&type=boolean",
    name: "Vehicles"
},{
    id: "23",
    url: "https://opentdb.com/api.php?amount=1&category=23&type=boolean",
    name: "History"
},{
    id: "11",
    url: "https://opentdb.com/api.php?amount=1&category=11&type=boolean",
    name: "Movies"
},]

function initVars() {
    question1 = document.getElementById("question1");
    answer0 = document.getElementById("answer");
    showScore = document.getElementById("score");
    scoreCorrect = document.getElementById("scoreCorrect");
    scoreIncorrect = document.getElementById("scoreIncorrect");
    hideGeneralContent = document.getElementById("general_div");
    showGeneralContent = document.getElementById("general_div");
    hideVictoryContent = document.getElementById("victoryyy");
    showVictoryContent = document.getElementById("victoryyy");
    category = getCategory();
}

function getCategory() {
	var query = window.location.href.split("cat=")[1];
	for (var cat in categories){
		if (categories[cat].id === query)
			return categories[cat].url;
	}
	return null;
}

function QuestionPage(functie) {
    var url = category;
    var result = jQuery.getJSON(url, functie);
    return result;
    console.log(result);
}

function nextQuestion() {
    QuestionPage(function (data) {
        data = data.results[0];
        currentQuestion = data.question;
        currentAnswer = data.correct_answer;
        showQuestion();
    })
}



function controleScore(){
    if (score == 10){
        showVictory();
    }
}

function showVictory(){
    showVictoryContent.style.display = "flex";
    showVictoryContent.style.alignItems = "center";
}

function showQuestion(data) {
    question1.innerHTML = "" + currentQuestion;
}

function scoreOnDisplay(data) {
    showScore.innerHTML = "Score: " + score;
}

function correct(data) {
    scoreCorrect.innerHTML = "THAT IS CORRECT! <br>KEEP UP THE GOOD WORK!";
}

function notCorrect(data) {
    scoreCorrect.innerHTML = "THAT IS INCORRECT ... <br>TRY HARDER!";
}

function changeScore(state){
    score ++;
    controleScore();
}

document.addEventListener('DOMContentLoaded', function () {
    initVars();
    nextQuestion();
    scoreOnDisplay();

    

    if (category === null){
        return window.location = "index.html";
    }

    var YesButton = document.querySelector('.YesButton');
    YesButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentAnswer == "True") {
            correct();
            changeScore();
        }
        else {
            notCorrect();
        }
        nextQuestion();
        scoreOnDisplay();
    });

    var NoButton = document.querySelector('.NoButton');
    NoButton.addEventListener('click', function (e) {
        e.preventDefault();
        if (currentAnswer == "False") {
            correct();
            changeScore();
        }
        else {
            notCorrect();
        }
        nextQuestion();
        scoreOnDisplay();
    })
})