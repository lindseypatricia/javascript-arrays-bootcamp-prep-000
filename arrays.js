var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
  function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element);
    return array
  }
  
 function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   return array
 }
 
 function addElementToBeginningOfArray(array, element) {
   array = [element, ...array];
   return array
 }
 function addElementToEndOfArray(array, element) {
   array = [...array, element];
   return array
 }
 function accessElementInArray(array, element) {
   return array[2]
 }
 function destructivelyRemoveElementFromBeginningOfArray(array, element) {
   array.shift();
   return array
 }
 function removeElementFromBeginningOfArray(array, element) {
   var array = [1, 2, 3];
   array = array.slice(1);
   return array
 }
 function destructivelyRemoveElementFromEndOfArray(array, element) {
   var array = [1, 2, 3];
   array.pop();
   return array
 }
 function removeElementFromEndOfArray(array, element) {
   var array = [1, 2, 3];
   myArray = array.slice(0,array.length - 1)
   return array
 }