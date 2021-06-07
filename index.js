var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickPattern=[];


var started=false;

var level=0;

$(document.keypress(function(){
  if(!started)
  {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickPattern.push(userChosenColour);
  playSound(userChosenColour);

  animation(userChosenColour);

  //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence
  checkAnswer(userClickPattern.length-1);
});


//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel)
{
    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern.
    // If so then log "success", otherwise log "wrong".
if(gamePattern[currentLevel]===userClickPattern[currentLevel])
{
  console.log("success");
  //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement
  if(userClickPattern.length===gamePattern.length)
  {
    //5. Call nextSequence() after a 1000 millisecond delay.
    setTimeout (function(){
      nextSequence();
    },1000);
  }
}
else{
  console.log("Wrong");

//7. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong
   playSound(wrong);

//9. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    //10. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over,Press any key to Restart");
    setTimeout(function(){
    $("body").removeClass("game-over");
    },200);



    startOver();
}
}

function nextSequence()
{
  //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
   userClickPattern[];

   level++;
   $("#level-title").text("Level " + level);

   randomNumber=Math.floor(Math.random()*3)+1;
   var randomChooseColour=buttonColours[randomNumber];
   gamePattern.push(randomChooseColour);

   $("#"+randomChooseColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChooseColour);
}

function animation(currentColor)
{
  $("#"+currentColor).addClass("pressed")

  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}

function playSound(name)
{
var audio=new audio("sounds/"+name+".mp3");
audio.play();
}

function startOver()
 {
  level = 0;
  gamePattern = [];
  started = false;
}
