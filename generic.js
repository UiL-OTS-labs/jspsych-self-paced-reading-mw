//generic.js

function randomArrayShuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


//var alphabet=["a","b","c","d","e"];
//randomArrayShuffle(alphabet);

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/**
 * Creates an array of N items, of which the (closest) proportion 
 * of items has the value true, and the other (1-proportion) of items
 * has the value false.
 * @param {Float} proportion A proportion of true elements.
 * @param {Integer} N The number of items in the output array.
 */
function createBooleanArrayAfterPercentage(percentage, N) {
	
}