
const PRACTICE_ITEMS = [
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 1,
        words: "==========================================================<BR>In / het / tuincentrum / konden / Martine / en / Marije /# genoeg /# van /# hun /# gading /# vinden.",
        question_or_statement: "Er was niets te vinden in het tuincentrum.",
        choices: ['Yes','No'],
        correct: 1
    },
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 2,
        words: "==========================================================<BR>Godelieve / en / Vincent / waren / net / verhuisd / en / waren / aan / het /# klussen /# op /# zolder.",
        question_or_statement: "Goedelieve en Vincent hebben een klusjesman gehuurd",
        choices: ['Yes','No'],
        correct: 1
    }
];

/**
 * Get the list of practice items
 *
 * Returns an object with a group and a table, the group will always indicate
 * "practice" since it are the practice items
 *
 * @returns {object} object with group and table fields
 */
function getPracticeItems() {
    return {group_name : "practice", table : PRACTICE_ITEMS};
}

