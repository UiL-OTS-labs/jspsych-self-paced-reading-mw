//imports from modules and setting the stage

const name = 'main';

import { PROPORTION_QUESTION_OR_STATEMENT } from './modules/globals.js';

import { createBooleanArrayAfterProportion, 
	     randomArrayShuffle } from './modules/generic.js';

import { get_practice_items,
	     select_random_group } from './modules/stimuli.js';


export { name,
	     n,
	     p,
	     nonrandomArray,
	     shuffledArray,
	     practice_items,
         test_stimuli }


// var latin1_qa = latin1.map(function(qa_true_or_false){
//     var o = Object.assign({}, qa_true_or_false);
//     for (var i = 0; i < latin1.length; i++) {
//         o.implement_qa = shuffledArray[i];
//     }
// })

// var latin2_qa = latin2.map(function(qa_true_or_false){
//     var o = Object.assign({}, qa_true_or_false);
//     for (var i = 0; i < latin2.length; i++) {
//         o.implement_qa = shuffledArray[i];
//     }
// })

//var practice_items = get_practice_items()

// var first_stimuli = select_random_group(test_items);
// console.log('first');
// console.log(test_stimuli)



