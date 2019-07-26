var globalTime = 0;
var questionTime = 0;
var questionTimeLim = 0;

var titles = ["What's the name of this meme format?", "Who is this?", "Here he come", "Someone who is way too into anime is called?", "What's his name?", "What song did this guy sing?", "What are these called?", "What is it called when an unrelated link leads to this?"]

var possibleQs = ["assets/img/advice_animal.jpeg", "assets/img/chocolate_rain.jpeg", "assets/img/dat_boi.jpeg", "assets/img/death_note.jpeg", "assets/img/Joseph_Ducreux_Original_Self-Portrait.jpg", "assets/img/psy.jpeg", "assets/img/rage_comic.png", "assets/img/rickRolld.jpeg"];
var answer0 = ["Big Boys", "Titus Greensleeve", "Thanos", "Idiot", "Dingledan Fingersmith", "Chocolate Rain", "Angry Strip", "Rick Rolling"];
var answer1 = ["Advice Animal", "Edward Scissorhands", "That guy!!!", "Mr. Slappy", "Charles LaCroix", "Baby", "Mad Pictures", "Dick Bowling"];
var answer2 = ["Talking Heads", "Tay Zonday", "Dat boi!!!", "Mecha", "Joseph Ducreux", "Harlem Shake", "Annoyed Images", "Trick Trolling"];
var answer3 = ["Bigger Boys", "Naruto", "Sad Frog", "Weeaboo", "Joseph Ghiradelli", "Gangnam Style", "Rage Comics", "Richard tumbling"];

var answers = [1, 2, 2, 3, 2, 3, 3, 0];
let alreadyAnswered = [];

let currentCard;

let score = 0;

let timerRunning = false;
let qTimer = 0;
const qTimeLimit = 3000;

class Question {
    qIndex;
    que;
    ttl;
    answ;

    card;
    cHead;
    cBody;
    cTitle;
    cButton0;
    cButton1;
    cButton2;
    cButton3;


    constructor() {
        // var qCol = color(125,0,125);
        this.qIndex = checkForDupe(Math.floor(Math.random() * (possibleQs.length)));
        


        this.que = $('<img>');
        this.que.addClass("card-img-top");
        this.que.attr("id", "cardImg");
        this.que.attr("src", possibleQs[this.qIndex]);
        this.ttl = titles[this.qIndex];
        this.answ = answers[this.qIndex];


        this.card = $("<div>");
        this.cHead = $("<div>");
        this.cBody = $("<div>");
        this.cTitle = $("<h3>");
        this.cButton0 = $("<button>");
        this.cButton1 = $("<button>");
        this.cButton2 = $("<button>");
        this.cButton3 = $("<button>");

        this.card.addClass("card");
        this.card.addClass("bg-dark");
        this.card.addClass("text-white");
        this.cHead.addClass("card-header");
        this.cBody.addClass("card-body");
        this.cTitle.addClass("card-title");
        this.cButton0.addClass("btn");
        this.cButton0.addClass("btn-primary");
        this.cButton1.addClass("btn");
        this.cButton1.addClass("btn-primary");
        this.cButton2.addClass("btn");
        this.cButton2.addClass("btn-primary");
        this.cButton3.addClass("btn");
        this.cButton3.addClass("btn-primary");


        this.cButton0.attr("id", "zero");
        this.cButton1.attr("id", "one");
        this.cButton0.text(answer0[this.qIndex]);
        this.cButton1.text(answer1[this.qIndex]);
        this.cButton2.attr("id", "two");
        this.cButton3.attr("id", "three");
        this.cButton2.text(answer2[this.qIndex]);
        this.cButton3.text(answer3[this.qIndex]);

        this.cTitle.text(this.ttl);
        this.cBody.append(this.cTitle);
        this.cBody.append(this.que);
        this.cBody.append(this.cButton0);
        this.cBody.append(this.cButton1);
        this.cBody.append(this.cButton2);
        this.cBody.append(this.cButton3);
        this.cHead.text("Question");
        this.card.append(this.cHead);
        this.card.append(this.cBody);
    }

}


$(document).ready(function () {

    newQ();


})

function checkForDupe(indy){
    if(alreadyAnswered.length >= possibleQs.length){
        alert("Game Over! Score is: " + score);
    } else {
    if (alreadyAnswered.length >= 1) {
        console.log(alreadyAnswered.indexOf(indy));
        if (alreadyAnswered.indexOf(indy) != -1) {
            console.log("reset because of dupe: " + indy);
           let newIndex=  Math.floor(Math.random() * (possibleQs.length));
           console.log("new index: " + newIndex)
           checkForDupe(newIndex);
        } else if(alreadyAnswered.indexOf(indy) == -1) {
            console.log("not a dupe: " + indy);
            console.log(alreadyAnswered);
            return indy;
        }
    } else {
        console.log("first item: " + indy );
        return indy;
    }
}
}



function updateScore() {
    score++;
    $("#score-txt").text("Score: " + score);
}

function newQ() {
    if (currentCard != undefined) {
        alreadyAnswered.push(currentCard.qIndex);
        console.log(alreadyAnswered);
    }
    $("#question").empty();
    let nuCard = new Question();
    currentCard = nuCard;
    $("#question").append(nuCard.card);
    console.log(nuCard);
    makeGame();

}

function makeGame() {
    var timey = setTimeout(newQ, 5000);
    $("#zero").on("click", function () {
        console.log("here");
        if (currentCard.answ === 0) {
            updateScore();
            clearTimeout(timey);
            newQ();
        } else if (currentCard.answ != 0) {
            currentCard.cButton0.removeClass("btn-prmary");
            currentCard.cButton0.addClass('btn-secondary');
        }
    });

    $("#one").on("click", function () {
        if (currentCard.answ === 1) {
            updateScore();
            clearTimeout(timey);
            newQ();
        } else if (currentCard.answ != 1) {
            currentCard.cButton1.removeClass("btn-prmary");
            currentCard.cButton1.addClass('btn-secondary');
        }
    });

    $("#two").on("click", function () {
        console.log("here");
        if (currentCard.answ === 2) {
            updateScore();
            clearTimeout(timey);
            newQ();
        } else if (currentCard.answ != 2) {
            currentCard.cButton2.removeClass("btn-prmary");
            currentCard.cButton2.addClass('btn-secondary');
        }
    });

    $("#three").on("click", function () {
        if (currentCard.answ === 3) {
            updateScore();
            clearTimeout(timey);
            newQ();
        } else if (currentCard.answ != 3) {
            currentCard.cButton3.removeClass("btn-prmary");
            currentCard.cButton3.addClass('btn-secondary');
        }
    });


}