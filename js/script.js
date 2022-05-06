  /* This function gets the user's Dairy Queen order and calculates the cost. 
*/

function displayGreeting () {

    // user input
  let BSize = (document.getElementById('insert-Size-Here').value);

  let BFlav = (document.getElementById('insert-Flavour-Here').value);

  let Drink = (document.getElementById('insert-Drink-Here').value);

    // Remember to write || by using shift on \ twice
  
    // Process
    // Free admission
  if ((userAge < 5) || (userAge > 95)) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are eligable for free admission."
  }
  
    // Student discount
  else if ((userAge >= 12) && (userAge <= 21)) {
    document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are eligable for a student discount."
  }

    // Day discount
  else if ((dayWeek == "Tuesday" || dayWeek == "Thursday")) {
    document.getElementById("greeting").innerHTML = "It is " + dayWeek + ", which means you are eligable for a discount today."
  }

  // Normal admission
  else {
    document.getElementById("greeting").innerHTML = "Sorry, you don't meet any of the requirements for a discount. You need to pay the regular admission fee."
  }

}
