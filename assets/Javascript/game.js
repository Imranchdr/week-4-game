
    
$( document ).ready(function(){
  var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('.counter').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num0= Math.floor(Math.random()*11+1)
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('.win').text(wins);
$('.lose').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('.counter').text(Random);
      num0= Math.floor(Math.random()*11+1);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('.wonsofar').text(userTotal);
      } 
//adds the wins to the userTotal
function winner(){
  wins++; 
  $('.wonorlost').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
  losses++;
  $('.wonorlost').text(losses);
  reset()
}
//sets up click for jewels
  $('#emerald').on ('click', function(){
    userTotal = userTotal + num0;
    console.log("New userTotal= " + userTotal);
    $('.wonsofar').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#blackdiamond').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('.wonsofar').text(userTotal); 
        if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#ruby').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('.wonsofar').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#saphire').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('.wonsofar').text(userTotal); 
      
          if (userTotal == Random){
          winner();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   
}); 