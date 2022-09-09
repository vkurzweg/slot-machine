### Welcome to Slot Machine

Play:

https://vkurzweg.github.io/slot-machine/

Inspired by the casino classic, this game is played by pressing a button to select a bet amount and generate a display of symbols. The symbols are a visual representation of three randomly generated numbers that determine the outcome of play.

Payouts are awarded for two or three matching symbols on the payline, the row in which the random rotation of symbols stops. The payout amount depends on both the bet amount -- 1x payout for $1 bet, 2x payout for $2, etc - and symbol value. 'Ghost', which has the fewest symbols in rotation, has the highest value and 'Wavy Dash', the most common symbol, has the least.

This game was built using HTML, CSS, and JavaScript. Symbol images are Apple emojis and sounds were produced by my brother, Kevin Neumann.

For more details on how this slot machine works, below is the pseudocode I wrote when I started the project. I am still working out the payout values, which lean in the player's favor. 

### Pseudocode

#### Components

3 'Reels'
  - Random Number Generator
  - 10 images per reel
  - Corresponding numbers for each image
  - Payout Structure
  - Reset Button
Payline
'Spin' Button
Spin Win/Loss Display
Total Available Funds/Bank Display
Bet Selector
Cash Out/Reset Button (edit wireframes)

#### Model

When a player selects a bet ($1 or $5?)
  Generate 3 random numbers

  If 2 numbers match
    Pay out double the set value of that number
    Add the payout amount to player's bank

  If 3 numbers match
    Pay out 10 times the set value of that number
    Add the payout amount to player's bank

  If there are no matching or numbers
    Deduct bet from player's bank

  If player's bank is 0 or negative,
    end game

Base Point Value

ghost         50
cherry        25
chart wut     20
pineapple     18
diamond       15
crab          13
sunrise       10
water wave     6
balloon        4
wavy dash      2

Payout Structure

2 Matching Symbols = 2 x Base Point Value
3 Matching Symbols = 3 x Base Point Value

#### View

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




