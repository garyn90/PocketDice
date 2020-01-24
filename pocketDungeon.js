$(document).ready(function() {
console.log("Awaiting orders...");

//the modular dice function//
function dice(num) {
    var math = Math.floor((Math.random() * num) + 1);
    return(math);
}

//dice counter and click events//
var d4Array = [];
var d6Array = [];
var d8Array = [];
var d10Array = [];
var d12Array = [];
var d20Array = [];
var d4n = 0;
var d6n = 0;
var d8n = 0;
var d10n = 0;
var d12n = 0;
var d20n = 0;
$('#d4').on('click', function() {
    d4n++;    
    let counter = 'x' + d4n;
    d4Array.push(dice(4));
    $('#d4textCounter').text(counter);
    console.log(counter);
    console.log(d4Array);    
});

$('#d6').on('click', function() {
    d6n++;    
    let counter = 'x' + d6n;
    d6Array.push(dice(6));
    $('#d6textCounter').text(counter);
    console.log(counter);
    console.log(d6Array); 
});

$('#d8').on('click', function() {
    d8n++;    
    let counter = 'x' + d8n;
    d8Array.push(dice(8));
    $('#d8textCounter').text(counter);
    console.log(counter);
    console.log(d8Array);   
});

$('#d10').on('click', function() {
    d10n++;    
    let counter = 'x' + d10n;
    $('#d10textCounter').text(counter);
    d10Array.push(dice(10));
    console.log(counter);
    console.log(d10Array);    
});

$('#d12').on('click', function() {
    d12n++;    
    let counter = 'x' + d12n;
    d12Array.push(dice(12));
    $('#d12textCounter').text(counter);
    console.log(counter);
    console.log(d12Array);     
});

$('#d20').on('click', function() {
    d20n++;    
    let counter = 'x' + d20n;
    d20Array.push(dice(20));
    $('#d20textCounter').text(counter);
    console.log(counter);
    console.log(d20Array);     
});


//Button roll//
$("#roll-button").on("click", function() {
    $("#textarea").val(d4Array + " " + d6Array + " " + d8Array + " " + d10Array + " " + d12Array + " " + d20Array);
      d4Array = [];
      d6Array = [];
      d8Array = [];
      d10Array = [];
      d12Array = [];
      d20Array = [];
      d4n = 0;
      d6n = 0;
      d8n = 0;
      d10n = 0;
      d12n = 0;
      d20n = 0;
      $('#d4textCounter').text(d4n);
      $('#d6textCounter').text(d6n);
      $('#d8textCounter').text(d8n);
      $('#d10textCounter').text(d10n);
      $('#d12textCounter').text(d12n);
      $('#d20textCounter').text(d20n);
});


//Reset button//
$("#reset-button").on("click", function() {
      d4Array = [];
      d6Array = [];
      d8Array = [];
      d10Array = [];
      d12Array = [];
      d20Array = [];
      d4n = 0;
      d6n = 0;
      d8n = 0;
      d10n = 0;
      d12n = 0;
      d20n = 0;
      $('#d4textCounter').text(d4n);
      $('#d6textCounter').text(d6n);
      $('#d8textCounter').text(d8n);
      $('#d10textCounter').text(d10n);
      $('#d12textCounter').text(d12n);
      $('#d20textCounter').text(d20n);
});


});
