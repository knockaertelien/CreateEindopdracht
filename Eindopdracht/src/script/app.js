'use strict';

// var url_generalKnowledge = "https://opentdb.com/api.php?amount=4&category=9&difficulty=easy&type=boolean";
// var url_scienceAndNature = "https://opentdb.com/api.php?amount=3&category=17&difficulty=easy&type=boolean";
// var url_computers = "https://opentdb.com/api.php?amount=4&category=18&difficulty=easy&type=boolean";
// var url_mathematics = "https://opentdb.com/api.php?amount=4&category=19&difficulty=easy&type=boolean";
// var url_sports = "https://opentdb.com/api.php?amount=4&category=21&difficulty=easy&type=boolean";
// var url_geography = "https://opentdb.com/api.php?amount=4&category=22&difficulty=easy&type=boolean";
// var url_art = "https://opentdb.com/api.php?amount=4&category=25&difficulty=easy&type=boolean";
// var url_vehicles = "https://opentdb.com/api.php?amount=4&category=28&difficulty=easy&type=boolean";
// var url_history = "https://opentdb.com/api.php?amount=4&category=23&difficulty=easy&type=boolean";
// var url_film = "https://opentdb.com/api.php?amount=4&category=11&difficulty=easy&type=boolean";
var question1 = undefined;
var answer0 = undefined;
var score = 0;
var showScore = undefined;

function initVars(){
    question1 = document.getElementById("question1");
    answer0 = document.getElementById("answer");
    showScore = document.getElementById("score");
}


var currentQuestion, currentAnswer;

function QuestionPageGeneral(functie) {
    var url_generalKnowledge = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean";
    var result2 = jQuery.getJSON(url_generalKnowledge, functie);
    return result2;
}
function nextQuestion(){
    QuestionPageGeneral(function (data) {
        data = data.results[0];
        currentQuestion = data.question;
        currentAnswer = data.correct_answer;
    
        showQuestion();
        showAnswerDebug();
    })
}

function QuestionPageArt(functie) {
    var url_generalKnowledge = "https://opentdb.com/api.php?amount=1&category=25&difficulty=easy&type=boolean";
    var result2 = jQuery.getJSON(url_generalKnowledge, functie);
    return result2;
}
function nextQuestion(){
    QuestionPageArt(function (data) {
        data = data.results[0];
        currentQuestion = data.question;
        currentAnswer = data.correct_answer;
    
        showQuestion();
        showAnswerDebug();
    })
}

function QuestionPageArt(functie) {
    var url_generalKnowledge = "https://opentdb.com/api.php?amount=4&category=11&difficulty=easy&type=boolean";
    var result2 = jQuery.getJSON(url_generalKnowledge, functie);
    return result2;
}
function nextQuestion(){
    QuestionPageArt(function (data) {
        data = data.results[0];
        currentQuestion = data.question;
        currentAnswer = data.correct_answer;
    
        showQuestion();
        //showAnswerDebug();
    })
}



function showQuestion(data) {
    question1.innerHTML = "" + currentQuestion;
}

function scoreOnDisplay(data){
    showScore.innerHTML = "Score: " + score;
}

function showAnswerDebug(data)
{
    if (currentAnswer == "True") {
        answer0.innerHTML = "answer: Yes";
    }
    else {
        answer0.innerHTML = "answer: No";
    }
}

document.addEventListener('DOMContentLoaded', function(){
    initVars();
    nextQuestion();
    scoreOnDisplay();

    var YesButton = document.querySelector('.YesButton');
    YesButton.addEventListener('click', function(e){e.preventDefault();
        if (currentAnswer == "True"){
            score ++;
            console.log(score);
        }
        
        nextQuestion();
        scoreOnDisplay();
    });

    var NoButton = document.querySelector('.NoButton');
    NoButton.addEventListener('click', function(e){e.preventDefault();
        if (currentAnswer == "False"){
            score ++;
            console.log(score);
        }
        
        nextQuestion();
        scoreOnDisplay();
    })
})



    


