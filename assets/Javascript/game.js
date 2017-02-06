
var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 0;

document.onkeyup = function(event) {
    var user = String.fromCharCode(event.keyCode).toLowerCase();

    var computer = alphabets[Math.floor(Math.random() * alphabets.length)];

    guesses = guesses || 12

    while (user !== computer.toString())
    {
        --guesses;
        if (guesses === 0)
        {
            {break}
            alert("The Letter was: " + computer);
            
        }

    }
    console.log("Great");
            if (user == computer){
            wins++;
        }else if (user !== computer){
            losses++;
        }

        var html = "" +
        "<p>Wins: " + 
        wins + 
        "</p>" +
        "<p>Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + (12 - guesses) 
        +
        "<p>Your Guesses so far: " + user
        guesses +
        "</p>";

        document.querySelector('#game').innerHTML = html;
        
}    