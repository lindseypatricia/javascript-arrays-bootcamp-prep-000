var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray() {
    var array = [1];
    array.unshift('foo');
    return array
  }
 function destructivelyAddElementToEndOfArray() {
   var array = [1];
   array.push('foo');
   return array
 }
 function addElementToBeginningOfArray() {
   var array = [1];
   array = ['foo', ...array];
   return array
 }
 function addElementToEndOfArray() {
   var array = [1];
   array = [...array, 'foo'];
   return array
 }
 function accessElementInArray() {
   var array = [1, 2, 3];
   return array[2]
 }
 function destructivelyRemoveElementFromBeginningOfArray() {
   var array = [1, 2, 3];
   array.shift();
   return array
 }
 function removeElementFromBeginningOfArray() {
   var array = [1, 2, 3];
   array = array.slice(1);
   return array
 }
 function destructivelyRemoveElementFromEndOfArray() {
   var array = [1, 2, 3];
   array.pop();
   return array
 }
 function removeElementFromEndOfArray() {
   var array = [1, 2, 3];
   myArray = array.slice(0,array.length - 1)
   return array
 }