// Define game object
var crystalGame = {
  wins: 0,
  losses: 0,
  score: 0,
  randomNumber: 0,
  // Determine values of gemValues property
  gemValues: {
    red: 0,
    blue: 0,
    yellow: 0,
    green: 0,
  },
 
  // This will generate a random number for the user
  generateRandomNumber: function(min, max) {
    this.randomNumber = this.getRandomNumber(19,120);
    $("#randomNumber").text(this.randomNumber);
  },
    getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },
  // This will generate the values for the gems (which is hidden from the user)
  generateGemValues: function() {
    this.gemValues.red = this.getRandomNumber(1,12);
    this.gemValues.blue = this.getRandomNumber(1,12);
    this.gemValues.yellow = this.getRandomNumber(1,12);
    this.gemValues.green = this.getRandomNumber(1,12);
  },
   // This handles the inputs from the gem selection by the user 
  handleInput: function(gem) {
    var self = this
    self.score += self.gemValues[gem];
    if (self.score > self.randomNumber) {
      self.reset(false);
    }
    else if (self.score == self.randomNumber) {
      self.reset(true);
    }
    $("#score").html(self.score);
  },
  // This resets the game in the event of a win or loss; adds to the counter of wins in the event of a win,
  // also adds to the counter in the event of a loss
  reset: function(win) {
    if (win) {
      this.wins++;
    }
    else {
      this.losses++;
    }
    $("#wins").text(this.wins);
    $("#losses").text(this.losses);
    this.generateRandomNumber();
    this.generateGemValues();
    this.score = 0;
  },
  init: function() {
    this.generateRandomNumber();
    this.generateGemValues();
    this.score = 0;
  }
};

 $(document).ready(function() {

      $("#red").on("click", function() {
        //console.log(crystalGame.generateGemValues(), crystalGame.score);
        crystalGame.generateGemValues()
        crystalGame.score = crystalGame.score + crystalGame.gemValues.red;
        $("#score").html(crystalGame.score);
      });

      $("#blue").on("click", function() {
        crystalGame.generateGemValues()
        crystalGame.score = crystalGame.score + crystalGame.gemValues.blue;
        $("#score").html(crystalGame.score);
      });

      $("#green").on("click", function() {
        crystalGame.generateGemValues()
        crystalGame.score = crystalGame.score + crystalGame.gemValues.green;
        $("#score").html(crystalGame.score);
      });

      $("#yellow").on("click", function() {
        crystalGame.generateGemValues()
        crystalGame.score = crystalGame.score + crystalGame.gemValues.yellow;
        $("#score").html(crystalGame.score);
      });
    });