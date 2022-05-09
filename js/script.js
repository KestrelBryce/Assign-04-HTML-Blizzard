  /* This function gets the user's Dairy Queen order and calculates the cost. 
*/

function displayGreeting () {

    // user input
  let BSize = (document.getElementById('insert-Size-Here').value);

  let BFlav = (document.getElementById('insert-Flavour-Here').value);

  let Drink = (document.getElementById('insert-Drink-Here').value);


    // Constants
  let TaxRate = 0.13;

    // Remember to write || by using shift on \ twice

    // Drink calculate Process
  if (Drink == Ginger Ale) {
    let DrinkCost = 1.89
  }

  else if (Drink == Pepsi) {
    let DrinkCost = 1.79
  }

  else if (Drink == CocaCola) {
    let DrinkCost = 1.99
  }

  else if (Drink == Fanta) {
    let DrinkCost = 1.49
  }

  else if (Drink == Dr Pepper) {
    let DrinkCost = 1.59
  }

  else if (Drink == No drink) {
    let DrinkCost = 0
  }

    // Variables
  let YDrinkSub = BSize + BFlav + DrinkCost;

  let NDrinkSub = BSize + BFlav;


  if () {
    document.getElementById("greeting").innerHTML = "You are" + Drink + ", which means you are eligable for a student discount."
  }
    
    // Order calculate Process
    // YDrinkSub tax
  //if (DrinkCost > 0) {
    //let YDrinkTax = YDrinkSub * TaxRate
    //let YDrinkTotal = YDrinkSub + YDrinkTax
    //document.getElementById("greeting").innerHTML = "You are " + DrinkCost + ", which means you are eligable for a student discount."
  }
  
    // NDrinkSub tax
  //else if ((userAge >= 12) && (userAge <= 21)) {
  //  document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are eligable for a student discount."
  //}

}


  //else if ((userAge >= 12) && (userAge <= 21)) {
  //  document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are eligable for a student discount."
  //}