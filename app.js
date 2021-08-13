var guessedElement = Math.floor(Math.random() * 100)

function guessing()
{
  var input = document.getElementById("input").value;
  if(input == guessedElement)
    {
document.getElementById("res").textContent = "You Guessed it Correct!!!"
    }
  else if(input > guessedElement)
    {
      document.getElementById("res").textContent = "Your guess is too high!"
    }
  else{
     document.getElementById("res").textContent = "Your guess is too low!"
  }
}