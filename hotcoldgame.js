/*The mandatory requirements for this app are as follows:

You will be expected to use the Chome console to run the completed program.
When a new game starts, a secret number between 1 and 100 should be generated that the user will have to guess.
The user should get feedback about each guess – if it was too low, too high, or just right.
Initially, you shouldn’t worry about telling users if they’re getting “hotter” or “colder” relative to their previous guess. 
Instead, you can use absolute values. For instance, you might decide that if a user is 50 or further away from the secret number, 
they are told they are “Ice cold”, if they are between 30 and 50 they are “cold”, if they are between 20 and 30 they are warm, between 10 and 20 hot, 
and between 1 and 10 “very hot”. You can choose what the ranges are and what feedback you provide.
Feedback about the guess should appear in the console and the user should enter their guess in the console.
The game should track how many guess the user has made. Feedback about this should appear in the console on each guess.
The game should also supply users with a list of the numbers they have guessed so far.
After you finish the game you should be able to start a new game either automatically or by running a function in the console such as newGame()
You’ll need to ensure that users provide valid inputs. You will need to write code that ensures that the user has supplied a numeric input between 1 and 100.
These are the minimal requirements. If you’re able to meet these basic requirements and want to build in more advanced features, 
you can write code that provides users with feedback about their most recent guess in relation to the previous one. If the most recent guess is closer to the secret number,
 you would tell the user they are “warmer”, and if it’s further, you’d tell them they are “colder”. Note that for the first guess, you’d still need to provide absolute feedback, 
 since they’re won’t be a previous guess to compare to.*/

 //random number generator
 //prompt for user to request a number
 //

var secretNumber = Math.floor((Math.random() * 100) + 1);

var numOfGuesses = 0;

var guess = undefined;

var guessedSoFar = [];

function submit() {
    if(secretNumber === guess){
        return 'You guessed it! Congratulations! Play again!';
        numOfGuesses++;
        console.log("Guess # "+numOfGuesses);
        secretNumber; 
    }
    else if(guess===NaN || (guess%1) !=0){
        console.log('Please try again, enter a number!');
        numOfGuesses++;
    } 
    else if((guess % 1) != 0) {
        console.log('Please try again, enter a whole number!');
                numOfGuesses++;
                guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
    }   else if ((Math.abs(guess - secretNumber)) > 50 ) {
        console.log('ICE BERG!');
                numOfGuesses++;
                guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
        console.log("Guess # "+numOfGuesses);
    }
    else if ((Math.abs(guess - secretNumber)) > 40 && (Math.abs(guess - secretNumber)) < 50){
        console.log('ICE COLD MOFO!');
                numOfGuesses++;
                guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
        console.log("Guess # "+numOfGuesses);
    } 
    else if ((Math.abs(guess - secretNumber)) > 30 && (Math.abs(guess - secretNumber)) <  40) { 
        console.log('BRRRR COLD!');
                numOfGuesses++;
                console.log("Guess # "+numOfGuesses);
                guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
    }
    else if ((Math.abs(guess - secretNumber)) > 20 && (Math.abs(guess - secretNumber)) < 30){
        console.log("Luke warm, please try again");
                numOfGuesses++;
        console.log("Guess # "+numOfGuesses);
        guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
    }
    else if ((Math.abs(guess - secretNumber)) > 5 && (Math.abs(guess - secretNumber)) < 20){
        console.log("Getting warmer!");
                numOfGuesses++;
        console.log("Guess # "+numOfGuesses);
        guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
    }
     else if ((Math.abs(guess - secretNumber)) > 1 && (Math.abs(guess - secretNumber)) < 5){
        console.log("Ahhhhhhh! Burning hot, you are right there!");
                numOfGuesses++;
        console.log("Guess # "+numOfGuesses);
        guessedSoFar.push(guess);
                console.log("numbers used " + guessedSoFar);
    }
}
