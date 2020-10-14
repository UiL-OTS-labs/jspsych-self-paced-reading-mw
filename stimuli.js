const practice_items = [
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 1,
        words: "In het tuincentrum konden Martine en Marije genoeg van hun gading vinden. Martine zocht zestig appelbomen van een ziektebestendig ras uit, en Marije twaalf bessenstruiken. Gelukkig was het prima weer om hun nieuwe aanwinsten meteen te planten.",
        question_or_statement: "Er was niets te vinden in het tuincentrum.",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 2,
        words: "Godelieve en Vincent waren net verhuisd en waren aan het klussen op zolder. Godelieve zaagde een boekenplank van MDF, terwijl Vincent de kozijnen verfde. Na een dag hard werken gingen ze tevreden slapen in hun nieuwe huis.",
        question_or_statement: "Goedelieve en Vincent hebben een klusjesman gehuurd",
        choices: ["Jazekers", "Nee"],
        correct: 1
    }
];

// note that in these group definitions:

// latin1: id 1 UNGRAM, id 4 gets GRAMM
// latin2: id 1 GRAMM, id 4 gets UNGRAM

// fillers are all identical
const latin1 = [
    {
        type: "moving-window",
        part: "test",
        condition: "UNGRAM",
        id: 1,
        words: "Jan en Marie zaten na een lange werkdag samen te wachten in de stationsrestauratie in Amsterdam. Jan at een broodje met ham, en Marie een koffie met veel melk. De stemming was niet best, omdat de trein meer dan 30 minuten vertraging had.",
        question_or_statement: "Jan at een broodje",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 2,
        words: "Op het introductiekamp van hun nieuwe studie misten Suzy en Jochem hun partner meer dan ooit. Suzy zocht een brief van haar vriend, en Jochem een foto van zijn vriendin. Gelukkig duurde het kamp maar vijf dagen.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 1 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 3,
        words: "Martijn en Jessica verwachtten samen hun eerste kindje en vonden het leuk zelf babyspulletjes te maken. Martijn zaagde een bedje van hout, terwijl Jessica een dekentje van zachte wol breide. Het resultaat was een prachtige wieg.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "GRAMM",
        id: 4,
        words: "Roos en Lisa hadden aangeboden het huis van oma eens flink op te knappen en schoon te maken. Roos schrobde het houtwerk in de gang, en Lisa het tapijt in de kamer. Oma wist niet wat ze zag en bedankte de dames met een bos bloemen.",
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
        words: "Jan en Marie zaten na een lange werkdag samen te wachten in de stationsrestauratie in Amsterdam. Jan vroeg broodje met ham, en Marie een koffie met veel melk. De stemming was niet best, omdat de trein meer dan 30 minuten vertraging had.",
        question_or_statement: "Jan vroeg een broodje",
        choices: ["Ja", "Nee"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 2,
        words: "Op het introductiekamp van hun nieuwe studie misten Suzy en Jochem hun partner meer dan ooit. Suzy zocht een brief van haar vriend, en Jochem een foto van zijn vriendin. Gelukkig duurde het kamp maar vijf dagen.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        id: 3,
        words: "Martijn en Jessica verwachtten samen hun eerste kindje en vonden het leuk zelf babyspulletjes te maken. Martijn zaagde een bedje van hout, terwijl Jessica een dekentje van zachte wol breide. Het resultaat was een prachtige wieg.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "UNGRAM",
        id: 4,
        words: "Roos en Lisa hadden aangeboden het huis van oma eens flink op te knappen en schoon te maken. Roos schuurde het houtwerk in de gang, en Lisa het tapijt in de kamer. Oma wist niet wat ze zag en bedankte de dames met een bos bloemen.",
        question_or_statement: "Oma was dankbaar",
        choices: ["Ja", "Nee"],
        correct: 0 
    }
];

const groups = ["group1", "group2"];


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
function select_group() {
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

