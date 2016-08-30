// $(function(){

//DATA MODEL
var payline = [null, null, null];
var bank = 20;
var payout = null;
var bet = null;
var symbolCounts = {};

var symbols = [
  {
    name: 'Ghost',
    image: 'images/ghost.png',
    pays: 100
  }, {
    name: 'Cherry',
    image: 'images/cherry.png',
    pays: 50
  }, {
    name: 'Chart',
    image: 'images/chart-upward-trend.png',
    pays: 30
  }, {
    name: 'Pineapple',
    image: 'images/pineapple.png',
    pays: 20
  }, {
    name: 'Diamond',
    image: 'images/diamond-with-dot.png',
    pays: 15
  }, {
    name: 'Crab',
    image: 'images/crab.png',
    pays: 10
  }, {
    name: 'Sunrise',
    image: 'images/sunrise.png',
    pays: 8
  }, {
    name: 'Wave',
    image: 'images/water-wave.png',
    pays: 6
  }, {
    name: 'Balloon',
    image: 'images/balloon.png',
    pays: 4
  }, {
    name: 'Wavy',
    image: 'images/wavy-dash.png',
    pays: 2
  }
];

var distribution = [0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9];

//CHECK FOR MATCHING SYMBOLS
function countSymbols() {
  symbolCounts = {};
  payline.forEach(function(symbol) {
    // check if key exists in counts for the current symbol
    if (symbolCounts[symbol]) {
      // increment count
      symbolCounts[symbol]++;
    } else {
      symbolCounts[symbol] = 1;
    }
  });
}

//COMPUTE PAYOUT
function computePayout() {

  // loop thru the symbolCounts object
  var keys = Object.keys(symbolCounts);
  for (var i=0; i < keys.length; i++) {
    if (symbolCounts[keys[i]] === 2) {
      payout = 2 * symbols[keys[i]].pays;
      break;
    } else if (symbolCounts[keys[i]] === 3) {
      payout = 10 * symbols[keys[i]].pays;
      break;
    } else {
      payout = 0;
    };
  }
  bank += payout;
  console.log(bank,payout,symbolCounts);
}

//VIEW

var intervalId
var intervalId2
var intervalId3

function spin(){
  intervalId =  setInterval(function(){
      $('#reelImage0').attr('src', symbols[distribution[Math.floor(Math.random() * distribution.length)]].image);
    },100);
  intervalId2 =  setInterval(function(){
      $('#reelImage1').attr('src', symbols[distribution[Math.floor(Math.random() * distribution.length)]].image);
    },100);
  intervalId3 =  setInterval(function(){
      $('#reelImage2').attr('src', symbols[distribution[Math.floor(Math.random() * distribution.length)]].image);
    },100);
}

function render() {
  setTimeout(function(){
    clearInterval(intervalId);
    $('#reelImage0').attr('src', symbols[payline[0]].image);
  }, 1000);
  setTimeout(function(){
    clearInterval(intervalId2);
    $('#reelImage1').attr('src', symbols[payline[1]].image);
  }, 2000);
  setTimeout(function(){
    clearInterval(intervalId3);
    $('#reelImage2').attr('src', symbols[payline[2]].image);
  }, 3000);
  setTimeout(function(){
    $('#payout').html(payout);
    $('#bank').html(bank);
  },3000);
};


//CONTROLLER
$('.buttons').on('click', function(){
    // generate symbols
  for (var i = 0; i < payline.length; i++) {
    payline[i] = distribution[Math.floor(Math.random() * distribution.length)];
  }
  bet = this.id;
  // set bet amount
  countSymbols();
  switch(bet) {
    case 'bet1':
      bank -= 1;
      computePayout();
      break;
    case 'bet2':
      bank -= 2;
      computePayout() * 2;
      break;
    case 'bet3':
      bank -= 3;
      computePayout() * 3;
      break;
  };
  spin();
  render();
})




// });
