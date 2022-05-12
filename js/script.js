  /* This function gets the user's Dairy Queen order and calculates the cost. 
*/

function displayGreeting () {

 //document.getElementById("greeting").innerHTML = "Hi"
    // user input
  let BSize = (document.getElementById('insert-Size-Here').value);

  let BFlav = (document.getElementById('insert-Flavour-Here').value);
  
  let Drink = (document.querySelector('input[name=insert-Drink-Here]:checked').value);

  //document.getElementById("greeting").innerHTML = "Hi"
    
    // Constants
  let taxRate = 0.13;

  /*let gAPrice = 1.89;

  let pepsiPrice = 1.79;

  let cocaColaPrice = 1.99;

  let fantaPrice = 1.49;

  let drPepperPrice = 1.59;*/

  //document.getElementById("greeting").innerHTML = "Hi"
  
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
    //document.getElementById("greeting").innerHTML = "Hi"

    //document.getElementById("greeting").innerHTML = BSizeCost
  //document.getElementById("greeting").innerHTML = Drink

    // Drink calculate process
  
  if (Drink == "Ginger ale") {
    drinkCost = 1.89;
  }

  else if (Drink == "Pepsi") 
  {
    drinkCost = 1.79;
  }

  else if (Drink == "Coca-Cola") 
  {
    drinkCost = 1.99;
  }

  else if (Drink == "Fanta") 
  {
    drinkCost = 1.49;
  }

  else if (Drink == "Dr.Pepper") 
  {
    drinkCost = 1.59;
  }

  else if (Drink == "no drink") 
  {
    drinkCost = 0;
  }



    // Flavour Calculate process

  
  if (BFlav == "Girl Scouts") {
    BFlavCost = 0.75;
  }
  
  else if (BFlav == "Oreo") 
  {
    BFlavCost = 0.50;
  }
  
  else if (BFlav == "Mint Oreo") 
  {
    BFlavCost = 0.70;
  }
  
  else if (BFlav == "Rocky Road") 
  {
    BFlavCost = 0.30;
  }

  else if (BFlav == "Candy Cane chill") 
  {
    BFlavCost = 0.90;
  }

    

  
    // Variables
  let YDrinkSub = BSizeCost + BFlavCost + drinkCost;

  let YDrinkTax = YDrinkSub * taxRate;



  let NDrinkSub = BSizeCost + BFlavCost;

  let NDrinkTax = NDrinkSub * taxRate;

  
     

  
      // Order calculate Process
    
  if (drinkCost > 0) {
    let YDrinkTotal = YDrinkSub + YDrinkTax;

    //document.getElementById("greeting").innerHTML = "Hi"
    
    document.getElementById("greeting").innerHTML = "You ordered a " + BSize + " " + BFlav + " Blizzard with a " + Drink + " on the side. Your order totals to $" + YDrinkTotal.toFixed(2) + "."
  }

  else {
    let NDrinkTotal = NDrinkSub + NDrinkTax;
    
    document.getElementById("greeting").innerHTML = "You ordered a " + BSize + " " + BFlav + " Blizzard with nothing on the side. Your order totals to $" + NDrinkTotal.toFixed(2) + "."
  }

  

      }