$(function play(){

//DATA MODEL
var payline = [0,0,0]
var bank = 100;
var payout = null;
var bet = null;

//RANDOM NUMBER GENERATOR
$('.buttons').on('click', function(){
  var random1 = Math.floor((Math.random() * 10));
  payline.splice(0,1,random1);
  var random2 = Math.floor((Math.random() * 10));
  payline.splice(1,1,random2);
  var random3 = Math.floor((Math.random() * 10));
  payline.splice(2,1,random3);
  console.log(payline);
})

  //PAYOUT
$('#bet1').on('click', function(){
  $('#payout').html('');
  //3 Match
  if(payline === [0,0,0]){
    payout += 3300;
  }
  if(payline === [1,1,1]){
    payout += 2000;
  }
  if(payline === [2,2,2]){
    payout += 1000;
  }
  if(payline === [3,3,3]){
    payout += 500;
  }
  if(payline === [4,4,4]){
    payout += 250;
  }
  if(payline === [5,5,5]){
    payout += 100;
  }
  if(payline === [6,6,6]){
    payout += 80;
  }
  if(payline === [7,7,7]){
    payout += 30;
  }
  if(payline === [8,8,8]){
    payout += 15;
  }
  if(payline === [9,9,9]){
    payout += 3;
  }
  //2 Match
  if((payline[0] && payline[1] === 0) || (payline[0] && payline[2] === 0) || (payline[1] && payline[2] === 0)){
    payout += 100;
  }
  if((payline[0] && payline[1] === 1) || (payline[0] && payline[2] === 1) || (payline[1] && payline[2] === 1)){
    payout += 50;
  }
  if((payline[0] && payline[1] === 2) || (payline[0] && payline[2] === 2) || (payline[1] && payline[2] === 2)){
    payout += 25;
  }
  if((payline[0] && payline[1] === 3) || (payline[0] && payline[2] === 3) || (payline[1] && payline[2] === 3)){
    payout += 10;
  }
  if((payline[0] && payline[1] === 4 || 5 || 6) || (payline[0] && payline[2] === 4 || 5 || 6) || (payline[1] && payline[2] === 4 || 5 || 6)){
    payout += 5;
  }
  if((payline[0] && payline[1] === 7 || 8 || 9) || (payline[0] && payline[2] === 7 || 8 || 9) || (payline[1] && payline[2] === 7 || 8 || 9)){
    payout += 1;
  }
  //Single
  if(payline[0] === 0 || payline[1] === 0 || payline[2] === 0){
    payout += 5;
  }
  if(payline[0] === 1 || payline[1] === 1 || payline[2] === 1){
    payout += 2;
  }
  if(payline[0] === 2 || payline[1] === 2 || payline[2] === 2){
    payout += 1;
  } else {
    payout = 0;
  }
  console.log(payout);

  $('#payout').append(payout);
})


//VIEW

var $ghost = $( '<img src="images/ghost.png">' );
var $cherry = $( '<img src="images/cherry.png">' );
var $chartwut = $( '<img src="images/chart-upward-trend.png">' );
var $pineapple = $( '<img src="images/pineapple.png">' );
var $diamond = $( '<img src="images/diamond-with-dot.png">' );
var $crab = $( '<img src="images/crab.png">' );
var $sunrise = $( '<img src="images/sunrise.png">' );
var $wave = $( '<img src="images/water-wave.png">' );
var $balloon = $( '<img src="images/balloon.png">' );
var $wavy = $( '<img src="images/wavy-dash.png">' );



$('.buttons').on('click', function(){
  $('reel1').html();
  $('reel2').html();
  $('reel3').html();


  switch (payline[0]){
    case 0:
      $('#reel1').append($ghost);
      break;
    case 1:
      $('#reel1').append($cherry);
      break;
    case 2:
      $('#reel1').append($chartwut);
      break;
    case 3:
      $('#reel1').append($pineapple);
      break;
    case 4:
      $('#reel1').append($diamond);
      break;
    case 5:
      $('#reel1').append($crab);
      break;
    case 6:
      $('#reel1').append($sunrise);
      break;
    case 7:
      $('#reel1').append($wave);
      break;
    case 8:
      $('#reel1').append($balloon);
      break;
    case 9:
      $('#reel1').append($wavy);
      break;
    };

  switch (payline[1]){
    case 0:
      $('#reel2').append($ghost);
      break;
    case 1:
      $('#reel2').append($cherry);
      break;
    case 2:
      $('#reel2').append($chartwut);
      break;
    case 3:
      $('#reel2').append($pineapple);
      break;
    case 4:
      $('#reel2').append($diamond);
      break;
    case 5:
      $('#reel2').append($crab);
      break;
    case 6:
      $('#reel2').append($sunrise);
      break;
    case 7:
      $('#reel2').append($wave);
      break;
    case 8:
      $('#reel2').append($balloon);
      break;
    case 9:
      $('#reel2').append($wavy);
      break;
    };

    switch (payline[2]){
    case 0:
      $('#reel3').append($ghost);
      break;
    case 1:
      $('#reel3').append($cherry);
      break;
    case 2:
      $('#reel3').append($chartwut);
      break;
    case 3:
      $('#reel3').append($pineapple);
      break;
    case 4:
      $('#reel3').append($diamond);
      break;
    case 5:
      $('#reel3').append($crab);
      break;
    case 6:
      $('#reel3').append($sunrise);
      break;
    case 7:
      $('#reel3').append($wave);
      break;
    case 8:
      $('#reel3').append($balloon);
      break;
    case 9:
      $('#reel3').append($wavy);
      break;
    };

})

});
