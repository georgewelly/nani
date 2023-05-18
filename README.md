# Nani?! なに
Nani!? The anime guessing game!
A game site where you guess the anime of the day based on screenshots and hints.

## Aims

* Provide screenshots of a daily anime
* The user guesses using a predictive textbox

## Inspiration
![guess the game](img/guessthegame.png)

## Extensions 
* Hints for the anime (year released, characters etc)
* History of guesses and databse
* Hosting images from all of time
* Automate metadata collection for animes

___________________________________________________________________________________________

## Code

###Guessing page

####States
There are 3 states at the moment:
- `imageIndex`
     - This is the index of the image the user is currently viewing
- `guessIndex`
    - This is the guess the user is currently on
    - It starts on 0 and incriments for each guess the user has made
- `correctGuessIndex`
    - This shows which guess the user guessed correctly (or if they even guessed correctly at all)
    - `-1` means they have yet to guess correctly
    - `0` means they guessed correctly on their 1st guess
    - `1` means  they guessed correctly on their 2nd guess etc...


