var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray([myArray],foo) {
    [1];
    myArray.unshift('foo');
    return myArray
  }
 function destructivelyAddElementToEndOfArray() {
   var myArray = [1];
   myArray.push('foo');
   return myArray
 }
 function addElementToBeginningOfArray() {
   var myArray = [1];
   myArray = ['foo', ...myArray];
   return myArray
 }
 function addElementToEndOfArray() {
   var myArray = [1];
   myArray = [...myArray, 'foo'];
   return myArray
 }
 function accessElementInArray() {
   var myArray = [1, 2, 3];
   return myArray[2]
 }
 function destructivelyRemoveElementFromBeginningOfArray() {
   var myArray = [1, 2, 3];
   myArray.shift();
   return myArray
 }
 function removeElementFromBeginningOfArray() {
   var myArray = [1, 2, 3];
   myArray = myArray.slice(1);
   return myArray
 }
 function destructivelyRemoveElementFromEndOfArray() {
   var myArray = [1, 2, 3];
   myArray.pop();
   return myArray
 }
 function removeElementFromEndOfArray() {
   var myArray = [1, 2, 3];
   myArray = myArray.slice(0,myArray.length - 1)
   return myArray
 }