var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;



// create function
var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while(enemyHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   
      // if yes (true), leave fight
      if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }
    
      // remove enemy's health by subtracting the amount set in the playerAttack variable
     enemyHealth = enemyHealth - playerAttack;
      // Log a resulting message 
   console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
   );
   //check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");

    // award player money for winning
    playerMoney = playerMoney + 20;
     
    // leave while() loop since enemy is dead
    break;
  } else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //remove player's health by subtractiong the amount set in the enemyAttack variable 
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message
  console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
  );

//check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
  //leave while()loop if player dead
  break;
  } else {
  window.alert(playerName + " still has " + playerHealth + " health left. ");
  }
 }
};
// execute function 
for(var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  //call fight function with enemy-robot
  fight(pickedEnemyName);
}
  

