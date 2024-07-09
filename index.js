var gamepattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level=0;

//to check for first keyboard press
var keypressed=false;

$(document).keypress(function(){
  if(!keypressed)
  {
    nextSequence();

  keypressed=true;

}


})

//to create next sequence:
function nextSequence(){
  //creating random color
var randomNumber= Math.floor(Math.random()*4);
var randomChosencolor=buttonColours[randomNumber];

//adding color to array
gamepattern.push(randomChosencolor);

//adding animation sound to randomly selected color
$("#"+randomChosencolor).fadeOut(100).fadeIn(100);
playsound(randomChosencolor);

//changing heading
$("h1").text("Level " + level);
level++;

}

//for sequence tha user has entered
$(".btn").click(function(){

  var userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playsound(userChosenColor);
  addAnimation(userChosenColor);
checkAnswer(userClickedPattern.length-1);


})

//to check answer
function checkAnswer(index){

 if((index+1)<=gamepattern.length && userClickedPattern[index]===gamepattern[index]){

    if((index+1)===gamepattern.length){

      userClickedPattern=[];
      setTimeout(nextSequence,1000);
    }
  }

  else{

    keypressed=false;
    level=0;
    gamepattern=[];
    userClickedPattern=[];
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    },100);
    var gameover=new Audio("./sounds/wrong.mp3");
    gameover.play();

  }
}


function addAnimation(userChosenColor){
  var idOfColor="#"+userChosenColor;
  $(idOfColor).addClass("pressed");
  setTimeout(function(){
    $(idOfColor).removeClass("pressed")
  },100);
}

function playsound(randomChosencolor){
  switch (randomChosencolor) {
    case "red":
    var red=new Audio("./sounds/red.mp3");
    red.play();
    break;

    case "blue":
    var blue= new Audio("./sounds/blue.mp3");
    blue.play();
    break;

    case "green":
    var green= new Audio("./sounds/green.mp3");
    green.play();
    break;

    case "yellow":
    var yellow= new Audio("./sounds/yellow.mp3");
    yellow.play();

      break;
    default:
    console.log("Nothing!");

  }

}
