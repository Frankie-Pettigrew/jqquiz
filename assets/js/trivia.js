var globalTime = 0;
var questionTime = 0;
var questionTimeLim = 0;

var titles = ["Dreams", "domed and divided by arches","slide off","pitifully thin","a proper human"];
var possibleQs = ["One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin","He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.","The bedding was hardly able to cover it and seemed ready to slide off any moment.","His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.","'What's happened to me?' he thought. It wasn't a dream. His room, a proper human"];
var answers = [true, true, true, true, true];



$(document).ready(function () {
    class Question {
        qIndex;
        que;
        ttl;
        answ;

        card;
        cHead;
        cBody;
        cTitle;


        constructor(){
            // var qCol = color(125,0,125);
            this.qIndex = Math.floor(Math.random() *(possibleQs.length - 1));
            this.que = possibleQs[this.qIndex];
            this.ttl = titles[this.qIndex];
            this.answ = answers[this.qIndex];
    
    
            this.card = $("<div>");
            this.cHead = $("<div>");
            this.cBody = $("<div>");
            this.cTitle = $("<div>");
    
            this.card.addClass("card");
            this.cHead.addClass("card-header");
            this.cBody.addClass("card-body");
            this.cTitle.addClass("card-title");
            
            this.cTitle.text(this.ttl);
            this.cBody.append(this.cTitle);
            this.cBody.append(this.que);
            this.cHead.text("Question");
            this.card.append(this.cHead);
            this.card.append(this.cBody);
        }
    
    }
    
    var newCard = new Question();
    console.log(newCard);
     $("#question").append(newCard.card);

})