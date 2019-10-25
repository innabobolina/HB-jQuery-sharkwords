const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry', 'orange', 'apple', 'banana', 'pineapple', 'kiwi',
  'peach', 'pecan', 'eggplant', 'durian', 'peanut', 'chocolate'
];


let numWrong = 0;


/** Loop over the chars in `word` and create divs. */
const createDivsForChars = (word) => {
  // Replace this with your code

  //select section with id="word-container"
  const chosenSection = $('#word-container');
  for (let letter of word) {
    //make new div and add class of letter
    chosenSection.append(`<div class="letter-box ${letter}"></div>`);
  }
  
};


/** Loop over each letter in `ALPHABET` and generate buttons. */
const generateLetterButtons = () => {
  // Replace this with your code

  for (let letter of ALPHABET) {
    $('#letter-buttons').append(`<button>${letter}</button>`);
  }
};


/** Set the `disabled` property of `buttonEl` to `true.
 *
 * `buttonEl` is an `HTMLElement` object.
 */
const disableLetterButton = (buttonEl) => {
  // Replace this with your code

  //change buttonEl into jQuery object
  //disable jQuery obj. via changing attribute to true
  $(buttonEl).attr('disabled', true)
};


/** Return `true` if `letter` is in the word. */
const isLetterInWord = (letter) => {
  // Replace this with your code
  //try to get <div class="letter-box ${letter}"></div>
  //if exists, will be list (return true), else undefined (return false)

};


/** Called when `letter` is in word. Update contents of divs with `letter`. */
const handleCorrectGuess = (letter) => {
  // Replace this with your code
};


/** Called when `letter` is not in word.
 *
 * If the shark gets the person, disable all buttons and show the "play again"
 * message. Otherwise, increment `numWrong` and update the shark image.
 */
const handleWrongGuess = () => {
  // Replace this with your code
};


/** Reset game state. Called before restarting the game. */
const resetGame = () => {
  // Replace this with your code
};



/** This is like if __name__ == '__main__' in Python */

(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
    startGame();
  });
})();