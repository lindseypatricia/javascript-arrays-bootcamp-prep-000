var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray() {
    var myArray = [1];
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
   ['foo', ...myArray];
   return myArray
 }
 function addElementToEndOfArray() {
   var myArray = [1];
   [...myArray, 'foo'];
   return myArray
 }
 function accessElementInArray() {
   var myArray = [1, 2, 3]
   console.log(myArray[2])
 }