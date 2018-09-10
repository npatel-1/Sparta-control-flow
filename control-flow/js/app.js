var bool = true;
var name = 'Katie';
var num = 1;
//IF STATEMENT //
//Mulitiline statement
// if (!num) {
  //do something
  // console.log('The condition is true');
// }

//Single line statement
// if (!num) console.log('The condition is true');

//IF / ELSE STATEMENT
// if (!bool) {
//   //Do something if true
//   console.log('Condition is truthy');
// } else {
//   //Do something if flase
//   console.log('Condition is falsey');
// }

//IF / ELSE IF STATEMENT
// if (!num == '1') {
//   //Do something if first confition is truthy
//   console.log('num == 1');
// } else if (num === 2) {
//   //Do something if the condition is a different value
//   console.log('num === 1');
// } else {
//   //Do something if no condition is met
//   console.log('Num is not equal to any of the conditions');
// }

// Logical operators
// OR || - only one stateent needs to be true for the ode black to run

// if (!num == '1' || bool === false) {
  //Do something if first confition is truthy
//   console.log('Condition 1');
// } else if (num === 1 && bool === false) {
  //Do something if the condition is a different value
//   console.log('Condition 2');
// } else {
  //Do something if no condition is met
//   console.log('No Condition met');
// }

//SWITCH STATEMENT
switch (name) {
  case 'Tim':
    console.log('Name is Tim');
    break;
  case 'Katie':
  case 'Jenny':
    console.log('Name is Katie or Jenny');
    break;
  case 'Fiona':
    console.log('Name is Fiona');
    break;
  case 'Neil':
    console.log('Name is Neil');
    break;
  default:
  console.log('No match');
}
