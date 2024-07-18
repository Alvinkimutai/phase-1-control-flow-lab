function scuberGreetingForFeet(feet){
  // Write your code here!
 let greeting
    if (feet<400){
     greeting = "This one is on me!"
     return greeting;
    }
    else if (feet>=400 && feet <=2000){
      greeting= "That will be twenty bucks."
      return greeting;
    }
    else if (feet>=2000 && feet <=2500){
      greeting= "I will gladly take your thirty bucks."
      return greeting;
    }
    else{
      greeting= 'No can do.'
      return greeting;
    }
}
console.log(scuberGreetingForFeet(2501));
let city = 'Pittsburgh';



function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? 'Ok, sounds good.': 'No go.';
}
console.log(ternaryCheckCity(city));




function switchOnCharmFromTip(tip){
  // Write your code here!
  let charm;
  switch (tip){
    case 'generous':
      charm = 'Thank you so much.';
      break;
    case 'not as generous':
      charm = 'Thank you.';
      break;
    default:
      charm = 'Bye.'
      break;

  }
  return charm;
}
console.log(switchOnCharmFromTip('generous'));

// Bonus function while I was practicing

function addFive (someNumber) {
  let result;
  if (someNumber>0) {
    result = someNumber+5;
  }
  return result
}
console.log(addFive(5))