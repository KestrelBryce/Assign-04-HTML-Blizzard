  /* This function gets the user's Dairy Queen order and calculates the cost. 
*/

function displayGreeting () {

    // user input
  let BSize = (document.getElementById('insert-Size-Here').value);

  let BFlav = (document.getElementById('insert-Flavour-Here').value);

  let Drink = (document.getElementById('insert-Drink-Here').value);


    // Constants
  let TaxRate = 0.13;

  let gAPrice = 1.89;

  let pepsiPrice = 1.79;

  let cocaColaPrice = 1.99;

  let fantaPrice = 1.49;

  let drPepperPrice = 1.59;

    // Remember to write || by using shift on \ twice

    // Size calculate process
  if (BSize == 'small') {
    BSizeCost = 3.50;
  }

  else if (BSize == 'medium') {
    BSizeCost = 4.10;
  }

  else {
    BSizeCost = 5.30;
  }


    // Flavour calculate process
  if () {
    BFlavCost = ;
  }

  else if () {
    BFlavCost = ;
  }

  else if () {
    BFlavCost = ;


  else if () {
    BFlavCost = ;
  }

  else {
    BFlavCost = ;
  }
  
    // Drink calculate Process
  if (Drink == 'Ginger Ale') {
    let drinkCost = gAPrice;
  }

  else if (Drink == 'Pepsi') {
    let drinkCost = pepsiPrice;
  }

  else if (Drink == 'Coca-Cola') {
    let drinkCost = cocaColaPrice;
  }

  else if (Drink == 'Fanta') {
    let drinkCost = fantaPrice;
  }

  else if (Drink == 'Dr-Pepper') {
    let drinkCost = drPepperPrice;
  }

  else {
    let drinkCost = 0;
  }

    // Variables
  //let YDrinkSub = BSize + BFlav + drinkCost;

  let NDrinkSub = BSizeCost + BFlavCost;

  if (1 > 0) {
    document.getElementById('greeting').innerHTML = 'hi'
  }



    // Order calculate Process
    // YDrinkSub tax
  //if (DrinkCost > 0) {
    //let YDrinkTax = YDrinkSub * TaxRate
    //let YDrinkTotal = YDrinkSub + YDrinkTax
    //document.getElementById("greeting").innerHTML = "You are " + DrinkCost + ", which means you are eligable for a student discount."
  //}
  
    // NDrinkSub tax
  //else if ((userAge >= 12) && (userAge <= 21)) {
  //  document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are eligable for a student discount."
  //}




  //else if ((userAge >= 12) && (userAge <= 21)) {
  //  document.getElementById("greeting").innerHTML = "You are " + userAge + ", which means you are eligable for a student discount."
  //}