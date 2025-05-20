// randomizing the dice 1 value
var random1;
random1= Math.floor(Math.random()*6)+1;
var first_img= document.getElementsByClassName("img1")[0];
if (random1==1) {
  first_img.setAttribute("src", "images/dice1.png");
}else if (random1==2){
  first_img.setAttribute("src", "images/dice2.png");
}else if (random1==3){
  first_img.setAttribute("src", "images/dice3.png");
}else if (random1==4){
  first_img.setAttribute("src", "images/dice4.png");
}else if (random1==5){
  first_img.setAttribute("src", "images/dice5.png");
}else if (random1==6){
  first_img.setAttribute("src", "images/dice6.png");
}

// randomizing the dice 1 value
var random2;
random2= Math.floor(Math.random()*6)+1;
var first_img= document.getElementsByClassName("img2")[0];
if (random2==1) {
  first_img.setAttribute("src", "images/dice1.png");
}else if (random2==2){
  first_img.setAttribute("src", "images/dice2.png");
}else if (random2==3){
  first_img.setAttribute("src", "images/dice3.png");
}else if (random2==4){
  first_img.setAttribute("src", "images/dice4.png");
}else if (random2==5){
  first_img.setAttribute("src", "images/dice5.png");
}else if (random2==6){
  first_img.setAttribute("src", "images/dice6.png");
}

// displaying the winner
var heading= document.querySelector(".container h1");
if(random1>random2){
  heading.innerHTML= "🚩Player1 Wins!";
}else if(random1<random2){
  heading.innerHTML= "Player2 Wins!🚩";
}else {
  heading.innerHTML= "Draw";
}
