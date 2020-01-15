$(document).ready(function() {
console.log("Awaiting orders...");
//Shake effects for the dice//
//$('.the_dice').on('mouseover', function() {
   // $(this).effect('shake', {times: 1}, {distance: 1}, '400');
   // $(this).mouseleave().stop();
//});

//Draggable test//
$('#the-sheet, #second-sheet').draggable( {
    appendTo: "body",
    scrollSpeed: 600,
    snap: false,
});

//dice counter fade in//
var d4n = 0;
var d6n = 0;
var d8n = 0;
var d10n = 0;
var d12n = 0;
var d20n = 0;
$('#d4').on('click', function() {
    d4n++;    
    let counter = 'x' + d4n;
    console.log(counter);    
});

$('#d6').on('click', function() {
    d6n++;    
    let counter = 'x' + d6n;
    console.log(counter);    
});

$('#d8').on('click', function() {
    d8n++;    
    let counter = 'x' + d8n;
    console.log(counter);    
});

$('#d10').on('click', function() {
    d10n++;    
    let counter = 'x' + d10n;
    console.log(counter);    
});

$('#d12').on('click', function() {
    d12n++;    
    let counter = 'x' + d12n;
    console.log(counter);    
});

$('#d20').on('click', function() {
    d20n++;    
    let counter = 'x' + d20n;
    console.log(counter);    
});

});
