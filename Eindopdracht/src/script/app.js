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


var question1 = document.getElementById("question1");
var answer0 = document.getElementById("answer");

function QuestionPageGeneral(functie) {
    var url_generalKnowledge = "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean";
    var result2 = jQuery.getJSON(url_generalKnowledge, functie);
    return result2;
}

function QuestionPageArt(functie) {
    var url_generalKnowledge = "https://opentdb.com/api.php?amount=4&category=25&difficulty=easy&type=boolean";
    var result2 = jQuery.getJSON(url_generalKnowledge, functie);
    return result2;
}

QuestionPageGeneral(question)
QuestionPageGeneral(answerOnScreen)
//QuestionPageArt(question)

function question(data) {
    console.log(data);
    var result_question = data.results[0].question;

    question1.innerHTML = "" + result_question;
}

function answerOnScreen(data)
{
    var answer = data.results[0].correct_answer;
    if (answer == "True") {
        console.log("answer: Yes");
        var answer = data.results[0].correct_answer;
        answer0.innerHTML = "answer: Yes";
    }
    else {
        console.log("answer: No");
        var answer = data.results[0].correct_answer;
        answer0.innerHTML = "answer: No";
    }
}



function ButtonNoClicked(data)
{
    console.log(data);
    var result_question1 = data.results[0].question;
    console.log("answer: Yes");
    // var answer = QuestionPageGeneral() data.results[i].correct_answer;
    alert(QuestionPageGeneral());
}​

// function ButtonYesClicked(data)
// {
//     console.log("answer: Yes");
//     // var answer = QuestionPageGeneral() data.results[i].correct_answer;
//     alert(QuestionPageGeneral());
// }​

    


