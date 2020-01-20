$(document).ready(function() {
console.log("Awaiting orders...");

$("#container").animate({height: "80px"}, "medium");
$("#logo").delay(400).animate({left: ".3%"});
$("#desc").delay(700).fadeIn(400);
$("#beta").delay(700).fadeIn(400);
$("#tweety").delay(700).fadeIn(400);
$("#the-sheet, #second-sheet").delay(400).animate({left: "250px"}, "slow");

//the modular dice function//
function dice(num) {
    var math = Math.floor((Math.random() * num) + 1);
    return(math);
}

//Draggable test//
$('#the-sheet, #second-sheet').draggable( {
    appendTo: "body",
    scrollSpeed: 600,
    snap: false,
});



//dice counter and click events//
var diceArray = [];
var d4n = 0;
var d6n = 0;
var d8n = 0;
var d10n = 0;
var d12n = 0;
var d20n = 0;
$('#d4').on('click', function() {
    d4n++;    
    let counter = 'x' + d4n;
    diceArray.push(dice(4));
    console.log(counter);
    console.log(diceArray);    
});

$('#d6').on('click', function() {
    d6n++;    
    let counter = 'x' + d6n;
    diceArray.push(dice(6));
    console.log(counter);
    console.log(diceArray); 
});

$('#d8').on('click', function() {
    d8n++;    
    let counter = 'x' + d8n;
    diceArray.push(dice(8));
    console.log(counter);
    console.log(diceArray);   
});

$('#d10').on('click', function() {
    d10n++;    
    let counter = 'x' + d10n;
    diceArray.push(dice(10));
    console.log(counter);
    console.log(diceArray);    
});

$('#d12').on('click', function() {
    d12n++;    
    let counter = 'x' + d12n;
    diceArray.push(dice(12));
    console.log(counter);
    console.log(diceArray);     
});

$('#d20').on('click', function() {
    d20n++;    
    let counter = 'x' + d20n;
    diceArray.push(dice(20));
    console.log(counter);
    console.log(diceArray);     
});

});
