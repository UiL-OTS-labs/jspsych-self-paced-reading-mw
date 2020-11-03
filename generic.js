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

// maybe not the best idea
/**
 * Creates an array of N items, of which the first (closest) proportion 
 * of items has the value true, and the other (N-proportion) of items
 * has the value false.
 * @param {Float} proportion A proportion of true elements.
 * @param (Integer) N The number of items in the output array.
 */
function createBooleanArrayAfterPercentage(proportion, N) {
    var trueValues = Math.floor(proportion * N);
    var falseValues = N - trueValues;
    let outArray = [];
    for (var i=0; i<trueValues;i++){
        outArray.push(true);
    }
    for (var i=0; i<falseValues;i++){
         outArray.push(false);
    }
    return outArray;
}


