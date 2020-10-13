var practice_items = [
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        ID: 1,
        words: "In het tuincentrum konden Martine en Marije genoeg van hun gading vinden. Martine zocht zestig appelbomen van een ziektebestendig ras uit, en Marije twaalf bessenstruiken. Gelukkig was het prima weer om hun nieuwe aanwinsten/meteen/te/planten.",
        question_or_statement: "Er was niets te vinden in het tuincentrum.",
        choices: ["Ja", "Nee"],
        correct: 1
    },
    {
        type: "moving-window",
        part: "practice",
        condition: "undefined",
        ID: 2,
        words: "Godelieve en Vincent waren net verhuisd en waren aan het klussen op zolder. Godelieve zaagde een boekenplank van MDF, terwijl Vincent de kozijnen verfde. Na een dag hard werken gingen ze tevreden slapen in hun nieuwe huis.",
        question_or_statement: "Goedelieve en Vincent hebben een klusjesman gehuurd",
        choices: ["Jazekers", "Nee"],
        correct: 1
    }
];

var test_items = [
    {
        type: "moving-window",
        part: "test",
        condition: "UNGRAM",
        ID: 1,
        words: "Jan en Marie zaten na een lange werkdag samen te wachten in de stationsrestauratie in Amsterdam. Jan at een broodje met ham, en Marie een koffie met veel melk. De stemming was niet best, omdat de trein meer dan 30 minuten vertraging had.",
        question_or_statement: "Marie at een koffie",
        choices: ["Ja", "Nee","Gekkigheid"],
        correct: 2
    },
    {
        type: "moving-window",
        part: "test",
        condition: "GRAMM",
        ID: 1,
        words: "Jan en Marie zaten na een lange werkdag samen te wachten in de stationsrestauratie in Amsterdam. Jan vroeg broodje met ham, en Marie een koffie met veel melk. De stemming was niet best, omdat de trein meer dan 30 minuten vertraging had.",
        question_or_statement: "Jan vroeg een broodje",
        choices: ["Ja", "Nee"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        ID: 2,
        words: "Op het introductiekamp van hun nieuwe studie misten Suzy en Jochem hun partner meer dan ooit. Suzy zocht een brief van haar vriend, en Jochem een foto van zijn vriendin. Gelukkig duurde het kamp maar vijf dagen.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 1 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        ID: 2,
        words: "Op het introductiekamp van hun nieuwe studie misten Suzy en Jochem hun partner meer dan ooit. Suzy zocht een brief van haar vriend, en Jochem een foto van zijn vriendin. Gelukkig duurde het kamp maar vijf dagen.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Ja", "Nee"],
        correct: 1
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        ID: 3,
        words: "Martijn en Jessica verwachtten samen hun eerste kindje en vonden het leuk zelf babyspulletjes te maken. Martijn zaagde een bedje van hout, terwijl Jessica een dekentje van zachte wol breide. Het resultaat was een prachtige wieg.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Yes", "No"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "FILLER",
        ID: 3,
        words: "Martijn en Jessica verwachtten samen hun eerste kindje en vonden het leuk zelf babyspulletjes te maken. Martijn zaagde een bedje van hout, terwijl Jessica een dekentje van zachte wol breide. Het resultaat was een prachtige wieg.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Yes", "No"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "GRAMM",
        ID: 4,
        words: "Roos en Lisa hadden aangeboden het huis van oma eens flink op te knappen en schoon te maken. Roos schrobde het houtwerk in de gang, en Lisa het tapijt in de kamer. Oma wist niet wat ze zag en bedankte de dames met een bos bloemen.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Yes", "No"],
        correct: 0 
    },
    {
        type: "moving-window",
        part: "test",
        condition: "UNGRAM",
        ID: 4,
        words: "Roos en Lisa hadden aangeboden het huis van oma eens flink op te knappen en schoon te maken. Roos schuurde het houtwerk in de gang, en Lisa het tapijt in de kamer. Oma wist niet wat ze zag en bedankte de dames met een bos bloemen.",
        question_or_statement: "Suzy zocht een foto.",
        choices: ["Yes", "No"],
        correct: 0 
    }
];