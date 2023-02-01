// Set the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to determine which message to display
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check the number user typed
// This will determine whether the user has guessed the secret number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // -----
  // When there is no input
  if (!guess) {
    displayMessage("Please type a number");
    document.querySelector(".message-bottom").style.display = "none"; // Hide the bottom message

    // -----
    // When user wins
  } else if (guess === secretNumber) {
    displayMessage("Correct number - Good job!");
    document.querySelector(".message-bottom").style.display = "none"; // Hide the bottom message

    document.querySelector(".number").textContent = secretNumber; // Display the secret number
    document.querySelector(".again").style.display = "inline"; // Show the "try again button"
    document.querySelector("body").style.backgroundColor = "#42812f"; // Change the colour of the background

    // Set the new highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // -----
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Hint: Too high" : "Hint: Too low");
      document.querySelector(".message-bottom").style.display = "none";
      // Decrement the score and update it
      score--;
      document.querySelector(".score").textContent = score;
      // When user runs out of score/loses the game
    } else {
      displayMessage("You lost the game - Try again!");
      document.querySelector(".message-bottom").style.display = "none"; // Hide the bottom message
      document.querySelector(".score").textContent = 0; // Set the score to 0
      document.querySelector(".again").style.display = "inline"; // Show the "try again button"
    }
  }
});

// "Try again" behaviour - reset the game
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Write the number you think is hidden!");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#052027";

  document.querySelector(".again").style.display = "none";
  document.querySelector(".message-bottom").style.display = "inline";
});
