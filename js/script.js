  /* This function gets the user's Dairy Queen order and calculates the cost. 
*/

function displayGreeting () {

    // user input
  let BSize = (document.getElementById('insert-Size-Here').value);

  let BFlav = (document.getElementById('insert-Flavour-Here').value);
  
  let Drink = (document.querySelector('input[name=insert-Drink-Here]:checked').value);

    
    // Constants
  let taxRate = 0.13;
  
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
    
    document.getElementById("greeting").innerHTML = "You ordered a " + BSize + " " + BFlav + " Blizzard with a " + Drink + " on the side. Your subtotal is $" + YDrinkSub.toFixed(2) + ", and your tax is $" + YDrinkTax.toFixed(2) + ", so your order totals to $" + YDrinkTotal.toFixed(2) + "."
  }

  else {
    let NDrinkTotal = NDrinkSub + NDrinkTax;
    
    document.getElementById("greeting").innerHTML = "You ordered a " + BSize + " " + BFlav + " Blizzard with nothing on the side. Your subtotal is $" + NDrinkSub.toFixed(2) + ", and your tax is $" + NDrinkTax.toFixed(2) + ", so your order totals to $" + NDrinkTotal.toFixed(2) + "."
  }

  

      }