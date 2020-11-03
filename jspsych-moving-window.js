/*
 * Example plugin template from Josh */

jsPsych.plugins["moving-window"] = (function() {
    
    var plugin = {};

    plugin.info = {
        name: "moving-window",
        parameters: {
            words: {
            type: jsPsych.plugins.parameterType.STRING, // BOOL, STRING, INT, FLOAT, FUNCTION, KEYCODE, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
            default: undefined
        },
        key: {
            type: jsPsych.plugins.parameterType.KEYCODE,
            default: 32 // spacebar
        },
        condition: {
            type: jsPsych.plugins.parameterType.STRING,
            default: undefined
        },
        id: {
            type: jsPsych.plugins.parameterType.STRING,
            default: undefined
            }      
        }
    }

    plugin.trial = function(display_element, trial) {

    // data saving
    var trial_data = {
        words: trial.words
    };
    
    var rt = [];
    
    var current_position = 0;

    // var n_lines = trial.words.split('<BR>').length;

    //for testing layout, inserted '========...====<BR>' string in both parctice stims
    var start_stripe = trial.words.split('<BR>')[0];
    var lexwords = trial.words.split('<BR>')[1];
    
    //generic idea for (line) lexing (arbitrary choice, thinking someone my use 'his/her')
    var n_woi_false = lexwords.split('/').length;
    var n_woi_true = lexwords.split('#').length;

    var woi_all = lexwords.split('/'); //a list of words
    var woi_measure = lexwords.split('#'); //also a list of words

    //var copy_lexwords = Object.assign({}, lexwords);

    const sepone = '/'
    const sepone_replace = ' ';

    const replaced_first = lexwords.replaceAll(sepone, sepone_replace);

    const septwo = '#'
    const septwo_replace = ' ';

    const replaced_all = replaced_first.replaceAll(septwo, septwo_replace);


    //this was the original makeup for the plugin, calling it words again 
    var my_words = replaced_all;

    var n_words = my_words.split(' ').length;

    // debug only
    console.log('test spec monospace font: ');
    console.log(start_stripe);
    console.log('to lex: ');
    console.log(lexwords);
    //console.log('number of lines: ');
    //console.log(n_lines);
    console.log('this many words altogether ( output not always needed ): ');
    console.log(n_woi_false);
    console.log('this many words of HUGE interest for RT output: ');
    console.log(n_woi_true);
    
    console.log('list of all original "words": ');
    console.log(woi_all);
    console.log('list of all to be measured words: ');
    console.log(woi_measure);

    console.log('does this work?')
    console.log(my_words);



    function create_moving_window(words, position){
        var word_list = my_words.split(' ');
        var stimulus = word_list.map(function(word, index){
            if (index == position){
                return word;
            } else {
                return "-".repeat(word.length);
            }
        }).join(' ')

        return stimulus;
    }

    function show_stimulus(position){
        display_element.innerHTML = 
        '<div class="stimulus">' + 
        "<p>" + create_moving_window(my_words, position) + "</p>" + "</div>";
        jsPsych.pluginAPI.getKeyboardResponse({
            callback_function: after_response,
            valid_responses: [trial.key],
            rt_method: 'performance',
            persist: false,
            allow_held_key: false
        });
    }

    function after_response(response_info){
        rt.push(response_info.rt);

        current_position++;
            if(current_position == n_words){
                end_trial();
                } else {
            show_stimulus(current_position);
        }
    }

    function end_trial(){
        trial_data.rt = JSON.stringify(rt);
        
        // clear the display
        display_element.innerHTML = '';
        // end trial
        jsPsych.finishTrial(trial_data);
    }
    show_stimulus(current_position);
};

return plugin;
})();


  // ///////////////
  // /* The following function 'nativeSelector()' adapted from Stack Overflow answer here:
  // |   http://stackoverflow.com/a/2579869/82548
  // |  composed by Anurag (user profile: http://stackoverflow.com/users/165737/anurag)
  // +-----------------------------------------------------------------------------------*/
  // function nativeSelector() {
  //     var elements = document.querySelectorAll("body, body *");
  //     var results = [];
  //     var child;
  //     for(var i = 0; i < elements.length; i++) {
  //         child = elements[i].childNodes[0];
  //         if(elements[i].hasChildNodes() && child.nodeType == 3) {
  //             results.push(child);
  //         }
  //     }
  //     return results;
  // }

  ////////////

      /// test replacements

  // var textnodes1 = nativeSelector(),
  //    _nv;
  //    for (var i = 0, len = textnodes1.length; i<len; i++){
  //       _nv = textnodes1[i].nodeValue;
  //       textnodes1[i].nodeValue = _nv.replace(' / ', ' ');
  //     }

  // var textnodes2 = nativeSelector(),
  //    _nv;
  //    for (var i = 0, len = textnodes2.length; i<len; i++){
  //       _nv = textnodes2[i].nodeValue;
  //       textnodes2[i].nodeValue = _nv.replace(' /# ', ' ');
  // }    

  // console.log(textnodes1);
  // console.log(textnodes1);

    ///        

  //////////////



