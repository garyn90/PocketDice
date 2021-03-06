$(document).ready(function() {
console.log("Awaiting orders...");

//the modular dice function//
function dice(num) {
    var math = Math.floor((Math.random() * num) + 1);
    return(math);
}

//individual dice arrays and counters below//

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
var allTheDice = [];

$('#d4').on('click', function() {
    d4n++;    
    let counter = 'x' + d4n;
    d4Array.push(dice(4));
    $('#d4textCounter').text(counter);
});

$('#d6').on('click', function() {
    d6n++;    
    let counter = 'x' + d6n;
    d6Array.push(dice(6));
    $('#d6textCounter').text(counter);
});

$('#d8').on('click', function() {
    d8n++;    
    let counter = 'x' + d8n;
    d8Array.push(dice(8));
    $('#d8textCounter').text(counter);
});

$('#d10').on('click', function() {
    d10n++;    
    let counter = 'x' + d10n;
    $('#d10textCounter').text(counter);
    d10Array.push(dice(10));
});

$('#d12').on('click', function() {
    d12n++;    
    let counter = 'x' + d12n;
    d12Array.push(dice(12));
    $('#d12textCounter').text(counter);
});

$('#d20').on('click', function() {
    d20n++;    
    let counter = 'x' + d20n;
    d20Array.push(dice(20));
    $('#d20textCounter').text(counter);
});

//the button roll//

$("#roll-button").on("click", function() {
   
//diceString is the text string that gets displayed in the textarea for the user

  let diceString = '';

//each value in each dice array is sorted into new array, 'allTheDice' 

  d4Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d6Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d8Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d10Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d12Array.forEach(function(item) {
    allTheDice.push(item);
  });
  d20Array.forEach(function(item) {
    allTheDice.push(item);
  });

//this function filters out any modifier with the value of '0', then parseInts any other value and adds to the roll 
  modifierFilter();
  function modifierFilter() {
    let userProf = $('#prof-select').val();
    let userAbili = $('#abili-select').val();
    let userOther = $('#other-select').val();
    if(userProf !== "0") {
      allTheDice.push(parseInt(userProf));
      console.log(userProf);
    }
    if(userAbili !== "0") {
      allTheDice.push(parseInt(userAbili));
      console.log(userAbili);
    }
    if(userOther !== "0") {
      allTheDice.push(parseInt(userOther));
      console.log(userOther);
    }
  }

//turns all dice rolls & modifiers into presentable text for user
  for (let i = 0; i < allTheDice.length; i++) {
    if(i === allTheDice.length - 1 ) {
      diceString += allTheDice[i] + ' =';
    }
    else {
      diceString += allTheDice[i] + ' + ';
    }
  }

//allTheDice array total .reduce function - essentially iterates through the aTD array, and stores the total in diceTotal, which gets concat'd into diceString 
  const diceTotal = allTheDice.reduce((accumulator, currentNum) => {
    return accumulator + currentNum;
  }, 0);
  diceString += ' ' + diceTotal;
  console.log(diceString);
  $('#textarea').val(diceString); 
  
//after the user clicks on the roll button all arrays, values and strings get reset
  diceString = '';  
  d4Array = [];
  d6Array = [];
  d8Array = [];
  d10Array = [];
  d12Array = [];
  d20Array = [];
  allTheDice = [];
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
  $('#prof-select, #abili-select, #other-select').val('0');
});

//reset button, for the user to reset their inputs themselves, before the roll//
$("#reset-button").on("click", function() {
  diceString = '';
  d4Array = [];
  d6Array = [];
  d8Array = [];
  d10Array = [];
  d12Array = [];
  d20Array = [];
  allTheDice = [];
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
  $('#textarea').val('');
  $('#prof-select, #abili-select, #other-select').val('0');
});

}); 

//end of the line, cowboy


