var randomNumber = Math.floor(Math.random()*6) + 1;  // 1 to 6

var randomDiceImage =  "dice" + randomNumber + ".png";  // dice1.png to dice6.png


var image = document.querySelectorAll("img")[0];

image.setAttribute("src", randomDiceImage);

