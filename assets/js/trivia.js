var globalTime = 0;
var questionTime = 0;
var questionTimeLim = 0;

var titles = ["Dreams", "domed and divided by arches","slide off","pitifully thin","a proper human"];
var possibleQs = ["One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin","He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.","The bedding was hardly able to cover it and seemed ready to slide off any moment.","His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked.","'What's happened to me?' he thought. It wasn't a dream. His room, a proper human"];
var answers = [true, true, true, true, true];



$(document).ready(function () {
    class Question {
        constructor(){
            // var qCol = color(125,0,125);
            var qIndex = Math.floor(Math.random() *(possibleQs.length - 1));
            var que = possibleQs[qIndex];
            var ttl = titles[qIndex];
            var answ = answers[qIndex];
    
    
            var card = $("<div>");
            var cHead = $("<div>");
            var cBody = $("<div>");
            var cTitle = $("<div>");
    
            card.addClass("card");
            cHead.addClass("card-header");
            cBody.addClass("card-body");
            cTitle.addClass("card-title");
            
            cTitle.text(ttl);
            cBody.append(cTitle);
            cBody.append(que);
            cHead.text("Question");
            card.append(cHead);
            card.append(cBody);
        }
    
    }
    
    var newCard = new Question();
    console.log(newCard.cHead);
    // $(".question").append(newCard);

})