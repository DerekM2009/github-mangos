console.log("Try programiz.pro");
// TRUTH OR DARE GAME - Assignment Template
// Student Name: Derek Medina Sanchez

// Game state variables (booleans)
let isPlayerOneTurn = true;
let hasChosenTruth = false;
let hasChosenDare = false;
let isGameActive = true;
let hasCompletedChallenge = false;
let isChallengeAccepted = false; // New boolean for challenge acceptance
let isPlayer1Won = false;        // New boolean to track if Player 1 wins
let isPlayer2Won = false;        // New boolean to track if Player 2 wins

// Player scores
let player1Score = 0;
let player2Score = 0;

// Simulate player choice (in real game, use prompt())
let playerChoice = "truth"; // Can be "truth" or "dare"
let userResponse = "yes";   // For completion check

console.log("🎮 TRUTH OR DARE GAME 🎮");
console.log("Current Player:", isPlayerOneTurn ? "Player 1" : "Player 2");

// Check player's choice using == (loose equality)
if (playerChoice == "truth") {
  hasChosenTruth = true;
  console.log("You chose TRUTH! 🤔");
}

// Check using === (strict equality)
if (playerChoice === "dare") {
  hasChosenDare = true;
  console.log("You chose DARE! 💪");
}

// Challenge completion check
console.log("\nDid you complete the challenge? (yes/no)");
let completed = (userResponse == "yes"); // Using == for flexible input
hasCompletedChallenge = completed === true; // Using === for strict boolean check

// Score update based on completion
if (hasCompletedChallenge === true) {
  if (isPlayerOneTurn === true) {
    player1Score++;
  } else {
    player2Score++;
  }
  console.log("✅ Challenge completed! Point earned!");
}

// Compare different input types
let booleanInput = true;
let stringInput = "true";
console.log("\n=== Input Comparison ===");
console.log("String 'true' == boolean true:", stringInput == booleanInput);
console.log("String 'true' === boolean true:", stringInput === booleanInput);

// New challenge acceptance
isChallengeAccepted = userResponse === "yes"; // Check if challenge is accepted

// Switch turns
isPlayerOneTurn = !isPlayerOneTurn;

// Check game end condition
if (player1Score >= 3 || player2Score >= 3) {
  isGameActive = false;
  if (player1Score > player2Score) {
    isPlayer1Won = true; // Track Player 1 win
  } else {
    isPlayer2Won = true; // Track Player 2 win
  }
  console.log("\n🎉 GAME OVER!");
  console.log("Winner:", isPlayer1Won ? "Player 1" : "Player 2");
}

// Display final scores
console.log("\n=== SCORES ===");
console.log("Player 1:", player1Score, "points");
console.log("Player 2:", player2Score, "points");
console.log("Game Active:", isGameActive);
console.log("Is Player 1 the winner?", isPlayer1Won);
console.log("Is Player 2 the winner?", isPlayer2Won);
