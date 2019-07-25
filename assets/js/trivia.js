var globalTime = 0;
var questionTime = 0;
var questionTimeLim = 0;

var titles = ["Dreams", "domed and divided by arches", "slide off", "pitifully thin", "a proper human"];
var possibleQs = ["<p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin</p>", "<p>He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p>", "<p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>", "<p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.</p>", "<p>'What's happened to me?' he thought. It wasn't a dream. His room, a proper human</p>"];
var answers = [0, 0, 1, 1, 0];
let alreadyAnswered = [];

let currentCard;

let score = 0;

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


    constructor() {
        // var qCol = color(125,0,125);
        this.qIndex = Math.floor(Math.random() * (possibleQs.length - 1));
        if (alreadyAnswered.length >= 1) {
            for (let thing in alreadyAnswered) {
                if (thing === this.qIndex) {
                    this.qIndex = possibleQs[possibleQs.lastIndexOf()];
                }
            }
        }


        this.que = possibleQs[this.qIndex];
        this.ttl = titles[this.qIndex];
        this.answ = answers[this.qIndex];


        this.card = $("<div>");
        this.cHead = $("<div>");
        this.cBody = $("<div>");
        this.cTitle = $("<h3>");
        this.cButton0 = $("<button>");
        this.cButton1 = $("<button>");

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

        this.cButton0.attr("id", "zero");
        this.cButton1.attr("id", "one");
        this.cButton0.text("True");
        this.cButton1.text("False");

        this.cTitle.text(this.ttl);
        this.cBody.append(this.cTitle);
        this.cBody.append(this.que);
        this.cBody.append(this.cButton0);
        this.cBody.append(this.cButton1);
        this.cHead.text("Question");
        this.card.append(this.cHead);
        this.card.append(this.cBody);
    }

}


$(document).ready(function () {





    newQ();



})



function updateScore() {
    score++;
    $("#score-txt").text("Score: " + score);
}

function newQ() {
    if (currentCard != undefined) {
        alreadyAnswered.push(currentCard.qIndex);
    }
    $("#question").empty();
    let nuCard = new Question();
    currentCard = nuCard;
    $("#question").append(nuCard.card);
    console.log(nuCard);
    makeGame();

}

function makeGame() {
    $("#zero").on("click", function () {
        console.log("here");
        if (currentCard.answ === 0) {
            updateScore();
            newQ();
        } else if (currentCard.answ != 0) {
            alert("Wrong!");
            currentCard.cButton0.removeClass("btn-prmary");
            currentCard.cButton0.addClass('btn-secondary');
        }
    });

    $("#one").on("click", function () {
        if (currentCard.answ === 1) {
            updateScore();
            newQ();
        } else if (currentCard.answ != 1) {
            alert("Wrong!");
            currentCard.cButton1.removeClass("btn-prmary");
            currentCard.cButton1.addClass('btn-secondary');
        }
    });
}