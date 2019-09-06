
$(document).ready(function () {

    // Creates an array that lists the words the computer can choose from
    const words = ["elliott", "brown", "beckham", "watt", "brady", "tebow", "rodgers", "wilson", "miller", "donald"];

    // Creates variables 
    var currentWord;
    var currentWordArray;
    var numberOfLetters;
    var lettersGuessed = [];
    var userGuess;
    var guessesLeft = 10;
    var answer = [];
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#guessesLeft").text(guessesLeft);


    // Initialize the game by grabbing a random word and pushing underscores into our display
    function initializeGame(){

        currentWord = words[Math.floor(Math.random() * words.length)];
        console.log(currentWord);
        
        currentWordArray = currentWord.split("");

        console.log(currentWordArray);

        numberOfLetters = currentWordArray.length;
        console.log(numberOfLetters);

        for (var i = 0; i < numberOfLetters; i++){
            //pushes an underscore into our empy answer array, then displays it on our page
            answer.push("_ ");
            $("#answerUnderscores").html(answer);
            }
        }

    

    // Reset Function
    function reset(){
        guessesLeft = 10;
        lettersGuessed = [];
        answer = [];
        initializeGame();

    }

    // MAIN GAME SECTION

    initializeGame();

    // Onkeyup Function. Pushes event key into lettersGuessed array and writes them into the appropriate place
    document.onkeyup = function (event){

        userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 
        if (event.keyCode >= 65 && event.keyCode <= 90) { //Make it so it only listens to keys from a-z
        
            console.log("You guessed the letter " + userGuess);

            // Pushes the userGuess into our lettersGuessed array
            lettersGuessed.push(userGuess);
            lettersGuessedDisplay = lettersGuessed.join(" ");
            $("#lettersGuessed").text(lettersGuessedDisplay);

           // Checks to see if the userGuess matches each index item in the currentWord. This isn't working.
            for (var i = 0; i < numberOfLetters; i++){
                if(currentWord[i] === userGuess){
                    answer[i] = userGuess;
                    console.log(answer[i]);
                }   
            }


        }

    }

    
    
        


    
});
