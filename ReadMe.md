### Slot Machine

Welcome to Slot Machine. Modeled after the casino classic, this game is played
by pressing a button to select a bet amount and 'spin' a display of symbols.
Players are rewarded for two or three matching symbols on the payline. Rewards
are calculated according to the bet amount and symbol value ('Ghost' being the greatest
value and 'Wavy Dash' being the least).

Click here to play:

https://vkurzweg.github.io/slot-machine/

This game was built using HTML, CSS, and JavaScript.

## Pseudocode

# Components

3 'Reels'
  - Random Number Generator
  - 10 images per reel
  - Corresponding numbers for each image
  - Payout Table
  - Reset Button
Payline
'Spin' Button
Spin Win/Loss Display
Total Available Funds/Bank Display
Bet Selector
Cash Out/Reset Button (edit wireframes)

# Model

When a player selects a bet ($1 or $5?)
  Generate 3 random numbers

  If 2 numbers match
    Pay out double the set value of that number
    Add the payout amount to player's bank

  If 3 numbers match
    Pay out 10 times the set value of that number
    Add the payout amount to player's bank

  If one number is the jackpot number
    Pay out the set value of one jackpot number
    Add payout amount to player's bank

  If two numbers are the jackpot number
    Pay out double the value of one jackpot number
    Add payout amount to player's bank

  If all three numbers are the jackpot number
    Pay out jackpot amount
    Add payout to player's bank

  If there are no matching or jackpot numbers
    Deduct bet from player's bank

If player's bank is 0 or negative,
  end game

Pay Table

3 Matching:
              1     2     3
ghost       3300   6600  99000 
cherry      2000   4000   6000
chart wut   1000   2000   3000
pineapple    500   1000   1500
diamond      250    500    750
crab         100    200    300
sunrise       80    160    240
water wave    30     60     90
balloon       15     30     45
wavy dash      3      6      9

2 Matching:
              1     2     3
ghost        100    200    300 
cherry        50    100    150
chart wut     25     50     75
pineapple     10     20     30
diamond        5     10     15
crab           5     10     15
sunrise        5     10     15
water wave     1      2      3
balloon        1      2      3
wavy dash      1      2      3

1:
              1     2      3
ghost          5     10     15 
cherry         2      4      6
chart wut      1      2      3

# View

Bind numbers/payouts with three identical sets of images

When a player clicks a Bet button,
  'Spin' image sets for set interval
  Deactivate Bet button during spin
  Play audio
  'Stop' images on payline
  Stop audio
  Display payout or loss
  Display new Bank balance
  Allow player to spin again




