
const PRACTICE_ITEMS = [
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 1,
        words: "=============================================<BR><BR>" + 
               "In/het/tuincentrum/konden/Martine/en/Marije/<BR>"      + 
               "genoeg#van#hun#gading#vinden./Maar/ze/wilden/<BR>"     +
               "graag/binnen/de/lijntjes/kleuren,/dus/moest<BR>/"      +
               "er/wel/flink/nagedacht/worden#over#deze<BR>#"          +
               "lijntjes.<BR><BR>"                                     +
               "=============================================<BR><BR>",
        question_or_statement: "Er was niets te vinden in het tuincentrum.",
        choices: ['Yes','No'],
        correct: 1
    },
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        id: 2,
        words: "=============================================<BR><BR>" +
               "Godelieve/en/Vincent/waren/net/verhuisd/en<BR>"        +
               "/waren/aan/het#klussen/#op#zolder. 'Zo zijn<BR>"       +
               "/ze/nu/eenmaal,/die#Godelieve#en#Vincent'"             + 
               "<BR><BR><BR>"                                          +
               "=============================================<BR><BR>",
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

