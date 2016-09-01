// $(function(){

//DATA MODEL
var payline = [null, null, null];
var bank = 20;
var payout = null;
var bet = null;
var betAmt;
var symbolCounts = {};

var distribution = [0,0,0,1,1,1,1,1,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];

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
      payout = symbols[keys[i]].pays * betAmt;
      break;
    } else if (symbolCounts[keys[i]] === 3) {
      renderWin();
      payout = 10 * symbols[keys[i]].pays * betAmt;
      break;
    } else {
      payout = 0;
    };
  }
  bank += payout;
}

//VIEW

var intervalId
var intervalId2
var intervalId3
var intervalId4
var intervalId5

function spin() {
  //'FLASHING' SYMBOLS
  intervalId =  setInterval(function() {
      $('#reelImage0').attr('src', symbols[distribution[Math.floor(Math.random() * distribution.length)]].image);
    },100);
  intervalId2 =  setInterval(function() {
      $('#reelImage1').attr('src', symbols[distribution[Math.floor(Math.random() * distribution.length)]].image);
    },100);
  intervalId3 =  setInterval(function() {
      $('#reelImage2').attr('src', symbols[distribution[Math.floor(Math.random() * distribution.length)]].image);
    },100);
  intervalId5 = setInterval(function() {
    var song = new Audio('audio/slot_sound.mp3');
    song.play();
  });
}

function render() {
  //STAGGER PAYLINE SYMBOLS
  setTimeout(function() {
    clearInterval(intervalId);
    $('#reelImage0').attr('src', symbols[payline[0]].image);
  }, 1000);
  setTimeout(function() {
    clearInterval(intervalId2);
    $('#reelImage1').attr('src', symbols[payline[1]].image);
  }, 2000);
  setTimeout(function() {
    clearInterval(intervalId3);
    $('#reelImage2').attr('src', symbols[payline[2]].image);
  }, 3000);
  setTimeout(function() {
    $('#payout').html(payout);
    $('#bank').html(bank);
  },3000);
  setTimeout(function() {
    clearInterval(intervalId5);
  },3000);
};

//WIN ANIMATION
function renderWin() {
  setTimeout(function() {
    $('img').addClass('rotate');
  },3000)
}

//OUT OF MONEY SCREEN
function renderLose() {
  setTimeout(function() {
    clearInterval(intervalId);
    $('#reelImage0').attr('src', 'images/slots.png');
  }, 1000);
  setTimeout(function() {
    clearInterval(intervalId2);
    $('#reelImage1').attr('src', 'images/money.png');
  }, 2000);
  setTimeout(function() {
    clearInterval(intervalId3);
    $('#reelImage2').attr('src', 'images/cat.png');
  }, 3000);
  setTimeout(function() {
    $('#payout').html(payout);
    $('#bank').html(bank);
  },3000);
}

//EVENTS
$('.buttons').on('click', function() {
  if (bank > 0) {
    // generate symbols
    for (var i = 0; i < payline.length; i++) {
      payline[i] = distribution[Math.floor(Math.random() * distribution.length)];
    }
    countSymbols();
    // set bet amount
    bet = this.id;
    switch(bet) {
      case 'bet1':
        betAmt = 1;
        break;
      case 'bet2':
        betAmt = 2;
        break;
      case 'bet3':
        betAmt = 3;
        break;
    };
    //deduct bet from bank
    bank -= betAmt;
    computePayout();
    spin();
    render();
    //end game if bank < 0
  } else {
      spin();
      renderLose();
      setTimeout(function() {
        $('.buttons').prop('disabled', true);
        $('h1').css('visibility', 'visible');
        $('#place-bet').css('visibility', 'hidden');
      }, 3000);
  }
})




// });
