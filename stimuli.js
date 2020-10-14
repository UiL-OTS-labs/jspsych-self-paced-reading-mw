
const practice_items = [
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 1,
        words: "In het tuincentrum konden Martine en Marije genoeg van hun gading vinden.",
        question_or_statement: "Er was niets te vinden in het tuincentrum.",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 2,
        words: "Godelieve en Vincent waren net verhuisd en waren aan het klussen op zolder.",
        question_or_statement: "Goedelieve en Vincent hebben een klusjesman gehuurd",
        choices: ["Jazekers", "Nee"],
        correct: 1
    }
];

// note that in these group definitions:

// --> latin1: id 1 UNGRAM, id 4 gets GRAMM
// --> latin2: id 1 GRAMM, id 4 gets UNGRAM
// --- fillers are in this case identical

const latin1 = [
    {
        type: "moving-window",
        part: "test",
        condition: "UNGRAM",
        id: 1,
        words: "Jan en Marie UNGRAMM ID 1",
        question_or_statement: "Jan at een broodje",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 2,
        words: "Suzy en Jochem VULLER ID 2",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 1 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 3,
        words: "Martijn en Jessica VULLER ID 3 ",
        question_or_statement: "Jessica is jarig",
        choices: ["Ja", "Nee"],
        correct: 2 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "GRAMM",
        id: 4,
        words: "Roos en Lisa GRAMM ID 4.",
        question_or_statement: "Oma was dankbaar",
        choices: ["Ja", "Nee"],
        correct: 0 
    }
];

const latin2 = [
    {
        type: "moving-window",
        part: "test",
        condition: "GRAMM",
        id: 1,
        words: "Jan en Marie GRAM ID 1",
        question_or_statement: "Jan vroeg een broodje",
        choices: ["Ja", "Nee"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 2,
        words: "Suzy en Jochem VULLER ID 2 ",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 3,
        words: "Martijn en Jessica VULLER ID 3",
        question_or_statement: "Jessica is jarig.",
        choices: ["Ja", "Nee"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "UNGRAM",
        id: 4,
        words: "Roos en Lisa UNGRAM ID 4",
        question_or_statement: "Oma was dankbaar",
        choices: ["Ja", "Nee"],
        correct: 0 
    }
];

const groups = ["latin1","latin2"];


const test_items = [
    {group_name: groups[0], table: latin1},
    {group_name: groups[1], table: latin2}
];

/**
 * Get the list of practice items
 *
 * Returns an object with a group and a table, the group will always indicate
 * "practice" since it are the practice items
 *
 * @returns {object} object with group and table fields
 */
function get_practice_items() {
    return {group_name: "practice", table: practice_items};
}

/**
 * This function will pick a random group from the test_items array.
 *
 * Returns an object with a group and a table, the group will always indicate
 * which list has been chosen for the participant.
 *
 * @returns {object} object with group and table fields
 */
function select_random_group() {
    let range = function (n) {
        let empty_array = []
        for (var i = 0; i < n; i++) {
            empty_array.push(i);
        }
        return empty_array;
    }
    let num_groups = test_items.length;
    var shuffled_range = jsPsych.randomization.repeat(range(num_groups), 1)
    var retgroup = test_items[shuffled_range[0]];
    return retgroup
}


