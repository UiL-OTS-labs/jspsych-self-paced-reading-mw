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

    var n_lines = trial.words.split('<BR>').length;
    
    // togo
    console.log('number of lines: ');
    console.log(n_lines);

    var n_words_nomeasure_rt = trial.words.split(' / ').length;

    //togo
    console.log('number of words not to be measured: ');
    console.log(n_words_nomeasure_rt);

    var n_words_measure_rt = trial.words.split(' /# ').length;

    console.log('number of words to measured: ');
    console.log(n_words_measure_rt);

    var n_words = trial.words.split(' ').length;

    function create_moving_window(words, position){
        var word_list = words.split(' ');
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
        display_element.innerHTML = "<p style='font-family: monospace; font-size: 28px;'>" + create_moving_window(trial.words, position) + "</p>";

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



